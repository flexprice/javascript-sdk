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
 * The ErrorsErrorDetail model module.
 * @module model/ErrorsErrorDetail
 * @version 1.0
 */
class ErrorsErrorDetail {
  /**
   * Constructs a new <code>ErrorsErrorDetail</code>.
   * @alias module:model/ErrorsErrorDetail
   */
  constructor() {
    ErrorsErrorDetail.initialize(this);
  }

  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */
  static initialize(obj) {}

  /**
   * Constructs a <code>ErrorsErrorDetail</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/ErrorsErrorDetail} obj Optional instance to populate.
   * @return {module:model/ErrorsErrorDetail} The populated <code>ErrorsErrorDetail</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new ErrorsErrorDetail();
      if (data.hasOwnProperty('details')) {
        obj['details'] = ApiClient.convertToType(data['details'], {
          'String': Object
        });
      }
      if (data.hasOwnProperty('internal_error')) {
        obj['internal_error'] = ApiClient.convertToType(data['internal_error'], 'String');
      }
      if (data.hasOwnProperty('message')) {
        obj['message'] = ApiClient.convertToType(data['message'], 'String');
      }
    }
    return obj;
  }

  /**
   * Validates the JSON data with respect to <code>ErrorsErrorDetail</code>.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @return {boolean} to indicate whether the JSON data is valid with respect to <code>ErrorsErrorDetail</code>.
   */
  static validateJSON(data) {
    // ensure the json data is a string
    if (data['internal_error'] && !(typeof data['internal_error'] === 'string' || data['internal_error'] instanceof String)) {
      throw new Error("Expected the field `internal_error` to be a primitive type in the JSON string but got " + data['internal_error']);
    }
    // ensure the json data is a string
    if (data['message'] && !(typeof data['message'] === 'string' || data['message'] instanceof String)) {
      throw new Error("Expected the field `message` to be a primitive type in the JSON string but got " + data['message']);
    }
    return true;
  }
}

/**
 * @member {Object.<String, Object>} details
 */
ErrorsErrorDetail.prototype['details'] = undefined;

/**
 * @member {String} internal_error
 */
ErrorsErrorDetail.prototype['internal_error'] = undefined;

/**
 * @member {String} message
 */
ErrorsErrorDetail.prototype['message'] = undefined;
export default ErrorsErrorDetail;