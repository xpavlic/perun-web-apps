/**
 * Perun RPC API
 * Perun Remote Procedure Calls Application Programming Interface
 *
 * The version of the OpenAPI document: 3.9.0
 * Contact: perun@cesnet.cz
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
import { ResourceTag } from './resourceTag';


/**
 * input to removeResourceTagFromResource
 */
export interface InputRemoveResourceTagFromResource { 
    /**
     * resource id
     */
    resource: number;
    resourceTag: ResourceTag;
}

