<?php
/**
 * BEdita, API-first content management framework
 * Copyright 2018 ChannelWeb Srl, Chialab Srl
 *
 * This file is part of BEdita: you can redistribute it and/or modify
 * it under the terms of the GNU Lesser General Public License as published
 * by the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * See LICENSE.LGPL or <http://gnu.org/licenses/lgpl-3.0.html> for more details.
 */
namespace App\Controller;

use BEdita\SDK\BEditaClientException;
use Cake\Core\Configure;
use Cake\Event\Event;
use Cake\Http\Response;
use Cake\Utility\Hash;
use Psr\Log\LogLevel;

/**
 * User Profile controller: view and edit logged user data
 *
 * @property \App\Controller\Component\PropertiesComponent $Properties
 */
class UserProfileController extends AppController
{
    /**
     * {@inheritDoc}
     */
    public function initialize() : void
    {
        parent::initialize();

        $this->loadComponent('Properties');
    }

    /**
     * View profile data
     *
     * @return void
     */
    public function view() : void
    {
        $this->request->allowMethod(['get']);

        try {
            $response = $this->apiClient->get('/auth/user');
        } catch (BEditaClientException $e) {
            $this->log($e, LogLevel::ERROR);
            $this->Flash->error($e, ['params' => $e->getAttributes()]);
        }

        $revision = Hash::get($response, 'meta.schema.users.revision', null);
        $schema = $this->Schema->getSchema('users', $revision);
        $object = $response['data'];
        $this->set('schema', $schema);
        $this->set('object', $object);
        $this->set('properties', $this->Properties->viewGroups($object, 'user_profile'));
    }

    /**
     * Save user profile data
     *
     * @return \Cake\Http\Response|null
     */
    public function save() : ?Response
    {
        $data = $this->request->getData();
        try {
            $this->apiClient->patch('/auth/user', json_encode($data));
            $this->Flash->success(__('User profile saved'));
        } catch (BEditaClientException $e) {
            $this->log($e, LogLevel::ERROR);
            $this->Flash->error($e, ['params' => $e->getAttributes()]);
        }

        return $this->redirect(['_name' => 'user_profile:view']);
    }
}
