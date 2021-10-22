<?php
namespace App\Controller\Administration;

/**
 * Config Controller
 */
class ConfigController extends AdministrationBaseController
{
    /**
     * Resource type in use
     *
     * @var string
     */
    protected $resourceType = 'config';

    /**
     * {@inheritDoc}
     */
    protected $properties = ['name', 'context', 'content', 'application_id'];
}
