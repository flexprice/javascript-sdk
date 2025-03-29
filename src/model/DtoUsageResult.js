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
 * The DtoUsageResult model module.
 * @module model/DtoUsageResult
 * @version 1.0
 */
class DtoUsageResult {
    /**
     * Constructs a new <code>DtoUsageResult</code>.
     * @alias module:model/DtoUsageResult
     */
    constructor() { 
        
        DtoUsageResult.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>DtoUsageResult</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/DtoUsageResult} obj Optional instance to populate.
     * @return {module:model/DtoUsageResult} The populated <code>DtoUsageResult</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new DtoUsageResult();

            if (data.hasOwnProperty('value')) {
                obj['value'] = ApiClient.convertToType(data['value'], 'Number');
            }
            if (data.hasOwnProperty('window_size')) {
                obj['window_size'] = ApiClient.convertToType(data['window_size'], 'String');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>DtoUsageResult</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>DtoUsageResult</code>.
     */
    static validateJSON(data) {
        // ensure the json data is a string
        if (data['window_size'] && !(typeof data['window_size'] === 'string' || data['window_size'] instanceof String)) {
            throw new Error("Expected the field `window_size` to be a primitive type in the JSON string but got " + data['window_size']);
        }

        return true;
    }


}



/**
 * @member {Number} value
 */
DtoUsageResult.prototype['value'] = undefined;

/**
 * @member {String} window_size
 */
DtoUsageResult.prototype['window_size'] = undefined;






export default DtoUsageResult;

