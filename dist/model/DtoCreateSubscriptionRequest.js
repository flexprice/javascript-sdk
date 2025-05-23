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
import TypesBillingCadence from './TypesBillingCadence';
import TypesBillingCycle from './TypesBillingCycle';
import TypesBillingPeriod from './TypesBillingPeriod';

/**
 * The DtoCreateSubscriptionRequest model module.
 * @module model/DtoCreateSubscriptionRequest
 * @version 1.0
 */
class DtoCreateSubscriptionRequest {
  /**
   * Constructs a new <code>DtoCreateSubscriptionRequest</code>.
   * @alias module:model/DtoCreateSubscriptionRequest
   * @param billingCadence {module:model/TypesBillingCadence} 
   * @param billingPeriod {module:model/TypesBillingPeriod} 
   * @param billingPeriodCount {Number} 
   * @param currency {String} 
   * @param customerId {String} 
   * @param planId {String} 
   * @param startDate {String} 
   */
  constructor(billingCadence, billingPeriod, billingPeriodCount, currency, customerId, planId, startDate) {
    DtoCreateSubscriptionRequest.initialize(this, billingCadence, billingPeriod, billingPeriodCount, currency, customerId, planId, startDate);
  }

  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */
  static initialize(obj, billingCadence, billingPeriod, billingPeriodCount, currency, customerId, planId, startDate) {
    obj['billing_cadence'] = billingCadence;
    obj['billing_period'] = billingPeriod;
    obj['billing_period_count'] = billingPeriodCount;
    obj['currency'] = currency;
    obj['customer_id'] = customerId;
    obj['plan_id'] = planId;
    obj['start_date'] = startDate;
  }

  /**
   * Constructs a <code>DtoCreateSubscriptionRequest</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/DtoCreateSubscriptionRequest} obj Optional instance to populate.
   * @return {module:model/DtoCreateSubscriptionRequest} The populated <code>DtoCreateSubscriptionRequest</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new DtoCreateSubscriptionRequest();
      if (data.hasOwnProperty('billing_cadence')) {
        obj['billing_cadence'] = TypesBillingCadence.constructFromObject(data['billing_cadence']);
      }
      if (data.hasOwnProperty('billing_cycle')) {
        obj['billing_cycle'] = TypesBillingCycle.constructFromObject(data['billing_cycle']);
      }
      if (data.hasOwnProperty('billing_period')) {
        obj['billing_period'] = TypesBillingPeriod.constructFromObject(data['billing_period']);
      }
      if (data.hasOwnProperty('billing_period_count')) {
        obj['billing_period_count'] = ApiClient.convertToType(data['billing_period_count'], 'Number');
      }
      if (data.hasOwnProperty('currency')) {
        obj['currency'] = ApiClient.convertToType(data['currency'], 'String');
      }
      if (data.hasOwnProperty('customer_id')) {
        obj['customer_id'] = ApiClient.convertToType(data['customer_id'], 'String');
      }
      if (data.hasOwnProperty('end_date')) {
        obj['end_date'] = ApiClient.convertToType(data['end_date'], 'String');
      }
      if (data.hasOwnProperty('lookup_key')) {
        obj['lookup_key'] = ApiClient.convertToType(data['lookup_key'], 'String');
      }
      if (data.hasOwnProperty('metadata')) {
        obj['metadata'] = ApiClient.convertToType(data['metadata'], {
          'String': 'String'
        });
      }
      if (data.hasOwnProperty('plan_id')) {
        obj['plan_id'] = ApiClient.convertToType(data['plan_id'], 'String');
      }
      if (data.hasOwnProperty('start_date')) {
        obj['start_date'] = ApiClient.convertToType(data['start_date'], 'String');
      }
      if (data.hasOwnProperty('trial_end')) {
        obj['trial_end'] = ApiClient.convertToType(data['trial_end'], 'String');
      }
      if (data.hasOwnProperty('trial_start')) {
        obj['trial_start'] = ApiClient.convertToType(data['trial_start'], 'String');
      }
    }
    return obj;
  }

  /**
   * Validates the JSON data with respect to <code>DtoCreateSubscriptionRequest</code>.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @return {boolean} to indicate whether the JSON data is valid with respect to <code>DtoCreateSubscriptionRequest</code>.
   */
  static validateJSON(data) {
    // check to make sure all required properties are present in the JSON string
    for (const property of DtoCreateSubscriptionRequest.RequiredProperties) {
      if (!data.hasOwnProperty(property)) {
        throw new Error("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
      }
    }
    // ensure the json data is a string
    if (data['currency'] && !(typeof data['currency'] === 'string' || data['currency'] instanceof String)) {
      throw new Error("Expected the field `currency` to be a primitive type in the JSON string but got " + data['currency']);
    }
    // ensure the json data is a string
    if (data['customer_id'] && !(typeof data['customer_id'] === 'string' || data['customer_id'] instanceof String)) {
      throw new Error("Expected the field `customer_id` to be a primitive type in the JSON string but got " + data['customer_id']);
    }
    // ensure the json data is a string
    if (data['end_date'] && !(typeof data['end_date'] === 'string' || data['end_date'] instanceof String)) {
      throw new Error("Expected the field `end_date` to be a primitive type in the JSON string but got " + data['end_date']);
    }
    // ensure the json data is a string
    if (data['lookup_key'] && !(typeof data['lookup_key'] === 'string' || data['lookup_key'] instanceof String)) {
      throw new Error("Expected the field `lookup_key` to be a primitive type in the JSON string but got " + data['lookup_key']);
    }
    // ensure the json data is a string
    if (data['plan_id'] && !(typeof data['plan_id'] === 'string' || data['plan_id'] instanceof String)) {
      throw new Error("Expected the field `plan_id` to be a primitive type in the JSON string but got " + data['plan_id']);
    }
    // ensure the json data is a string
    if (data['start_date'] && !(typeof data['start_date'] === 'string' || data['start_date'] instanceof String)) {
      throw new Error("Expected the field `start_date` to be a primitive type in the JSON string but got " + data['start_date']);
    }
    // ensure the json data is a string
    if (data['trial_end'] && !(typeof data['trial_end'] === 'string' || data['trial_end'] instanceof String)) {
      throw new Error("Expected the field `trial_end` to be a primitive type in the JSON string but got " + data['trial_end']);
    }
    // ensure the json data is a string
    if (data['trial_start'] && !(typeof data['trial_start'] === 'string' || data['trial_start'] instanceof String)) {
      throw new Error("Expected the field `trial_start` to be a primitive type in the JSON string but got " + data['trial_start']);
    }
    return true;
  }
}
DtoCreateSubscriptionRequest.RequiredProperties = ["billing_cadence", "billing_period", "billing_period_count", "currency", "customer_id", "plan_id", "start_date"];

/**
 * @member {module:model/TypesBillingCadence} billing_cadence
 */
DtoCreateSubscriptionRequest.prototype['billing_cadence'] = undefined;

/**
 * @member {module:model/TypesBillingCycle} billing_cycle
 */
DtoCreateSubscriptionRequest.prototype['billing_cycle'] = undefined;

/**
 * @member {module:model/TypesBillingPeriod} billing_period
 */
DtoCreateSubscriptionRequest.prototype['billing_period'] = undefined;

/**
 * @member {Number} billing_period_count
 */
DtoCreateSubscriptionRequest.prototype['billing_period_count'] = undefined;

/**
 * @member {String} currency
 */
DtoCreateSubscriptionRequest.prototype['currency'] = undefined;

/**
 * @member {String} customer_id
 */
DtoCreateSubscriptionRequest.prototype['customer_id'] = undefined;

/**
 * @member {String} end_date
 */
DtoCreateSubscriptionRequest.prototype['end_date'] = undefined;

/**
 * @member {String} lookup_key
 */
DtoCreateSubscriptionRequest.prototype['lookup_key'] = undefined;

/**
 * @member {Object.<String, String>} metadata
 */
DtoCreateSubscriptionRequest.prototype['metadata'] = undefined;

/**
 * @member {String} plan_id
 */
DtoCreateSubscriptionRequest.prototype['plan_id'] = undefined;

/**
 * @member {String} start_date
 */
DtoCreateSubscriptionRequest.prototype['start_date'] = undefined;

/**
 * @member {String} trial_end
 */
DtoCreateSubscriptionRequest.prototype['trial_end'] = undefined;

/**
 * @member {String} trial_start
 */
DtoCreateSubscriptionRequest.prototype['trial_start'] = undefined;
export default DtoCreateSubscriptionRequest;