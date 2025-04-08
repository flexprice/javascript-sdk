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
 * The DtoGetEventsRequest model module.
 * @module model/DtoGetEventsRequest
 * @version 1.0
 */
class DtoGetEventsRequest {
  /**
   * Constructs a new <code>DtoGetEventsRequest</code>.
   * @alias module:model/DtoGetEventsRequest
   */
  constructor() {
    DtoGetEventsRequest.initialize(this);
  }

  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */
  static initialize(obj) {}

  /**
   * Constructs a <code>DtoGetEventsRequest</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/DtoGetEventsRequest} obj Optional instance to populate.
   * @return {module:model/DtoGetEventsRequest} The populated <code>DtoGetEventsRequest</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new DtoGetEventsRequest();
      if (data.hasOwnProperty('count_total')) {
        obj['count_total'] = ApiClient.convertToType(data['count_total'], 'Boolean');
      }
      if (data.hasOwnProperty('end_time')) {
        obj['end_time'] = ApiClient.convertToType(data['end_time'], 'String');
      }
      if (data.hasOwnProperty('event_id')) {
        obj['event_id'] = ApiClient.convertToType(data['event_id'], 'String');
      }
      if (data.hasOwnProperty('event_name')) {
        obj['event_name'] = ApiClient.convertToType(data['event_name'], 'String');
      }
      if (data.hasOwnProperty('external_customer_id')) {
        obj['external_customer_id'] = ApiClient.convertToType(data['external_customer_id'], 'String');
      }
      if (data.hasOwnProperty('iter_first_key')) {
        obj['iter_first_key'] = ApiClient.convertToType(data['iter_first_key'], 'String');
      }
      if (data.hasOwnProperty('iter_last_key')) {
        obj['iter_last_key'] = ApiClient.convertToType(data['iter_last_key'], 'String');
      }
      if (data.hasOwnProperty('offset')) {
        obj['offset'] = ApiClient.convertToType(data['offset'], 'Number');
      }
      if (data.hasOwnProperty('page_size')) {
        obj['page_size'] = ApiClient.convertToType(data['page_size'], 'Number');
      }
      if (data.hasOwnProperty('property_filters')) {
        obj['property_filters'] = ApiClient.convertToType(data['property_filters'], {
          'String': ['String']
        });
      }
      if (data.hasOwnProperty('start_time')) {
        obj['start_time'] = ApiClient.convertToType(data['start_time'], 'String');
      }
    }
    return obj;
  }

  /**
   * Validates the JSON data with respect to <code>DtoGetEventsRequest</code>.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @return {boolean} to indicate whether the JSON data is valid with respect to <code>DtoGetEventsRequest</code>.
   */
  static validateJSON(data) {
    // ensure the json data is a string
    if (data['end_time'] && !(typeof data['end_time'] === 'string' || data['end_time'] instanceof String)) {
      throw new Error("Expected the field `end_time` to be a primitive type in the JSON string but got " + data['end_time']);
    }
    // ensure the json data is a string
    if (data['event_id'] && !(typeof data['event_id'] === 'string' || data['event_id'] instanceof String)) {
      throw new Error("Expected the field `event_id` to be a primitive type in the JSON string but got " + data['event_id']);
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
    if (data['iter_first_key'] && !(typeof data['iter_first_key'] === 'string' || data['iter_first_key'] instanceof String)) {
      throw new Error("Expected the field `iter_first_key` to be a primitive type in the JSON string but got " + data['iter_first_key']);
    }
    // ensure the json data is a string
    if (data['iter_last_key'] && !(typeof data['iter_last_key'] === 'string' || data['iter_last_key'] instanceof String)) {
      throw new Error("Expected the field `iter_last_key` to be a primitive type in the JSON string but got " + data['iter_last_key']);
    }
    // ensure the json data is a string
    if (data['start_time'] && !(typeof data['start_time'] === 'string' || data['start_time'] instanceof String)) {
      throw new Error("Expected the field `start_time` to be a primitive type in the JSON string but got " + data['start_time']);
    }
    return true;
  }
}

/**
 * @member {Boolean} count_total
 */
DtoGetEventsRequest.prototype['count_total'] = undefined;

/**
 * @member {String} end_time
 */
DtoGetEventsRequest.prototype['end_time'] = undefined;

/**
 * @member {String} event_id
 */
DtoGetEventsRequest.prototype['event_id'] = undefined;

/**
 * @member {String} event_name
 */
DtoGetEventsRequest.prototype['event_name'] = undefined;

/**
 * @member {String} external_customer_id
 */
DtoGetEventsRequest.prototype['external_customer_id'] = undefined;

/**
 * @member {String} iter_first_key
 */
DtoGetEventsRequest.prototype['iter_first_key'] = undefined;

/**
 * @member {String} iter_last_key
 */
DtoGetEventsRequest.prototype['iter_last_key'] = undefined;

/**
 * @member {Number} offset
 */
DtoGetEventsRequest.prototype['offset'] = undefined;

/**
 * @member {Number} page_size
 */
DtoGetEventsRequest.prototype['page_size'] = undefined;

/**
 * @member {Object.<String, Array.<String>>} property_filters
 */
DtoGetEventsRequest.prototype['property_filters'] = undefined;

/**
 * @member {String} start_time
 */
DtoGetEventsRequest.prototype['start_time'] = undefined;
export default DtoGetEventsRequest;