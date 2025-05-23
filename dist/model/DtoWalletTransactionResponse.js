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
import TypesTransactionReason from './TypesTransactionReason';
import TypesTransactionStatus from './TypesTransactionStatus';
import TypesWalletTxReferenceType from './TypesWalletTxReferenceType';

/**
 * The DtoWalletTransactionResponse model module.
 * @module model/DtoWalletTransactionResponse
 * @version 1.0
 */
class DtoWalletTransactionResponse {
  /**
   * Constructs a new <code>DtoWalletTransactionResponse</code>.
   * @alias module:model/DtoWalletTransactionResponse
   */
  constructor() {
    DtoWalletTransactionResponse.initialize(this);
  }

  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */
  static initialize(obj) {}

  /**
   * Constructs a <code>DtoWalletTransactionResponse</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/DtoWalletTransactionResponse} obj Optional instance to populate.
   * @return {module:model/DtoWalletTransactionResponse} The populated <code>DtoWalletTransactionResponse</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new DtoWalletTransactionResponse();
      if (data.hasOwnProperty('amount')) {
        obj['amount'] = ApiClient.convertToType(data['amount'], 'Number');
      }
      if (data.hasOwnProperty('created_at')) {
        obj['created_at'] = ApiClient.convertToType(data['created_at'], 'String');
      }
      if (data.hasOwnProperty('credit_amount')) {
        obj['credit_amount'] = ApiClient.convertToType(data['credit_amount'], 'Number');
      }
      if (data.hasOwnProperty('credit_balance_after')) {
        obj['credit_balance_after'] = ApiClient.convertToType(data['credit_balance_after'], 'Number');
      }
      if (data.hasOwnProperty('credit_balance_before')) {
        obj['credit_balance_before'] = ApiClient.convertToType(data['credit_balance_before'], 'Number');
      }
      if (data.hasOwnProperty('credits_available')) {
        obj['credits_available'] = ApiClient.convertToType(data['credits_available'], 'Number');
      }
      if (data.hasOwnProperty('description')) {
        obj['description'] = ApiClient.convertToType(data['description'], 'String');
      }
      if (data.hasOwnProperty('expiry_date')) {
        obj['expiry_date'] = ApiClient.convertToType(data['expiry_date'], 'String');
      }
      if (data.hasOwnProperty('id')) {
        obj['id'] = ApiClient.convertToType(data['id'], 'String');
      }
      if (data.hasOwnProperty('metadata')) {
        obj['metadata'] = ApiClient.convertToType(data['metadata'], {
          'String': 'String'
        });
      }
      if (data.hasOwnProperty('reference_id')) {
        obj['reference_id'] = ApiClient.convertToType(data['reference_id'], 'String');
      }
      if (data.hasOwnProperty('reference_type')) {
        obj['reference_type'] = TypesWalletTxReferenceType.constructFromObject(data['reference_type']);
      }
      if (data.hasOwnProperty('transaction_reason')) {
        obj['transaction_reason'] = TypesTransactionReason.constructFromObject(data['transaction_reason']);
      }
      if (data.hasOwnProperty('transaction_status')) {
        obj['transaction_status'] = TypesTransactionStatus.constructFromObject(data['transaction_status']);
      }
      if (data.hasOwnProperty('type')) {
        obj['type'] = ApiClient.convertToType(data['type'], 'String');
      }
      if (data.hasOwnProperty('wallet_id')) {
        obj['wallet_id'] = ApiClient.convertToType(data['wallet_id'], 'String');
      }
    }
    return obj;
  }

  /**
   * Validates the JSON data with respect to <code>DtoWalletTransactionResponse</code>.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @return {boolean} to indicate whether the JSON data is valid with respect to <code>DtoWalletTransactionResponse</code>.
   */
  static validateJSON(data) {
    // ensure the json data is a string
    if (data['created_at'] && !(typeof data['created_at'] === 'string' || data['created_at'] instanceof String)) {
      throw new Error("Expected the field `created_at` to be a primitive type in the JSON string but got " + data['created_at']);
    }
    // ensure the json data is a string
    if (data['description'] && !(typeof data['description'] === 'string' || data['description'] instanceof String)) {
      throw new Error("Expected the field `description` to be a primitive type in the JSON string but got " + data['description']);
    }
    // ensure the json data is a string
    if (data['expiry_date'] && !(typeof data['expiry_date'] === 'string' || data['expiry_date'] instanceof String)) {
      throw new Error("Expected the field `expiry_date` to be a primitive type in the JSON string but got " + data['expiry_date']);
    }
    // ensure the json data is a string
    if (data['id'] && !(typeof data['id'] === 'string' || data['id'] instanceof String)) {
      throw new Error("Expected the field `id` to be a primitive type in the JSON string but got " + data['id']);
    }
    // ensure the json data is a string
    if (data['reference_id'] && !(typeof data['reference_id'] === 'string' || data['reference_id'] instanceof String)) {
      throw new Error("Expected the field `reference_id` to be a primitive type in the JSON string but got " + data['reference_id']);
    }
    // ensure the json data is a string
    if (data['type'] && !(typeof data['type'] === 'string' || data['type'] instanceof String)) {
      throw new Error("Expected the field `type` to be a primitive type in the JSON string but got " + data['type']);
    }
    // ensure the json data is a string
    if (data['wallet_id'] && !(typeof data['wallet_id'] === 'string' || data['wallet_id'] instanceof String)) {
      throw new Error("Expected the field `wallet_id` to be a primitive type in the JSON string but got " + data['wallet_id']);
    }
    return true;
  }
}

/**
 * @member {Number} amount
 */
DtoWalletTransactionResponse.prototype['amount'] = undefined;

/**
 * @member {String} created_at
 */
DtoWalletTransactionResponse.prototype['created_at'] = undefined;

/**
 * @member {Number} credit_amount
 */
DtoWalletTransactionResponse.prototype['credit_amount'] = undefined;

/**
 * @member {Number} credit_balance_after
 */
DtoWalletTransactionResponse.prototype['credit_balance_after'] = undefined;

/**
 * @member {Number} credit_balance_before
 */
DtoWalletTransactionResponse.prototype['credit_balance_before'] = undefined;

/**
 * @member {Number} credits_available
 */
DtoWalletTransactionResponse.prototype['credits_available'] = undefined;

/**
 * @member {String} description
 */
DtoWalletTransactionResponse.prototype['description'] = undefined;

/**
 * @member {String} expiry_date
 */
DtoWalletTransactionResponse.prototype['expiry_date'] = undefined;

/**
 * @member {String} id
 */
DtoWalletTransactionResponse.prototype['id'] = undefined;

/**
 * @member {Object.<String, String>} metadata
 */
DtoWalletTransactionResponse.prototype['metadata'] = undefined;

/**
 * @member {String} reference_id
 */
DtoWalletTransactionResponse.prototype['reference_id'] = undefined;

/**
 * @member {module:model/TypesWalletTxReferenceType} reference_type
 */
DtoWalletTransactionResponse.prototype['reference_type'] = undefined;

/**
 * @member {module:model/TypesTransactionReason} transaction_reason
 */
DtoWalletTransactionResponse.prototype['transaction_reason'] = undefined;

/**
 * @member {module:model/TypesTransactionStatus} transaction_status
 */
DtoWalletTransactionResponse.prototype['transaction_status'] = undefined;

/**
 * @member {String} type
 */
DtoWalletTransactionResponse.prototype['type'] = undefined;

/**
 * @member {String} wallet_id
 */
DtoWalletTransactionResponse.prototype['wallet_id'] = undefined;
export default DtoWalletTransactionResponse;