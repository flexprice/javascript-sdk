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
 * The DtoCreateEnvironmentRequest model module.
 * @module model/DtoCreateEnvironmentRequest
 * @version 1.0
 */
class DtoCreateEnvironmentRequest {
  /**
   * Constructs a new <code>DtoCreateEnvironmentRequest</code>.
   * @alias module:model/DtoCreateEnvironmentRequest
   * @param name {String} 
   * @param type {String} 
   */
  constructor(name, type) {
    DtoCreateEnvironmentRequest.initialize(this, name, type);
  }

  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */
  static initialize(obj, name, type) {
    obj['name'] = name;
    obj['type'] = type;
  }

  /**
   * Constructs a <code>DtoCreateEnvironmentRequest</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/DtoCreateEnvironmentRequest} obj Optional instance to populate.
   * @return {module:model/DtoCreateEnvironmentRequest} The populated <code>DtoCreateEnvironmentRequest</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new DtoCreateEnvironmentRequest();
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
   * Validates the JSON data with respect to <code>DtoCreateEnvironmentRequest</code>.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @return {boolean} to indicate whether the JSON data is valid with respect to <code>DtoCreateEnvironmentRequest</code>.
   */
  static validateJSON(data) {
    // check to make sure all required properties are present in the JSON string
    for (const property of DtoCreateEnvironmentRequest.RequiredProperties) {
      if (!data.hasOwnProperty(property)) {
        throw new Error("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
      }
    }
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
DtoCreateEnvironmentRequest.RequiredProperties = ["name", "type"];

/**
 * @member {String} name
 */
DtoCreateEnvironmentRequest.prototype['name'] = undefined;

/**
 * @member {String} type
 */
DtoCreateEnvironmentRequest.prototype['type'] = undefined;
export default DtoCreateEnvironmentRequest;