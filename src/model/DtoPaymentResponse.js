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
import DtoPaymentAttemptResponse from './DtoPaymentAttemptResponse';
import TypesPaymentDestinationType from './TypesPaymentDestinationType';
import TypesPaymentMethodType from './TypesPaymentMethodType';
import TypesPaymentStatus from './TypesPaymentStatus';

/**
 * The DtoPaymentResponse model module.
 * @module model/DtoPaymentResponse
 * @version 1.0
 */
class DtoPaymentResponse {
    /**
     * Constructs a new <code>DtoPaymentResponse</code>.
     * @alias module:model/DtoPaymentResponse
     */
    constructor() { 
        
        DtoPaymentResponse.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>DtoPaymentResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/DtoPaymentResponse} obj Optional instance to populate.
     * @return {module:model/DtoPaymentResponse} The populated <code>DtoPaymentResponse</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new DtoPaymentResponse();

            if (data.hasOwnProperty('amount')) {
                obj['amount'] = ApiClient.convertToType(data['amount'], 'Number');
            }
            if (data.hasOwnProperty('attempts')) {
                obj['attempts'] = ApiClient.convertToType(data['attempts'], [DtoPaymentAttemptResponse]);
            }
            if (data.hasOwnProperty('created_at')) {
                obj['created_at'] = ApiClient.convertToType(data['created_at'], 'String');
            }
            if (data.hasOwnProperty('created_by')) {
                obj['created_by'] = ApiClient.convertToType(data['created_by'], 'String');
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
            if (data.hasOwnProperty('error_message')) {
                obj['error_message'] = ApiClient.convertToType(data['error_message'], 'String');
            }
            if (data.hasOwnProperty('failed_at')) {
                obj['failed_at'] = ApiClient.convertToType(data['failed_at'], 'String');
            }
            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'String');
            }
            if (data.hasOwnProperty('idempotency_key')) {
                obj['idempotency_key'] = ApiClient.convertToType(data['idempotency_key'], 'String');
            }
            if (data.hasOwnProperty('invoice_number')) {
                obj['invoice_number'] = ApiClient.convertToType(data['invoice_number'], 'String');
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
            if (data.hasOwnProperty('payment_status')) {
                obj['payment_status'] = TypesPaymentStatus.constructFromObject(data['payment_status']);
            }
            if (data.hasOwnProperty('refunded_at')) {
                obj['refunded_at'] = ApiClient.convertToType(data['refunded_at'], 'String');
            }
            if (data.hasOwnProperty('succeeded_at')) {
                obj['succeeded_at'] = ApiClient.convertToType(data['succeeded_at'], 'String');
            }
            if (data.hasOwnProperty('tenant_id')) {
                obj['tenant_id'] = ApiClient.convertToType(data['tenant_id'], 'String');
            }
            if (data.hasOwnProperty('track_attempts')) {
                obj['track_attempts'] = ApiClient.convertToType(data['track_attempts'], 'Boolean');
            }
            if (data.hasOwnProperty('updated_at')) {
                obj['updated_at'] = ApiClient.convertToType(data['updated_at'], 'String');
            }
            if (data.hasOwnProperty('updated_by')) {
                obj['updated_by'] = ApiClient.convertToType(data['updated_by'], 'String');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>DtoPaymentResponse</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>DtoPaymentResponse</code>.
     */
    static validateJSON(data) {
        if (data['attempts']) { // data not null
            // ensure the json data is an array
            if (!Array.isArray(data['attempts'])) {
                throw new Error("Expected the field `attempts` to be an array in the JSON data but got " + data['attempts']);
            }
            // validate the optional field `attempts` (array)
            for (const item of data['attempts']) {
                DtoPaymentAttemptResponse.validateJSON(item);
            };
        }
        // ensure the json data is a string
        if (data['created_at'] && !(typeof data['created_at'] === 'string' || data['created_at'] instanceof String)) {
            throw new Error("Expected the field `created_at` to be a primitive type in the JSON string but got " + data['created_at']);
        }
        // ensure the json data is a string
        if (data['created_by'] && !(typeof data['created_by'] === 'string' || data['created_by'] instanceof String)) {
            throw new Error("Expected the field `created_by` to be a primitive type in the JSON string but got " + data['created_by']);
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
        if (data['error_message'] && !(typeof data['error_message'] === 'string' || data['error_message'] instanceof String)) {
            throw new Error("Expected the field `error_message` to be a primitive type in the JSON string but got " + data['error_message']);
        }
        // ensure the json data is a string
        if (data['failed_at'] && !(typeof data['failed_at'] === 'string' || data['failed_at'] instanceof String)) {
            throw new Error("Expected the field `failed_at` to be a primitive type in the JSON string but got " + data['failed_at']);
        }
        // ensure the json data is a string
        if (data['id'] && !(typeof data['id'] === 'string' || data['id'] instanceof String)) {
            throw new Error("Expected the field `id` to be a primitive type in the JSON string but got " + data['id']);
        }
        // ensure the json data is a string
        if (data['idempotency_key'] && !(typeof data['idempotency_key'] === 'string' || data['idempotency_key'] instanceof String)) {
            throw new Error("Expected the field `idempotency_key` to be a primitive type in the JSON string but got " + data['idempotency_key']);
        }
        // ensure the json data is a string
        if (data['invoice_number'] && !(typeof data['invoice_number'] === 'string' || data['invoice_number'] instanceof String)) {
            throw new Error("Expected the field `invoice_number` to be a primitive type in the JSON string but got " + data['invoice_number']);
        }
        // ensure the json data is a string
        if (data['payment_method_id'] && !(typeof data['payment_method_id'] === 'string' || data['payment_method_id'] instanceof String)) {
            throw new Error("Expected the field `payment_method_id` to be a primitive type in the JSON string but got " + data['payment_method_id']);
        }
        // ensure the json data is a string
        if (data['refunded_at'] && !(typeof data['refunded_at'] === 'string' || data['refunded_at'] instanceof String)) {
            throw new Error("Expected the field `refunded_at` to be a primitive type in the JSON string but got " + data['refunded_at']);
        }
        // ensure the json data is a string
        if (data['succeeded_at'] && !(typeof data['succeeded_at'] === 'string' || data['succeeded_at'] instanceof String)) {
            throw new Error("Expected the field `succeeded_at` to be a primitive type in the JSON string but got " + data['succeeded_at']);
        }
        // ensure the json data is a string
        if (data['tenant_id'] && !(typeof data['tenant_id'] === 'string' || data['tenant_id'] instanceof String)) {
            throw new Error("Expected the field `tenant_id` to be a primitive type in the JSON string but got " + data['tenant_id']);
        }
        // ensure the json data is a string
        if (data['updated_at'] && !(typeof data['updated_at'] === 'string' || data['updated_at'] instanceof String)) {
            throw new Error("Expected the field `updated_at` to be a primitive type in the JSON string but got " + data['updated_at']);
        }
        // ensure the json data is a string
        if (data['updated_by'] && !(typeof data['updated_by'] === 'string' || data['updated_by'] instanceof String)) {
            throw new Error("Expected the field `updated_by` to be a primitive type in the JSON string but got " + data['updated_by']);
        }

        return true;
    }


}



/**
 * @member {Number} amount
 */
DtoPaymentResponse.prototype['amount'] = undefined;

/**
 * @member {Array.<module:model/DtoPaymentAttemptResponse>} attempts
 */
DtoPaymentResponse.prototype['attempts'] = undefined;

/**
 * @member {String} created_at
 */
DtoPaymentResponse.prototype['created_at'] = undefined;

/**
 * @member {String} created_by
 */
DtoPaymentResponse.prototype['created_by'] = undefined;

/**
 * @member {String} currency
 */
DtoPaymentResponse.prototype['currency'] = undefined;

/**
 * @member {String} destination_id
 */
DtoPaymentResponse.prototype['destination_id'] = undefined;

/**
 * @member {module:model/TypesPaymentDestinationType} destination_type
 */
DtoPaymentResponse.prototype['destination_type'] = undefined;

/**
 * @member {String} error_message
 */
DtoPaymentResponse.prototype['error_message'] = undefined;

/**
 * @member {String} failed_at
 */
DtoPaymentResponse.prototype['failed_at'] = undefined;

/**
 * @member {String} id
 */
DtoPaymentResponse.prototype['id'] = undefined;

/**
 * @member {String} idempotency_key
 */
DtoPaymentResponse.prototype['idempotency_key'] = undefined;

/**
 * @member {String} invoice_number
 */
DtoPaymentResponse.prototype['invoice_number'] = undefined;

/**
 * @member {Object.<String, String>} metadata
 */
DtoPaymentResponse.prototype['metadata'] = undefined;

/**
 * @member {String} payment_method_id
 */
DtoPaymentResponse.prototype['payment_method_id'] = undefined;

/**
 * @member {module:model/TypesPaymentMethodType} payment_method_type
 */
DtoPaymentResponse.prototype['payment_method_type'] = undefined;

/**
 * @member {module:model/TypesPaymentStatus} payment_status
 */
DtoPaymentResponse.prototype['payment_status'] = undefined;

/**
 * @member {String} refunded_at
 */
DtoPaymentResponse.prototype['refunded_at'] = undefined;

/**
 * @member {String} succeeded_at
 */
DtoPaymentResponse.prototype['succeeded_at'] = undefined;

/**
 * @member {String} tenant_id
 */
DtoPaymentResponse.prototype['tenant_id'] = undefined;

/**
 * @member {Boolean} track_attempts
 */
DtoPaymentResponse.prototype['track_attempts'] = undefined;

/**
 * @member {String} updated_at
 */
DtoPaymentResponse.prototype['updated_at'] = undefined;

/**
 * @member {String} updated_by
 */
DtoPaymentResponse.prototype['updated_by'] = undefined;






export default DtoPaymentResponse;

