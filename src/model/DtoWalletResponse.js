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
import TypesWalletStatus from './TypesWalletStatus';
import TypesWalletType from './TypesWalletType';

/**
 * The DtoWalletResponse model module.
 * @module model/DtoWalletResponse
 * @version 1.0
 */
class DtoWalletResponse {
    /**
     * Constructs a new <code>DtoWalletResponse</code>.
     * @alias module:model/DtoWalletResponse
     */
    constructor() { 
        
        DtoWalletResponse.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>DtoWalletResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/DtoWalletResponse} obj Optional instance to populate.
     * @return {module:model/DtoWalletResponse} The populated <code>DtoWalletResponse</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new DtoWalletResponse();

            if (data.hasOwnProperty('auto_topup_amount')) {
                obj['auto_topup_amount'] = ApiClient.convertToType(data['auto_topup_amount'], 'Number');
            }
            if (data.hasOwnProperty('auto_topup_min_balance')) {
                obj['auto_topup_min_balance'] = ApiClient.convertToType(data['auto_topup_min_balance'], 'Number');
            }
            if (data.hasOwnProperty('auto_topup_trigger')) {
                obj['auto_topup_trigger'] = TypesAutoTopupTrigger.constructFromObject(data['auto_topup_trigger']);
            }
            if (data.hasOwnProperty('balance')) {
                obj['balance'] = ApiClient.convertToType(data['balance'], 'Number');
            }
            if (data.hasOwnProperty('config')) {
                obj['config'] = TypesWalletConfig.constructFromObject(data['config']);
            }
            if (data.hasOwnProperty('conversion_rate')) {
                obj['conversion_rate'] = ApiClient.convertToType(data['conversion_rate'], 'Number');
            }
            if (data.hasOwnProperty('created_at')) {
                obj['created_at'] = ApiClient.convertToType(data['created_at'], 'String');
            }
            if (data.hasOwnProperty('credit_balance')) {
                obj['credit_balance'] = ApiClient.convertToType(data['credit_balance'], 'Number');
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
            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'String');
            }
            if (data.hasOwnProperty('metadata')) {
                obj['metadata'] = ApiClient.convertToType(data['metadata'], {'String': 'String'});
            }
            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('updated_at')) {
                obj['updated_at'] = ApiClient.convertToType(data['updated_at'], 'String');
            }
            if (data.hasOwnProperty('wallet_status')) {
                obj['wallet_status'] = TypesWalletStatus.constructFromObject(data['wallet_status']);
            }
            if (data.hasOwnProperty('wallet_type')) {
                obj['wallet_type'] = TypesWalletType.constructFromObject(data['wallet_type']);
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>DtoWalletResponse</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>DtoWalletResponse</code>.
     */
    static validateJSON(data) {
        // validate the optional field `config`
        if (data['config']) { // data not null
          TypesWalletConfig.validateJSON(data['config']);
        }
        // ensure the json data is a string
        if (data['created_at'] && !(typeof data['created_at'] === 'string' || data['created_at'] instanceof String)) {
            throw new Error("Expected the field `created_at` to be a primitive type in the JSON string but got " + data['created_at']);
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
        if (data['id'] && !(typeof data['id'] === 'string' || data['id'] instanceof String)) {
            throw new Error("Expected the field `id` to be a primitive type in the JSON string but got " + data['id']);
        }
        // ensure the json data is a string
        if (data['name'] && !(typeof data['name'] === 'string' || data['name'] instanceof String)) {
            throw new Error("Expected the field `name` to be a primitive type in the JSON string but got " + data['name']);
        }
        // ensure the json data is a string
        if (data['updated_at'] && !(typeof data['updated_at'] === 'string' || data['updated_at'] instanceof String)) {
            throw new Error("Expected the field `updated_at` to be a primitive type in the JSON string but got " + data['updated_at']);
        }

        return true;
    }


}



/**
 * @member {Number} auto_topup_amount
 */
DtoWalletResponse.prototype['auto_topup_amount'] = undefined;

/**
 * @member {Number} auto_topup_min_balance
 */
DtoWalletResponse.prototype['auto_topup_min_balance'] = undefined;

/**
 * @member {module:model/TypesAutoTopupTrigger} auto_topup_trigger
 */
DtoWalletResponse.prototype['auto_topup_trigger'] = undefined;

/**
 * @member {Number} balance
 */
DtoWalletResponse.prototype['balance'] = undefined;

/**
 * @member {module:model/TypesWalletConfig} config
 */
DtoWalletResponse.prototype['config'] = undefined;

/**
 * @member {Number} conversion_rate
 */
DtoWalletResponse.prototype['conversion_rate'] = undefined;

/**
 * @member {String} created_at
 */
DtoWalletResponse.prototype['created_at'] = undefined;

/**
 * @member {Number} credit_balance
 */
DtoWalletResponse.prototype['credit_balance'] = undefined;

/**
 * @member {String} currency
 */
DtoWalletResponse.prototype['currency'] = undefined;

/**
 * @member {String} customer_id
 */
DtoWalletResponse.prototype['customer_id'] = undefined;

/**
 * @member {String} description
 */
DtoWalletResponse.prototype['description'] = undefined;

/**
 * @member {String} id
 */
DtoWalletResponse.prototype['id'] = undefined;

/**
 * @member {Object.<String, String>} metadata
 */
DtoWalletResponse.prototype['metadata'] = undefined;

/**
 * @member {String} name
 */
DtoWalletResponse.prototype['name'] = undefined;

/**
 * @member {String} updated_at
 */
DtoWalletResponse.prototype['updated_at'] = undefined;

/**
 * @member {module:model/TypesWalletStatus} wallet_status
 */
DtoWalletResponse.prototype['wallet_status'] = undefined;

/**
 * @member {module:model/TypesWalletType} wallet_type
 */
DtoWalletResponse.prototype['wallet_type'] = undefined;






export default DtoWalletResponse;

