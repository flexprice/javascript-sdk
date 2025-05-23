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
import MeterFilter from './MeterFilter';

/**
 * The DtoUpdateFeatureRequest model module.
 * @module model/DtoUpdateFeatureRequest
 * @version 1.0
 */
class DtoUpdateFeatureRequest {
    /**
     * Constructs a new <code>DtoUpdateFeatureRequest</code>.
     * @alias module:model/DtoUpdateFeatureRequest
     */
    constructor() { 
        
        DtoUpdateFeatureRequest.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>DtoUpdateFeatureRequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/DtoUpdateFeatureRequest} obj Optional instance to populate.
     * @return {module:model/DtoUpdateFeatureRequest} The populated <code>DtoUpdateFeatureRequest</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new DtoUpdateFeatureRequest();

            if (data.hasOwnProperty('description')) {
                obj['description'] = ApiClient.convertToType(data['description'], 'String');
            }
            if (data.hasOwnProperty('filters')) {
                obj['filters'] = ApiClient.convertToType(data['filters'], [MeterFilter]);
            }
            if (data.hasOwnProperty('metadata')) {
                obj['metadata'] = ApiClient.convertToType(data['metadata'], {'String': 'String'});
            }
            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('unit_plural')) {
                obj['unit_plural'] = ApiClient.convertToType(data['unit_plural'], 'String');
            }
            if (data.hasOwnProperty('unit_singular')) {
                obj['unit_singular'] = ApiClient.convertToType(data['unit_singular'], 'String');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>DtoUpdateFeatureRequest</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>DtoUpdateFeatureRequest</code>.
     */
    static validateJSON(data) {
        // ensure the json data is a string
        if (data['description'] && !(typeof data['description'] === 'string' || data['description'] instanceof String)) {
            throw new Error("Expected the field `description` to be a primitive type in the JSON string but got " + data['description']);
        }
        if (data['filters']) { // data not null
            // ensure the json data is an array
            if (!Array.isArray(data['filters'])) {
                throw new Error("Expected the field `filters` to be an array in the JSON data but got " + data['filters']);
            }
            // validate the optional field `filters` (array)
            for (const item of data['filters']) {
                MeterFilter.validateJSON(item);
            };
        }
        // ensure the json data is a string
        if (data['name'] && !(typeof data['name'] === 'string' || data['name'] instanceof String)) {
            throw new Error("Expected the field `name` to be a primitive type in the JSON string but got " + data['name']);
        }
        // ensure the json data is a string
        if (data['unit_plural'] && !(typeof data['unit_plural'] === 'string' || data['unit_plural'] instanceof String)) {
            throw new Error("Expected the field `unit_plural` to be a primitive type in the JSON string but got " + data['unit_plural']);
        }
        // ensure the json data is a string
        if (data['unit_singular'] && !(typeof data['unit_singular'] === 'string' || data['unit_singular'] instanceof String)) {
            throw new Error("Expected the field `unit_singular` to be a primitive type in the JSON string but got " + data['unit_singular']);
        }

        return true;
    }


}



/**
 * @member {String} description
 */
DtoUpdateFeatureRequest.prototype['description'] = undefined;

/**
 * @member {Array.<module:model/MeterFilter>} filters
 */
DtoUpdateFeatureRequest.prototype['filters'] = undefined;

/**
 * @member {Object.<String, String>} metadata
 */
DtoUpdateFeatureRequest.prototype['metadata'] = undefined;

/**
 * @member {String} name
 */
DtoUpdateFeatureRequest.prototype['name'] = undefined;

/**
 * @member {String} unit_plural
 */
DtoUpdateFeatureRequest.prototype['unit_plural'] = undefined;

/**
 * @member {String} unit_singular
 */
DtoUpdateFeatureRequest.prototype['unit_singular'] = undefined;






export default DtoUpdateFeatureRequest;

