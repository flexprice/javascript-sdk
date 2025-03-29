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
 * The PricePriceTier model module.
 * @module model/PricePriceTier
 * @version 1.0
 */
class PricePriceTier {
  /**
   * Constructs a new <code>PricePriceTier</code>.
   * @alias module:model/PricePriceTier
   */
  constructor() {
    PricePriceTier.initialize(this);
  }

  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */
  static initialize(obj) {}

  /**
   * Constructs a <code>PricePriceTier</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/PricePriceTier} obj Optional instance to populate.
   * @return {module:model/PricePriceTier} The populated <code>PricePriceTier</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new PricePriceTier();
      if (data.hasOwnProperty('flat_amount')) {
        obj['flat_amount'] = ApiClient.convertToType(data['flat_amount'], 'Number');
      }
      if (data.hasOwnProperty('unit_amount')) {
        obj['unit_amount'] = ApiClient.convertToType(data['unit_amount'], 'Number');
      }
      if (data.hasOwnProperty('up_to')) {
        obj['up_to'] = ApiClient.convertToType(data['up_to'], 'Number');
      }
    }
    return obj;
  }

  /**
   * Validates the JSON data with respect to <code>PricePriceTier</code>.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @return {boolean} to indicate whether the JSON data is valid with respect to <code>PricePriceTier</code>.
   */
  static validateJSON(data) {
    return true;
  }
}

/**
 * FlatAmount is the flat amount for the given tier and it is applied on top of the unit amount*quantity. It solves cases in banking like 2.7% + 5c
 * @member {Number} flat_amount
 */
PricePriceTier.prototype['flat_amount'] = undefined;

/**
 * UnitAmount is the amount per unit for the given tier
 * @member {Number} unit_amount
 */
PricePriceTier.prototype['unit_amount'] = undefined;

/**
 * Upto is the quantity up to which this tier applies. It is null for the last tier
 * @member {Number} up_to
 */
PricePriceTier.prototype['up_to'] = undefined;
export default PricePriceTier;