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
import DtoBillingPeriodInfo from './DtoBillingPeriodInfo';
import DtoFeatureUsageSummary from './DtoFeatureUsageSummary';
import TypesPaginationResponse from './TypesPaginationResponse';

/**
 * The DtoCustomerUsageSummaryResponse model module.
 * @module model/DtoCustomerUsageSummaryResponse
 * @version 1.0
 */
class DtoCustomerUsageSummaryResponse {
  /**
   * Constructs a new <code>DtoCustomerUsageSummaryResponse</code>.
   * @alias module:model/DtoCustomerUsageSummaryResponse
   */
  constructor() {
    DtoCustomerUsageSummaryResponse.initialize(this);
  }

  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */
  static initialize(obj) {}

  /**
   * Constructs a <code>DtoCustomerUsageSummaryResponse</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/DtoCustomerUsageSummaryResponse} obj Optional instance to populate.
   * @return {module:model/DtoCustomerUsageSummaryResponse} The populated <code>DtoCustomerUsageSummaryResponse</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new DtoCustomerUsageSummaryResponse();
      if (data.hasOwnProperty('customer_id')) {
        obj['customer_id'] = ApiClient.convertToType(data['customer_id'], 'String');
      }
      if (data.hasOwnProperty('features')) {
        obj['features'] = ApiClient.convertToType(data['features'], [DtoFeatureUsageSummary]);
      }
      if (data.hasOwnProperty('pagination')) {
        obj['pagination'] = TypesPaginationResponse.constructFromObject(data['pagination']);
      }
      if (data.hasOwnProperty('period')) {
        obj['period'] = DtoBillingPeriodInfo.constructFromObject(data['period']);
      }
    }
    return obj;
  }

  /**
   * Validates the JSON data with respect to <code>DtoCustomerUsageSummaryResponse</code>.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @return {boolean} to indicate whether the JSON data is valid with respect to <code>DtoCustomerUsageSummaryResponse</code>.
   */
  static validateJSON(data) {
    // ensure the json data is a string
    if (data['customer_id'] && !(typeof data['customer_id'] === 'string' || data['customer_id'] instanceof String)) {
      throw new Error("Expected the field `customer_id` to be a primitive type in the JSON string but got " + data['customer_id']);
    }
    if (data['features']) {
      // data not null
      // ensure the json data is an array
      if (!Array.isArray(data['features'])) {
        throw new Error("Expected the field `features` to be an array in the JSON data but got " + data['features']);
      }
      // validate the optional field `features` (array)
      for (const item of data['features']) {
        DtoFeatureUsageSummary.validateJSON(item);
      }
      ;
    }
    // validate the optional field `pagination`
    if (data['pagination']) {
      // data not null
      TypesPaginationResponse.validateJSON(data['pagination']);
    }
    // validate the optional field `period`
    if (data['period']) {
      // data not null
      DtoBillingPeriodInfo.validateJSON(data['period']);
    }
    return true;
  }
}

/**
 * @member {String} customer_id
 */
DtoCustomerUsageSummaryResponse.prototype['customer_id'] = undefined;

/**
 * @member {Array.<module:model/DtoFeatureUsageSummary>} features
 */
DtoCustomerUsageSummaryResponse.prototype['features'] = undefined;

/**
 * @member {module:model/TypesPaginationResponse} pagination
 */
DtoCustomerUsageSummaryResponse.prototype['pagination'] = undefined;

/**
 * @member {module:model/DtoBillingPeriodInfo} period
 */
DtoCustomerUsageSummaryResponse.prototype['period'] = undefined;
export default DtoCustomerUsageSummaryResponse;