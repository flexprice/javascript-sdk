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
 * The DtoUpdateEnvironmentRequest model module.
 * @module model/DtoUpdateEnvironmentRequest
 * @version 1.0
 */
class DtoUpdateEnvironmentRequest {
  /**
   * Constructs a new <code>DtoUpdateEnvironmentRequest</code>.
   * @alias module:model/DtoUpdateEnvironmentRequest
   */
  constructor() {
    DtoUpdateEnvironmentRequest.initialize(this);
  }

  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */
  static initialize(obj) {}

  /**
   * Constructs a <code>DtoUpdateEnvironmentRequest</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/DtoUpdateEnvironmentRequest} obj Optional instance to populate.
   * @return {module:model/DtoUpdateEnvironmentRequest} The populated <code>DtoUpdateEnvironmentRequest</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new DtoUpdateEnvironmentRequest();
      if (data.hasOwnProperty('name')) {
        obj['name'] = ApiClient.convertToType(data['name'], 'String');
      }
      if (data.hasOwnProperty('type')) {
        obj['type'] = ApiClient.convertToType(data['type'], 'String');
      }
    }
    return obj;
  }

  /**
   * Validates the JSON data with respect to <code>DtoUpdateEnvironmentRequest</code>.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @return {boolean} to indicate whether the JSON data is valid with respect to <code>DtoUpdateEnvironmentRequest</code>.
   */
  static validateJSON(data) {
    // ensure the json data is a string
    if (data['name'] && !(typeof data['name'] === 'string' || data['name'] instanceof String)) {
      throw new Error("Expected the field `name` to be a primitive type in the JSON string but got " + data['name']);
    }
    // ensure the json data is a string
    if (data['type'] && !(typeof data['type'] === 'string' || data['type'] instanceof String)) {
      throw new Error("Expected the field `type` to be a primitive type in the JSON string but got " + data['type']);
    }
    return true;
  }
}

/**
 * @member {String} name
 */
DtoUpdateEnvironmentRequest.prototype['name'] = undefined;

/**
 * @member {String} type
 */
DtoUpdateEnvironmentRequest.prototype['type'] = undefined;
export default DtoUpdateEnvironmentRequest;