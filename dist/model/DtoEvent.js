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
 * The DtoEvent model module.
 * @module model/DtoEvent
 * @version 1.0
 */
class DtoEvent {
  /**
   * Constructs a new <code>DtoEvent</code>.
   * @alias module:model/DtoEvent
   */
  constructor() {
    DtoEvent.initialize(this);
  }

  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */
  static initialize(obj) {}

  /**
   * Constructs a <code>DtoEvent</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/DtoEvent} obj Optional instance to populate.
   * @return {module:model/DtoEvent} The populated <code>DtoEvent</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new DtoEvent();
      if (data.hasOwnProperty('customer_id')) {
        obj['customer_id'] = ApiClient.convertToType(data['customer_id'], 'String');
      }
      if (data.hasOwnProperty('environment_id')) {
        obj['environment_id'] = ApiClient.convertToType(data['environment_id'], 'String');
      }
      if (data.hasOwnProperty('event_name')) {
        obj['event_name'] = ApiClient.convertToType(data['event_name'], 'String');
      }
      if (data.hasOwnProperty('external_customer_id')) {
        obj['external_customer_id'] = ApiClient.convertToType(data['external_customer_id'], 'String');
      }
      if (data.hasOwnProperty('id')) {
        obj['id'] = ApiClient.convertToType(data['id'], 'String');
      }
      if (data.hasOwnProperty('properties')) {
        obj['properties'] = ApiClient.convertToType(data['properties'], {
          'String': Object
        });
      }
      if (data.hasOwnProperty('source')) {
        obj['source'] = ApiClient.convertToType(data['source'], 'String');
      }
      if (data.hasOwnProperty('timestamp')) {
        obj['timestamp'] = ApiClient.convertToType(data['timestamp'], 'String');
      }
    }
    return obj;
  }

  /**
   * Validates the JSON data with respect to <code>DtoEvent</code>.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @return {boolean} to indicate whether the JSON data is valid with respect to <code>DtoEvent</code>.
   */
  static validateJSON(data) {
    // ensure the json data is a string
    if (data['customer_id'] && !(typeof data['customer_id'] === 'string' || data['customer_id'] instanceof String)) {
      throw new Error("Expected the field `customer_id` to be a primitive type in the JSON string but got " + data['customer_id']);
    }
    // ensure the json data is a string
    if (data['environment_id'] && !(typeof data['environment_id'] === 'string' || data['environment_id'] instanceof String)) {
      throw new Error("Expected the field `environment_id` to be a primitive type in the JSON string but got " + data['environment_id']);
    }
    // ensure the json data is a string
    if (data['event_name'] && !(typeof data['event_name'] === 'string' || data['event_name'] instanceof String)) {
      throw new Error("Expected the field `event_name` to be a primitive type in the JSON string but got " + data['event_name']);
    }
    // ensure the json data is a string
    if (data['external_customer_id'] && !(typeof data['external_customer_id'] === 'string' || data['external_customer_id'] instanceof String)) {
      throw new Error("Expected the field `external_customer_id` to be a primitive type in the JSON string but got " + data['external_customer_id']);
    }
    // ensure the json data is a string
    if (data['id'] && !(typeof data['id'] === 'string' || data['id'] instanceof String)) {
      throw new Error("Expected the field `id` to be a primitive type in the JSON string but got " + data['id']);
    }
    // ensure the json data is a string
    if (data['source'] && !(typeof data['source'] === 'string' || data['source'] instanceof String)) {
      throw new Error("Expected the field `source` to be a primitive type in the JSON string but got " + data['source']);
    }
    // ensure the json data is a string
    if (data['timestamp'] && !(typeof data['timestamp'] === 'string' || data['timestamp'] instanceof String)) {
      throw new Error("Expected the field `timestamp` to be a primitive type in the JSON string but got " + data['timestamp']);
    }
    return true;
  }
}

/**
 * @member {String} customer_id
 */
DtoEvent.prototype['customer_id'] = undefined;

/**
 * @member {String} environment_id
 */
DtoEvent.prototype['environment_id'] = undefined;

/**
 * @member {String} event_name
 */
DtoEvent.prototype['event_name'] = undefined;

/**
 * @member {String} external_customer_id
 */
DtoEvent.prototype['external_customer_id'] = undefined;

/**
 * @member {String} id
 */
DtoEvent.prototype['id'] = undefined;

/**
 * @member {Object.<String, Object>} properties
 */
DtoEvent.prototype['properties'] = undefined;

/**
 * @member {String} source
 */
DtoEvent.prototype['source'] = undefined;

/**
 * @member {String} timestamp
 */
DtoEvent.prototype['timestamp'] = undefined;
export default DtoEvent;