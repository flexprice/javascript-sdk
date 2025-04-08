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
import DtoMeterResponse from './DtoMeterResponse';
import TypesPaginationResponse from './TypesPaginationResponse';

/**
 * The DtoListMetersResponse model module.
 * @module model/DtoListMetersResponse
 * @version 1.0
 */
class DtoListMetersResponse {
    /**
     * Constructs a new <code>DtoListMetersResponse</code>.
     * @alias module:model/DtoListMetersResponse
     */
    constructor() { 
        
        DtoListMetersResponse.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>DtoListMetersResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/DtoListMetersResponse} obj Optional instance to populate.
     * @return {module:model/DtoListMetersResponse} The populated <code>DtoListMetersResponse</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new DtoListMetersResponse();

            if (data.hasOwnProperty('items')) {
                obj['items'] = ApiClient.convertToType(data['items'], [DtoMeterResponse]);
            }
            if (data.hasOwnProperty('pagination')) {
                obj['pagination'] = TypesPaginationResponse.constructFromObject(data['pagination']);
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>DtoListMetersResponse</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>DtoListMetersResponse</code>.
     */
    static validateJSON(data) {
        if (data['items']) { // data not null
            // ensure the json data is an array
            if (!Array.isArray(data['items'])) {
                throw new Error("Expected the field `items` to be an array in the JSON data but got " + data['items']);
            }
            // validate the optional field `items` (array)
            for (const item of data['items']) {
                DtoMeterResponse.validateJSON(item);
            };
        }
        // validate the optional field `pagination`
        if (data['pagination']) { // data not null
          TypesPaginationResponse.validateJSON(data['pagination']);
        }

        return true;
    }


}



/**
 * @member {Array.<module:model/DtoMeterResponse>} items
 */
DtoListMetersResponse.prototype['items'] = undefined;

/**
 * @member {module:model/TypesPaginationResponse} pagination
 */
DtoListMetersResponse.prototype['pagination'] = undefined;






export default DtoListMetersResponse;

