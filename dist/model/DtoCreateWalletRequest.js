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
import TypesAutoTopupTrigger from './TypesAutoTopupTrigger';
import TypesWalletConfig from './TypesWalletConfig';
import TypesWalletType from './TypesWalletType';

/**
 * The DtoCreateWalletRequest model module.
 * @module model/DtoCreateWalletRequest
 * @version 1.0
 */
class DtoCreateWalletRequest {
  /**
   * Constructs a new <code>DtoCreateWalletRequest</code>.
   * @alias module:model/DtoCreateWalletRequest
   * @param currency {String} 
   * @param customerId {String} 
   */
  constructor(currency, customerId) {
    DtoCreateWalletRequest.initialize(this, currency, customerId);
  }

  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */
  static initialize(obj, currency, customerId) {
    obj['currency'] = currency;
    obj['customer_id'] = customerId;
  }

  /**
   * Constructs a <code>DtoCreateWalletRequest</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/DtoCreateWalletRequest} obj Optional instance to populate.
   * @return {module:model/DtoCreateWalletRequest} The populated <code>DtoCreateWalletRequest</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new DtoCreateWalletRequest();
      if (data.hasOwnProperty('auto_topup_amount')) {
        obj['auto_topup_amount'] = ApiClient.convertToType(data['auto_topup_amount'], 'Number');
      }
      if (data.hasOwnProperty('auto_topup_min_balance')) {
        obj['auto_topup_min_balance'] = ApiClient.convertToType(data['auto_topup_min_balance'], 'Number');
      }
      if (data.hasOwnProperty('auto_topup_trigger')) {
        obj['auto_topup_trigger'] = TypesAutoTopupTrigger.constructFromObject(data['auto_topup_trigger']);
      }
      if (data.hasOwnProperty('config')) {
        obj['config'] = TypesWalletConfig.constructFromObject(data['config']);
      }
      if (data.hasOwnProperty('conversion_rate')) {
        obj['conversion_rate'] = ApiClient.convertToType(data['conversion_rate'], 'Number');
      }
      if (data.hasOwnProperty('currency')) {
        obj['currency'] = ApiClient.convertToType(data['currency'], 'String');
      }
      if (data.hasOwnProperty('customer_id')) {
        obj['customer_id'] = ApiClient.convertToType(data['customer_id'], 'String');
      }
      if (data.hasOwnProperty('description')) {
        obj['description'] = ApiClient.convertToType(data['description'], 'String');
      }
      if (data.hasOwnProperty('metadata')) {
        obj['metadata'] = ApiClient.convertToType(data['metadata'], {
          'String': 'String'
        });
      }
      if (data.hasOwnProperty('name')) {
        obj['name'] = ApiClient.convertToType(data['name'], 'String');
      }
      if (data.hasOwnProperty('wallet_type')) {
        obj['wallet_type'] = TypesWalletType.constructFromObject(data['wallet_type']);
      }
    }
    return obj;
  }

  /**
   * Validates the JSON data with respect to <code>DtoCreateWalletRequest</code>.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @return {boolean} to indicate whether the JSON data is valid with respect to <code>DtoCreateWalletRequest</code>.
   */
  static validateJSON(data) {
    // check to make sure all required properties are present in the JSON string
    for (const property of DtoCreateWalletRequest.RequiredProperties) {
      if (!data.hasOwnProperty(property)) {
        throw new Error("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
      }
    }
    // validate the optional field `config`
    if (data['config']) {
      // data not null
      TypesWalletConfig.validateJSON(data['config']);
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
    if (data['description'] && !(typeof data['description'] === 'string' || data['description'] instanceof String)) {
      throw new Error("Expected the field `description` to be a primitive type in the JSON string but got " + data['description']);
    }
    // ensure the json data is a string
    if (data['name'] && !(typeof data['name'] === 'string' || data['name'] instanceof String)) {
      throw new Error("Expected the field `name` to be a primitive type in the JSON string but got " + data['name']);
    }
    return true;
  }
}
DtoCreateWalletRequest.RequiredProperties = ["currency", "customer_id"];

/**
 * @member {Number} auto_topup_amount
 */
DtoCreateWalletRequest.prototype['auto_topup_amount'] = undefined;

/**
 * @member {Number} auto_topup_min_balance
 */
DtoCreateWalletRequest.prototype['auto_topup_min_balance'] = undefined;

/**
 * @member {module:model/TypesAutoTopupTrigger} auto_topup_trigger
 */
DtoCreateWalletRequest.prototype['auto_topup_trigger'] = undefined;

/**
 * @member {module:model/TypesWalletConfig} config
 */
DtoCreateWalletRequest.prototype['config'] = undefined;

/**
 * @member {Number} conversion_rate
 */
DtoCreateWalletRequest.prototype['conversion_rate'] = undefined;

/**
 * @member {String} currency
 */
DtoCreateWalletRequest.prototype['currency'] = undefined;

/**
 * @member {String} customer_id
 */
DtoCreateWalletRequest.prototype['customer_id'] = undefined;

/**
 * @member {String} description
 */
DtoCreateWalletRequest.prototype['description'] = undefined;

/**
 * @member {Object.<String, String>} metadata
 */
DtoCreateWalletRequest.prototype['metadata'] = undefined;

/**
 * @member {String} name
 */
DtoCreateWalletRequest.prototype['name'] = undefined;

/**
 * @member {module:model/TypesWalletType} wallet_type
 */
DtoCreateWalletRequest.prototype['wallet_type'] = undefined;
export default DtoCreateWalletRequest;