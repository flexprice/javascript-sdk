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
import DtoCustomerResponse from './DtoCustomerResponse';
import TypesPaginationResponse from './TypesPaginationResponse';

/**
 * The DtoListCustomersResponse model module.
 * @module model/DtoListCustomersResponse
 * @version 1.0
 */
class DtoListCustomersResponse {
  /**
   * Constructs a new <code>DtoListCustomersResponse</code>.
   * @alias module:model/DtoListCustomersResponse
   */
  constructor() {
    DtoListCustomersResponse.initialize(this);
  }

  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */
  static initialize(obj) {}

  /**
   * Constructs a <code>DtoListCustomersResponse</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/DtoListCustomersResponse} obj Optional instance to populate.
   * @return {module:model/DtoListCustomersResponse} The populated <code>DtoListCustomersResponse</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new DtoListCustomersResponse();
      if (data.hasOwnProperty('items')) {
        obj['items'] = ApiClient.convertToType(data['items'], [DtoCustomerResponse]);
      }
      if (data.hasOwnProperty('pagination')) {
        obj['pagination'] = TypesPaginationResponse.constructFromObject(data['pagination']);
      }
    }
    return obj;
  }

  /**
   * Validates the JSON data with respect to <code>DtoListCustomersResponse</code>.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @return {boolean} to indicate whether the JSON data is valid with respect to <code>DtoListCustomersResponse</code>.
   */
  static validateJSON(data) {
    if (data['items']) {
      // data not null
      // ensure the json data is an array
      if (!Array.isArray(data['items'])) {
        throw new Error("Expected the field `items` to be an array in the JSON data but got " + data['items']);
      }
      // validate the optional field `items` (array)
      for (const item of data['items']) {
        DtoCustomerResponse.validateJSON(item);
      }
      ;
    }
    // validate the optional field `pagination`
    if (data['pagination']) {
      // data not null
      TypesPaginationResponse.validateJSON(data['pagination']);
    }
    return true;
  }
}

/**
 * @member {Array.<module:model/DtoCustomerResponse>} items
 */
DtoListCustomersResponse.prototype['items'] = undefined;

/**
 * @member {module:model/TypesPaginationResponse} pagination
 */
DtoListCustomersResponse.prototype['pagination'] = undefined;
export default DtoListCustomersResponse;