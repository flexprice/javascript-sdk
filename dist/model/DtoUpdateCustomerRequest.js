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
 * The DtoUpdateCustomerRequest model module.
 * @module model/DtoUpdateCustomerRequest
 * @version 1.0
 */
class DtoUpdateCustomerRequest {
  /**
   * Constructs a new <code>DtoUpdateCustomerRequest</code>.
   * @alias module:model/DtoUpdateCustomerRequest
   */
  constructor() {
    DtoUpdateCustomerRequest.initialize(this);
  }

  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */
  static initialize(obj) {}

  /**
   * Constructs a <code>DtoUpdateCustomerRequest</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/DtoUpdateCustomerRequest} obj Optional instance to populate.
   * @return {module:model/DtoUpdateCustomerRequest} The populated <code>DtoUpdateCustomerRequest</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new DtoUpdateCustomerRequest();
      if (data.hasOwnProperty('address_city')) {
        obj['address_city'] = ApiClient.convertToType(data['address_city'], 'String');
      }
      if (data.hasOwnProperty('address_country')) {
        obj['address_country'] = ApiClient.convertToType(data['address_country'], 'String');
      }
      if (data.hasOwnProperty('address_line1')) {
        obj['address_line1'] = ApiClient.convertToType(data['address_line1'], 'String');
      }
      if (data.hasOwnProperty('address_line2')) {
        obj['address_line2'] = ApiClient.convertToType(data['address_line2'], 'String');
      }
      if (data.hasOwnProperty('address_postal_code')) {
        obj['address_postal_code'] = ApiClient.convertToType(data['address_postal_code'], 'String');
      }
      if (data.hasOwnProperty('address_state')) {
        obj['address_state'] = ApiClient.convertToType(data['address_state'], 'String');
      }
      if (data.hasOwnProperty('email')) {
        obj['email'] = ApiClient.convertToType(data['email'], 'String');
      }
      if (data.hasOwnProperty('external_id')) {
        obj['external_id'] = ApiClient.convertToType(data['external_id'], 'String');
      }
      if (data.hasOwnProperty('metadata')) {
        obj['metadata'] = ApiClient.convertToType(data['metadata'], {
          'String': 'String'
        });
      }
      if (data.hasOwnProperty('name')) {
        obj['name'] = ApiClient.convertToType(data['name'], 'String');
      }
    }
    return obj;
  }

  /**
   * Validates the JSON data with respect to <code>DtoUpdateCustomerRequest</code>.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @return {boolean} to indicate whether the JSON data is valid with respect to <code>DtoUpdateCustomerRequest</code>.
   */
  static validateJSON(data) {
    // ensure the json data is a string
    if (data['address_city'] && !(typeof data['address_city'] === 'string' || data['address_city'] instanceof String)) {
      throw new Error("Expected the field `address_city` to be a primitive type in the JSON string but got " + data['address_city']);
    }
    // ensure the json data is a string
    if (data['address_country'] && !(typeof data['address_country'] === 'string' || data['address_country'] instanceof String)) {
      throw new Error("Expected the field `address_country` to be a primitive type in the JSON string but got " + data['address_country']);
    }
    // ensure the json data is a string
    if (data['address_line1'] && !(typeof data['address_line1'] === 'string' || data['address_line1'] instanceof String)) {
      throw new Error("Expected the field `address_line1` to be a primitive type in the JSON string but got " + data['address_line1']);
    }
    // ensure the json data is a string
    if (data['address_line2'] && !(typeof data['address_line2'] === 'string' || data['address_line2'] instanceof String)) {
      throw new Error("Expected the field `address_line2` to be a primitive type in the JSON string but got " + data['address_line2']);
    }
    // ensure the json data is a string
    if (data['address_postal_code'] && !(typeof data['address_postal_code'] === 'string' || data['address_postal_code'] instanceof String)) {
      throw new Error("Expected the field `address_postal_code` to be a primitive type in the JSON string but got " + data['address_postal_code']);
    }
    // ensure the json data is a string
    if (data['address_state'] && !(typeof data['address_state'] === 'string' || data['address_state'] instanceof String)) {
      throw new Error("Expected the field `address_state` to be a primitive type in the JSON string but got " + data['address_state']);
    }
    // ensure the json data is a string
    if (data['email'] && !(typeof data['email'] === 'string' || data['email'] instanceof String)) {
      throw new Error("Expected the field `email` to be a primitive type in the JSON string but got " + data['email']);
    }
    // ensure the json data is a string
    if (data['external_id'] && !(typeof data['external_id'] === 'string' || data['external_id'] instanceof String)) {
      throw new Error("Expected the field `external_id` to be a primitive type in the JSON string but got " + data['external_id']);
    }
    // ensure the json data is a string
    if (data['name'] && !(typeof data['name'] === 'string' || data['name'] instanceof String)) {
      throw new Error("Expected the field `name` to be a primitive type in the JSON string but got " + data['name']);
    }
    return true;
  }
}

/**
 * @member {String} address_city
 */
DtoUpdateCustomerRequest.prototype['address_city'] = undefined;

/**
 * @member {String} address_country
 */
DtoUpdateCustomerRequest.prototype['address_country'] = undefined;

/**
 * @member {String} address_line1
 */
DtoUpdateCustomerRequest.prototype['address_line1'] = undefined;

/**
 * @member {String} address_line2
 */
DtoUpdateCustomerRequest.prototype['address_line2'] = undefined;

/**
 * @member {String} address_postal_code
 */
DtoUpdateCustomerRequest.prototype['address_postal_code'] = undefined;

/**
 * @member {String} address_state
 */
DtoUpdateCustomerRequest.prototype['address_state'] = undefined;

/**
 * @member {String} email
 */
DtoUpdateCustomerRequest.prototype['email'] = undefined;

/**
 * @member {String} external_id
 */
DtoUpdateCustomerRequest.prototype['external_id'] = undefined;

/**
 * @member {Object.<String, String>} metadata
 */
DtoUpdateCustomerRequest.prototype['metadata'] = undefined;

/**
 * @member {String} name
 */
DtoUpdateCustomerRequest.prototype['name'] = undefined;
export default DtoUpdateCustomerRequest;