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

/**
 * The DtoUpdatePriceRequest model module.
 * @module model/DtoUpdatePriceRequest
 * @version 1.0
 */
class DtoUpdatePriceRequest {
    /**
     * Constructs a new <code>DtoUpdatePriceRequest</code>.
     * @alias module:model/DtoUpdatePriceRequest
     */
    constructor() { 
        
        DtoUpdatePriceRequest.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>DtoUpdatePriceRequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/DtoUpdatePriceRequest} obj Optional instance to populate.
     * @return {module:model/DtoUpdatePriceRequest} The populated <code>DtoUpdatePriceRequest</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new DtoUpdatePriceRequest();

            if (data.hasOwnProperty('description')) {
                obj['description'] = ApiClient.convertToType(data['description'], 'String');
            }
            if (data.hasOwnProperty('lookup_key')) {
                obj['lookup_key'] = ApiClient.convertToType(data['lookup_key'], 'String');
            }
            if (data.hasOwnProperty('metadata')) {
                obj['metadata'] = ApiClient.convertToType(data['metadata'], {'String': 'String'});
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>DtoUpdatePriceRequest</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>DtoUpdatePriceRequest</code>.
     */
    static validateJSON(data) {
        // ensure the json data is a string
        if (data['description'] && !(typeof data['description'] === 'string' || data['description'] instanceof String)) {
            throw new Error("Expected the field `description` to be a primitive type in the JSON string but got " + data['description']);
        }
        // ensure the json data is a string
        if (data['lookup_key'] && !(typeof data['lookup_key'] === 'string' || data['lookup_key'] instanceof String)) {
            throw new Error("Expected the field `lookup_key` to be a primitive type in the JSON string but got " + data['lookup_key']);
        }

        return true;
    }


}



/**
 * @member {String} description
 */
DtoUpdatePriceRequest.prototype['description'] = undefined;

/**
 * @member {String} lookup_key
 */
DtoUpdatePriceRequest.prototype['lookup_key'] = undefined;

/**
 * @member {Object.<String, String>} metadata
 */
DtoUpdatePriceRequest.prototype['metadata'] = undefined;






export default DtoUpdatePriceRequest;

