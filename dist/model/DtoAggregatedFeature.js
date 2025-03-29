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
import DtoAggregatedEntitlement from './DtoAggregatedEntitlement';
import DtoEntitlementSource from './DtoEntitlementSource';
import DtoFeatureResponse from './DtoFeatureResponse';

/**
 * The DtoAggregatedFeature model module.
 * @module model/DtoAggregatedFeature
 * @version 1.0
 */
class DtoAggregatedFeature {
  /**
   * Constructs a new <code>DtoAggregatedFeature</code>.
   * @alias module:model/DtoAggregatedFeature
   */
  constructor() {
    DtoAggregatedFeature.initialize(this);
  }

  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */
  static initialize(obj) {}

  /**
   * Constructs a <code>DtoAggregatedFeature</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/DtoAggregatedFeature} obj Optional instance to populate.
   * @return {module:model/DtoAggregatedFeature} The populated <code>DtoAggregatedFeature</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new DtoAggregatedFeature();
      if (data.hasOwnProperty('entitlement')) {
        obj['entitlement'] = DtoAggregatedEntitlement.constructFromObject(data['entitlement']);
      }
      if (data.hasOwnProperty('feature')) {
        obj['feature'] = DtoFeatureResponse.constructFromObject(data['feature']);
      }
      if (data.hasOwnProperty('sources')) {
        obj['sources'] = ApiClient.convertToType(data['sources'], [DtoEntitlementSource]);
      }
    }
    return obj;
  }

  /**
   * Validates the JSON data with respect to <code>DtoAggregatedFeature</code>.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @return {boolean} to indicate whether the JSON data is valid with respect to <code>DtoAggregatedFeature</code>.
   */
  static validateJSON(data) {
    // validate the optional field `entitlement`
    if (data['entitlement']) {
      // data not null
      DtoAggregatedEntitlement.validateJSON(data['entitlement']);
    }
    // validate the optional field `feature`
    if (data['feature']) {
      // data not null
      DtoFeatureResponse.validateJSON(data['feature']);
    }
    if (data['sources']) {
      // data not null
      // ensure the json data is an array
      if (!Array.isArray(data['sources'])) {
        throw new Error("Expected the field `sources` to be an array in the JSON data but got " + data['sources']);
      }
      // validate the optional field `sources` (array)
      for (const item of data['sources']) {
        DtoEntitlementSource.validateJSON(item);
      }
      ;
    }
    return true;
  }
}

/**
 * @member {module:model/DtoAggregatedEntitlement} entitlement
 */
DtoAggregatedFeature.prototype['entitlement'] = undefined;

/**
 * @member {module:model/DtoFeatureResponse} feature
 */
DtoAggregatedFeature.prototype['feature'] = undefined;

/**
 * @member {Array.<module:model/DtoEntitlementSource>} sources
 */
DtoAggregatedFeature.prototype['sources'] = undefined;
export default DtoAggregatedFeature;