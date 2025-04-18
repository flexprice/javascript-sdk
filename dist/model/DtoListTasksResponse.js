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
import DtoTaskResponse from './DtoTaskResponse';
import TypesPaginationResponse from './TypesPaginationResponse';

/**
 * The DtoListTasksResponse model module.
 * @module model/DtoListTasksResponse
 * @version 1.0
 */
class DtoListTasksResponse {
  /**
   * Constructs a new <code>DtoListTasksResponse</code>.
   * @alias module:model/DtoListTasksResponse
   */
  constructor() {
    DtoListTasksResponse.initialize(this);
  }

  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */
  static initialize(obj) {}

  /**
   * Constructs a <code>DtoListTasksResponse</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/DtoListTasksResponse} obj Optional instance to populate.
   * @return {module:model/DtoListTasksResponse} The populated <code>DtoListTasksResponse</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new DtoListTasksResponse();
      if (data.hasOwnProperty('items')) {
        obj['items'] = ApiClient.convertToType(data['items'], [DtoTaskResponse]);
      }
      if (data.hasOwnProperty('pagination')) {
        obj['pagination'] = TypesPaginationResponse.constructFromObject(data['pagination']);
      }
    }
    return obj;
  }

  /**
   * Validates the JSON data with respect to <code>DtoListTasksResponse</code>.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @return {boolean} to indicate whether the JSON data is valid with respect to <code>DtoListTasksResponse</code>.
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
        DtoTaskResponse.validateJSON(item);
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
 * @member {Array.<module:model/DtoTaskResponse>} items
 */
DtoListTasksResponse.prototype['items'] = undefined;

/**
 * @member {module:model/TypesPaginationResponse} pagination
 */
DtoListTasksResponse.prototype['pagination'] = undefined;
export default DtoListTasksResponse;