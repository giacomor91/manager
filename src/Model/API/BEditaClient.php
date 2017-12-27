<?php
/**
 * BEdita, API-first content management framework
 * Copyright 2017 ChannelWeb Srl, Chialab Srl
 *
 * This file is part of BEdita: you can redistribute it and/or modify
 * it under the terms of the GNU Lesser General Public License as published
 * by the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * See LICENSE.LGPL or <http://gnu.org/licenses/lgpl-3.0.html> for more details.
 */

namespace App\Model\API;

use GuzzleHttp\Psr7\Request;
use Http\Adapter\Guzzle6\Client;
use Psr\Http\Message\ResponseInterface;
use WoohooLabs\Yang\JsonApi\Client\JsonApiClient;

/**
 * BEdita4 API Client class
 */
class BEditaClient
{
    /**
     * @var ResponseInterface
     *
     */
    private $response;

    /**
     * BEdita4 API base URL
     *
     * @var string
     */
    private $apiBaseUrl = null;

    /**
     * BEdita4 API KEY
     *
     * @var string
     */
    private $apiKey = null;

    /**
     * Default headers in request
     *
     * @var array
     */
    private $defaultHeaders = [
        'Accept' => 'application/vnd.api+json',
    ];

    /**
     * JWT Auth tokens
     *
     * @var array
     */
    private $tokens = [];

    /**
     * JSON API BEdita4 client
     *
     * @var \WoohooLabs\Yang\JsonApi\Client\JsonApiClient
     */
    private $jsonApiClient = null;

    /**
     * Setup main client options:
     *  - API base URL
     *  - API KEY
     *  - Auth tokens 'jwt' and 'renew' (optional)
     *
     * @param string $apiUrl API base URL
     * @param string $apiKey API key
     * @param array $tokens JWT Autorization tokens as associative array ['jwt' => '###', 'renew' => '###']
     * @return void
     */
    public function __construct($apiUrl, $apiKey = null, array $tokens = [])
    {
        $this->apiBaseUrl = $apiUrl;
        $this->apiKey = $apiKey;

        $this->defaultHeaders['X-Api-Key'] = $this->apiKey;
        $this->setupTokens($tokens);

        // setup an asynchronous JSON API client
        $guzzleClient = Client::createWithConfig([]);
        $this->jsonApiClient = new JsonApiClient($guzzleClient);
    }

    /**
     * Setup JWT access and refresh tokens.
     *
     * @param array $tokens JWT tokens as associative array ['jwt' => '###', 'renew' => '###']
     * @return array Response in array format
     */
    protected function setupTokens(array $tokens)
    {
        $this->tokens = $tokens;
        if (!empty($tokens['jwt'])) {
            $this->defaultHeaders['Authorization'] = 'Bearer ' . $tokens['jwt'];
        } else {
            unset($this->defaultHeaders['Authorization']);
        }
    }

    /**
     * Get last HTTP response
     *
     * @return ResponseInterface Response PSR interface
     */
    public function getResponse()
    {
        return $this->response;
    }

    /**
     * Get HTTP response status code
     *
     * @return int Status code.
     */
    public function getStatusCode()
    {
        return $this->response->getStatusCode();
    }

    /**
     * Get response body serialized into a PHP array
     *
     * @return array Response body as PHP array.
     */
    public function getResponseBody()
    {
        return json_decode($this->response->getBody()->__toString(), true);
    }

    /**
     * Classic authentication via POST /auth using username and password
     *
     * @param string $username
     * @param string $password
     * @return array Response in array format
     */
    public function authenticate($username, $password)
    {
        $body = json_encode(compact('username', 'password'));

        return $this->post('/auth', $body, ['Content-Type' => 'application/json']);
    }

    /**
     * Send a GET request a list of resources or objects or a single resource or object
     *
     * @param string $endpoint Endpoint URL path to invoke
     * @param array $query Optional query string
     * @return array Response in array format
     */
    public function get($path, $query = [], $headers = [])
    {
        $this->sendRequest('GET', $path, $query, $headers);

        return $this->getResponseBody();
    }

    /**
     * Send a POST request for creating resources or objects or other operations like /auth
     *
     * @param string $endpoint Endpoint URL path to invoke
     * @param array $headers Custom request headers
     * @return array Response in array format
     */
    public function post($path, $body, $headers = [])
    {
        $this->sendRequest('POST', $path, null, $headers, $body);

        return $this->getResponseBody();
    }

    /**
     * Send a generic JSON API request and retrieve response $this->response
     *
     * @param string $endpoint Endpoint URL path to invoke
     * @param array $query Optional query string
     * @param array $headers Custom request headers
     * @param mixed $body Request body
     * @param boolean $refresh In case of token expired response try a token refresh and repeat request. Default 'true'. Used to avoid loops.
     * @return void
     */
    protected function sendRequest($method, $path, $query = [], $headers = [], $body = null, $refresh = true)
    {
        $uri = $this->apiBaseUrl . $path;
        if ($query) {
            $uri .= '?' . http_build_query($query);
        }
        $headers = array_merge($this->defaultHeaders, $headers);

        // Send the request syncronously to retrieve the response
        $this->response = $this->jsonApiClient->sendRequest(new Request($method, $uri, $headers, $body));
        // in case of 401 response with `be_token_expired` code refresh token and send request again
        if ($refresh && $this->getStatusCode() === 401 &&
            Hash::get($this->getResponseBody(), 'error.code') === 'be_token_expired') {
            if ($this->refreshTokens()) {
                return $this->sendRequest($method, $path, $query, $headers, $body, false);
            }
        }
    }

    /**
     * Send a refresh token request.
     * On success `$this->token` data will be updated with new access and renew tokens.
     *
     * @return boolean True on success, false on failure
     */
    public function refreshTokens()
    {
        if (empty($this->tokens['renew'])) {
            return false;
        }
        $headers = array_merge($this->defaultHeaders, ['Authorization' => 'Bearer ' . $tokens['renew']]);
        $uri = $this->apiBaseUrl . '/auth';
        $response = $this->jsonApiClient->sendRequest(new Request('POST', $uri, $headers));
        $meta = Hash::get(json_decode($this->response->getBody()->__toString(), true), 'meta');
        if (empty($meta['jwt'])) {
            return false;
        }
        $this->setupTokens($meta);

        return true;
    }
}
