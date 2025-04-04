/**
 * FlexPrice API
 * FlexPrice API Service
 *
 * The version of the OpenAPI document: 1.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient';
import TypesSecretProvider from './TypesSecretProvider';
import TypesSecretType from './TypesSecretType';
import TypesStatus from './TypesStatus';

/**
 * The DtoSecretResponse model module.
 * @module model/DtoSecretResponse
 * @version 1.0
 */
class DtoSecretResponse {
    /**
     * Constructs a new <code>DtoSecretResponse</code>.
     * @alias module:model/DtoSecretResponse
     */
    constructor() { 
        
        DtoSecretResponse.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>DtoSecretResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/DtoSecretResponse} obj Optional instance to populate.
     * @return {module:model/DtoSecretResponse} The populated <code>DtoSecretResponse</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new DtoSecretResponse();

            if (data.hasOwnProperty('created_at')) {
                obj['created_at'] = ApiClient.convertToType(data['created_at'], 'String');
            }
            if (data.hasOwnProperty('display_id')) {
                obj['display_id'] = ApiClient.convertToType(data['display_id'], 'String');
            }
            if (data.hasOwnProperty('expires_at')) {
                obj['expires_at'] = ApiClient.convertToType(data['expires_at'], 'String');
            }
            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'String');
            }
            if (data.hasOwnProperty('last_used_at')) {
                obj['last_used_at'] = ApiClient.convertToType(data['last_used_at'], 'String');
            }
            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('permissions')) {
                obj['permissions'] = ApiClient.convertToType(data['permissions'], ['String']);
            }
            if (data.hasOwnProperty('provider')) {
                obj['provider'] = TypesSecretProvider.constructFromObject(data['provider']);
            }
            if (data.hasOwnProperty('status')) {
                obj['status'] = TypesStatus.constructFromObject(data['status']);
            }
            if (data.hasOwnProperty('type')) {
                obj['type'] = TypesSecretType.constructFromObject(data['type']);
            }
            if (data.hasOwnProperty('updated_at')) {
                obj['updated_at'] = ApiClient.convertToType(data['updated_at'], 'String');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>DtoSecretResponse</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>DtoSecretResponse</code>.
     */
    static validateJSON(data) {
        // ensure the json data is a string
        if (data['created_at'] && !(typeof data['created_at'] === 'string' || data['created_at'] instanceof String)) {
            throw new Error("Expected the field `created_at` to be a primitive type in the JSON string but got " + data['created_at']);
        }
        // ensure the json data is a string
        if (data['display_id'] && !(typeof data['display_id'] === 'string' || data['display_id'] instanceof String)) {
            throw new Error("Expected the field `display_id` to be a primitive type in the JSON string but got " + data['display_id']);
        }
        // ensure the json data is a string
        if (data['expires_at'] && !(typeof data['expires_at'] === 'string' || data['expires_at'] instanceof String)) {
            throw new Error("Expected the field `expires_at` to be a primitive type in the JSON string but got " + data['expires_at']);
        }
        // ensure the json data is a string
        if (data['id'] && !(typeof data['id'] === 'string' || data['id'] instanceof String)) {
            throw new Error("Expected the field `id` to be a primitive type in the JSON string but got " + data['id']);
        }
        // ensure the json data is a string
        if (data['last_used_at'] && !(typeof data['last_used_at'] === 'string' || data['last_used_at'] instanceof String)) {
            throw new Error("Expected the field `last_used_at` to be a primitive type in the JSON string but got " + data['last_used_at']);
        }
        // ensure the json data is a string
        if (data['name'] && !(typeof data['name'] === 'string' || data['name'] instanceof String)) {
            throw new Error("Expected the field `name` to be a primitive type in the JSON string but got " + data['name']);
        }
        // ensure the json data is an array
        if (!Array.isArray(data['permissions'])) {
            throw new Error("Expected the field `permissions` to be an array in the JSON data but got " + data['permissions']);
        }
        // ensure the json data is a string
        if (data['updated_at'] && !(typeof data['updated_at'] === 'string' || data['updated_at'] instanceof String)) {
            throw new Error("Expected the field `updated_at` to be a primitive type in the JSON string but got " + data['updated_at']);
        }

        return true;
    }


}



/**
 * @member {String} created_at
 */
DtoSecretResponse.prototype['created_at'] = undefined;

/**
 * @member {String} display_id
 */
DtoSecretResponse.prototype['display_id'] = undefined;

/**
 * @member {String} expires_at
 */
DtoSecretResponse.prototype['expires_at'] = undefined;

/**
 * @member {String} id
 */
DtoSecretResponse.prototype['id'] = undefined;

/**
 * @member {String} last_used_at
 */
DtoSecretResponse.prototype['last_used_at'] = undefined;

/**
 * @member {String} name
 */
DtoSecretResponse.prototype['name'] = undefined;

/**
 * @member {Array.<String>} permissions
 */
DtoSecretResponse.prototype['permissions'] = undefined;

/**
 * @member {module:model/TypesSecretProvider} provider
 */
DtoSecretResponse.prototype['provider'] = undefined;

/**
 * @member {module:model/TypesStatus} status
 */
DtoSecretResponse.prototype['status'] = undefined;

/**
 * @member {module:model/TypesSecretType} type
 */
DtoSecretResponse.prototype['type'] = undefined;

/**
 * @member {String} updated_at
 */
DtoSecretResponse.prototype['updated_at'] = undefined;






export default DtoSecretResponse;

