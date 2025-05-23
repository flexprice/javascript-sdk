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
import TypesPaymentDestinationType from './TypesPaymentDestinationType';
import TypesPaymentMethodType from './TypesPaymentMethodType';

/**
 * The DtoCreatePaymentRequest model module.
 * @module model/DtoCreatePaymentRequest
 * @version 1.0
 */
class DtoCreatePaymentRequest {
    /**
     * Constructs a new <code>DtoCreatePaymentRequest</code>.
     * @alias module:model/DtoCreatePaymentRequest
     * @param amount {Number} 
     * @param currency {String} 
     * @param destinationId {String} 
     * @param destinationType {module:model/TypesPaymentDestinationType} 
     * @param paymentMethodType {module:model/TypesPaymentMethodType} 
     */
    constructor(amount, currency, destinationId, destinationType, paymentMethodType) { 
        
        DtoCreatePaymentRequest.initialize(this, amount, currency, destinationId, destinationType, paymentMethodType);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, amount, currency, destinationId, destinationType, paymentMethodType) { 
        obj['amount'] = amount;
        obj['currency'] = currency;
        obj['destination_id'] = destinationId;
        obj['destination_type'] = destinationType;
        obj['payment_method_type'] = paymentMethodType;
        obj['process_payment'] = true;
    }

    /**
     * Constructs a <code>DtoCreatePaymentRequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/DtoCreatePaymentRequest} obj Optional instance to populate.
     * @return {module:model/DtoCreatePaymentRequest} The populated <code>DtoCreatePaymentRequest</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new DtoCreatePaymentRequest();

            if (data.hasOwnProperty('amount')) {
                obj['amount'] = ApiClient.convertToType(data['amount'], 'Number');
            }
            if (data.hasOwnProperty('currency')) {
                obj['currency'] = ApiClient.convertToType(data['currency'], 'String');
            }
            if (data.hasOwnProperty('destination_id')) {
                obj['destination_id'] = ApiClient.convertToType(data['destination_id'], 'String');
            }
            if (data.hasOwnProperty('destination_type')) {
                obj['destination_type'] = TypesPaymentDestinationType.constructFromObject(data['destination_type']);
            }
            if (data.hasOwnProperty('idempotency_key')) {
                obj['idempotency_key'] = ApiClient.convertToType(data['idempotency_key'], 'String');
            }
            if (data.hasOwnProperty('metadata')) {
                obj['metadata'] = ApiClient.convertToType(data['metadata'], {'String': 'String'});
            }
            if (data.hasOwnProperty('payment_method_id')) {
                obj['payment_method_id'] = ApiClient.convertToType(data['payment_method_id'], 'String');
            }
            if (data.hasOwnProperty('payment_method_type')) {
                obj['payment_method_type'] = TypesPaymentMethodType.constructFromObject(data['payment_method_type']);
            }
            if (data.hasOwnProperty('process_payment')) {
                obj['process_payment'] = ApiClient.convertToType(data['process_payment'], 'Boolean');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>DtoCreatePaymentRequest</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>DtoCreatePaymentRequest</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of DtoCreatePaymentRequest.RequiredProperties) {
            if (!data.hasOwnProperty(property)) {
                throw new Error("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
            }
        }
        // ensure the json data is a string
        if (data['currency'] && !(typeof data['currency'] === 'string' || data['currency'] instanceof String)) {
            throw new Error("Expected the field `currency` to be a primitive type in the JSON string but got " + data['currency']);
        }
        // ensure the json data is a string
        if (data['destination_id'] && !(typeof data['destination_id'] === 'string' || data['destination_id'] instanceof String)) {
            throw new Error("Expected the field `destination_id` to be a primitive type in the JSON string but got " + data['destination_id']);
        }
        // ensure the json data is a string
        if (data['idempotency_key'] && !(typeof data['idempotency_key'] === 'string' || data['idempotency_key'] instanceof String)) {
            throw new Error("Expected the field `idempotency_key` to be a primitive type in the JSON string but got " + data['idempotency_key']);
        }
        // ensure the json data is a string
        if (data['payment_method_id'] && !(typeof data['payment_method_id'] === 'string' || data['payment_method_id'] instanceof String)) {
            throw new Error("Expected the field `payment_method_id` to be a primitive type in the JSON string but got " + data['payment_method_id']);
        }

        return true;
    }


}

DtoCreatePaymentRequest.RequiredProperties = ["amount", "currency", "destination_id", "destination_type", "payment_method_type"];

/**
 * @member {Number} amount
 */
DtoCreatePaymentRequest.prototype['amount'] = undefined;

/**
 * @member {String} currency
 */
DtoCreatePaymentRequest.prototype['currency'] = undefined;

/**
 * @member {String} destination_id
 */
DtoCreatePaymentRequest.prototype['destination_id'] = undefined;

/**
 * @member {module:model/TypesPaymentDestinationType} destination_type
 */
DtoCreatePaymentRequest.prototype['destination_type'] = undefined;

/**
 * @member {String} idempotency_key
 */
DtoCreatePaymentRequest.prototype['idempotency_key'] = undefined;

/**
 * @member {Object.<String, String>} metadata
 */
DtoCreatePaymentRequest.prototype['metadata'] = undefined;

/**
 * @member {String} payment_method_id
 */
DtoCreatePaymentRequest.prototype['payment_method_id'] = undefined;

/**
 * @member {module:model/TypesPaymentMethodType} payment_method_type
 */
DtoCreatePaymentRequest.prototype['payment_method_type'] = undefined;

/**
 * @member {Boolean} process_payment
 * @default true
 */
DtoCreatePaymentRequest.prototype['process_payment'] = true;






export default DtoCreatePaymentRequest;

