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
import PricePrice from './PricePrice';

/**
 * The DtoSubscriptionUsageByMetersResponse model module.
 * @module model/DtoSubscriptionUsageByMetersResponse
 * @version 1.0
 */
class DtoSubscriptionUsageByMetersResponse {
  /**
   * Constructs a new <code>DtoSubscriptionUsageByMetersResponse</code>.
   * @alias module:model/DtoSubscriptionUsageByMetersResponse
   */
  constructor() {
    DtoSubscriptionUsageByMetersResponse.initialize(this);
  }

  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */
  static initialize(obj) {}

  /**
   * Constructs a <code>DtoSubscriptionUsageByMetersResponse</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/DtoSubscriptionUsageByMetersResponse} obj Optional instance to populate.
   * @return {module:model/DtoSubscriptionUsageByMetersResponse} The populated <code>DtoSubscriptionUsageByMetersResponse</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new DtoSubscriptionUsageByMetersResponse();
      if (data.hasOwnProperty('amount')) {
        obj['amount'] = ApiClient.convertToType(data['amount'], 'Number');
      }
      if (data.hasOwnProperty('currency')) {
        obj['currency'] = ApiClient.convertToType(data['currency'], 'String');
      }
      if (data.hasOwnProperty('display_amount')) {
        obj['display_amount'] = ApiClient.convertToType(data['display_amount'], 'String');
      }
      if (data.hasOwnProperty('filter_values')) {
        obj['filter_values'] = ApiClient.convertToType(data['filter_values'], {
          'String': ['String']
        });
      }
      if (data.hasOwnProperty('meter_display_name')) {
        obj['meter_display_name'] = ApiClient.convertToType(data['meter_display_name'], 'String');
      }
      if (data.hasOwnProperty('meter_id')) {
        obj['meter_id'] = ApiClient.convertToType(data['meter_id'], 'String');
      }
      if (data.hasOwnProperty('price')) {
        obj['price'] = PricePrice.constructFromObject(data['price']);
      }
      if (data.hasOwnProperty('quantity')) {
        obj['quantity'] = ApiClient.convertToType(data['quantity'], 'Number');
      }
    }
    return obj;
  }

  /**
   * Validates the JSON data with respect to <code>DtoSubscriptionUsageByMetersResponse</code>.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @return {boolean} to indicate whether the JSON data is valid with respect to <code>DtoSubscriptionUsageByMetersResponse</code>.
   */
  static validateJSON(data) {
    // ensure the json data is a string
    if (data['currency'] && !(typeof data['currency'] === 'string' || data['currency'] instanceof String)) {
      throw new Error("Expected the field `currency` to be a primitive type in the JSON string but got " + data['currency']);
    }
    // ensure the json data is a string
    if (data['display_amount'] && !(typeof data['display_amount'] === 'string' || data['display_amount'] instanceof String)) {
      throw new Error("Expected the field `display_amount` to be a primitive type in the JSON string but got " + data['display_amount']);
    }
    // ensure the json data is a string
    if (data['meter_display_name'] && !(typeof data['meter_display_name'] === 'string' || data['meter_display_name'] instanceof String)) {
      throw new Error("Expected the field `meter_display_name` to be a primitive type in the JSON string but got " + data['meter_display_name']);
    }
    // ensure the json data is a string
    if (data['meter_id'] && !(typeof data['meter_id'] === 'string' || data['meter_id'] instanceof String)) {
      throw new Error("Expected the field `meter_id` to be a primitive type in the JSON string but got " + data['meter_id']);
    }
    // validate the optional field `price`
    if (data['price']) {
      // data not null
      PricePrice.validateJSON(data['price']);
    }
    return true;
  }
}

/**
 * @member {Number} amount
 */
DtoSubscriptionUsageByMetersResponse.prototype['amount'] = undefined;

/**
 * @member {String} currency
 */
DtoSubscriptionUsageByMetersResponse.prototype['currency'] = undefined;

/**
 * @member {String} display_amount
 */
DtoSubscriptionUsageByMetersResponse.prototype['display_amount'] = undefined;

/**
 * @member {Object.<String, Array.<String>>} filter_values
 */
DtoSubscriptionUsageByMetersResponse.prototype['filter_values'] = undefined;

/**
 * @member {String} meter_display_name
 */
DtoSubscriptionUsageByMetersResponse.prototype['meter_display_name'] = undefined;

/**
 * @member {String} meter_id
 */
DtoSubscriptionUsageByMetersResponse.prototype['meter_id'] = undefined;

/**
 * @member {module:model/PricePrice} price
 */
DtoSubscriptionUsageByMetersResponse.prototype['price'] = undefined;

/**
 * @member {Number} quantity
 */
DtoSubscriptionUsageByMetersResponse.prototype['quantity'] = undefined;
export default DtoSubscriptionUsageByMetersResponse;