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
 * The DtoCreateInvoiceLineItemRequest model module.
 * @module model/DtoCreateInvoiceLineItemRequest
 * @version 1.0
 */
class DtoCreateInvoiceLineItemRequest {
    /**
     * Constructs a new <code>DtoCreateInvoiceLineItemRequest</code>.
     * @alias module:model/DtoCreateInvoiceLineItemRequest
     * @param amount {Number} 
     * @param quantity {Number} 
     */
    constructor(amount, quantity) { 
        
        DtoCreateInvoiceLineItemRequest.initialize(this, amount, quantity);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, amount, quantity) { 
        obj['amount'] = amount;
        obj['quantity'] = quantity;
    }

    /**
     * Constructs a <code>DtoCreateInvoiceLineItemRequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/DtoCreateInvoiceLineItemRequest} obj Optional instance to populate.
     * @return {module:model/DtoCreateInvoiceLineItemRequest} The populated <code>DtoCreateInvoiceLineItemRequest</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new DtoCreateInvoiceLineItemRequest();

            if (data.hasOwnProperty('amount')) {
                obj['amount'] = ApiClient.convertToType(data['amount'], 'Number');
            }
            if (data.hasOwnProperty('display_name')) {
                obj['display_name'] = ApiClient.convertToType(data['display_name'], 'String');
            }
            if (data.hasOwnProperty('metadata')) {
                obj['metadata'] = ApiClient.convertToType(data['metadata'], {'String': 'String'});
            }
            if (data.hasOwnProperty('meter_display_name')) {
                obj['meter_display_name'] = ApiClient.convertToType(data['meter_display_name'], 'String');
            }
            if (data.hasOwnProperty('meter_id')) {
                obj['meter_id'] = ApiClient.convertToType(data['meter_id'], 'String');
            }
            if (data.hasOwnProperty('period_end')) {
                obj['period_end'] = ApiClient.convertToType(data['period_end'], 'String');
            }
            if (data.hasOwnProperty('period_start')) {
                obj['period_start'] = ApiClient.convertToType(data['period_start'], 'String');
            }
            if (data.hasOwnProperty('plan_display_name')) {
                obj['plan_display_name'] = ApiClient.convertToType(data['plan_display_name'], 'String');
            }
            if (data.hasOwnProperty('plan_id')) {
                obj['plan_id'] = ApiClient.convertToType(data['plan_id'], 'String');
            }
            if (data.hasOwnProperty('price_id')) {
                obj['price_id'] = ApiClient.convertToType(data['price_id'], 'String');
            }
            if (data.hasOwnProperty('price_type')) {
                obj['price_type'] = ApiClient.convertToType(data['price_type'], 'String');
            }
            if (data.hasOwnProperty('quantity')) {
                obj['quantity'] = ApiClient.convertToType(data['quantity'], 'Number');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>DtoCreateInvoiceLineItemRequest</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>DtoCreateInvoiceLineItemRequest</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of DtoCreateInvoiceLineItemRequest.RequiredProperties) {
            if (!data.hasOwnProperty(property)) {
                throw new Error("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
            }
        }
        // ensure the json data is a string
        if (data['display_name'] && !(typeof data['display_name'] === 'string' || data['display_name'] instanceof String)) {
            throw new Error("Expected the field `display_name` to be a primitive type in the JSON string but got " + data['display_name']);
        }
        // ensure the json data is a string
        if (data['meter_display_name'] && !(typeof data['meter_display_name'] === 'string' || data['meter_display_name'] instanceof String)) {
            throw new Error("Expected the field `meter_display_name` to be a primitive type in the JSON string but got " + data['meter_display_name']);
        }
        // ensure the json data is a string
        if (data['meter_id'] && !(typeof data['meter_id'] === 'string' || data['meter_id'] instanceof String)) {
            throw new Error("Expected the field `meter_id` to be a primitive type in the JSON string but got " + data['meter_id']);
        }
        // ensure the json data is a string
        if (data['period_end'] && !(typeof data['period_end'] === 'string' || data['period_end'] instanceof String)) {
            throw new Error("Expected the field `period_end` to be a primitive type in the JSON string but got " + data['period_end']);
        }
        // ensure the json data is a string
        if (data['period_start'] && !(typeof data['period_start'] === 'string' || data['period_start'] instanceof String)) {
            throw new Error("Expected the field `period_start` to be a primitive type in the JSON string but got " + data['period_start']);
        }
        // ensure the json data is a string
        if (data['plan_display_name'] && !(typeof data['plan_display_name'] === 'string' || data['plan_display_name'] instanceof String)) {
            throw new Error("Expected the field `plan_display_name` to be a primitive type in the JSON string but got " + data['plan_display_name']);
        }
        // ensure the json data is a string
        if (data['plan_id'] && !(typeof data['plan_id'] === 'string' || data['plan_id'] instanceof String)) {
            throw new Error("Expected the field `plan_id` to be a primitive type in the JSON string but got " + data['plan_id']);
        }
        // ensure the json data is a string
        if (data['price_id'] && !(typeof data['price_id'] === 'string' || data['price_id'] instanceof String)) {
            throw new Error("Expected the field `price_id` to be a primitive type in the JSON string but got " + data['price_id']);
        }
        // ensure the json data is a string
        if (data['price_type'] && !(typeof data['price_type'] === 'string' || data['price_type'] instanceof String)) {
            throw new Error("Expected the field `price_type` to be a primitive type in the JSON string but got " + data['price_type']);
        }

        return true;
    }


}

DtoCreateInvoiceLineItemRequest.RequiredProperties = ["amount", "quantity"];

/**
 * @member {Number} amount
 */
DtoCreateInvoiceLineItemRequest.prototype['amount'] = undefined;

/**
 * @member {String} display_name
 */
DtoCreateInvoiceLineItemRequest.prototype['display_name'] = undefined;

/**
 * @member {Object.<String, String>} metadata
 */
DtoCreateInvoiceLineItemRequest.prototype['metadata'] = undefined;

/**
 * @member {String} meter_display_name
 */
DtoCreateInvoiceLineItemRequest.prototype['meter_display_name'] = undefined;

/**
 * @member {String} meter_id
 */
DtoCreateInvoiceLineItemRequest.prototype['meter_id'] = undefined;

/**
 * @member {String} period_end
 */
DtoCreateInvoiceLineItemRequest.prototype['period_end'] = undefined;

/**
 * @member {String} period_start
 */
DtoCreateInvoiceLineItemRequest.prototype['period_start'] = undefined;

/**
 * @member {String} plan_display_name
 */
DtoCreateInvoiceLineItemRequest.prototype['plan_display_name'] = undefined;

/**
 * @member {String} plan_id
 */
DtoCreateInvoiceLineItemRequest.prototype['plan_id'] = undefined;

/**
 * @member {String} price_id
 */
DtoCreateInvoiceLineItemRequest.prototype['price_id'] = undefined;

/**
 * @member {String} price_type
 */
DtoCreateInvoiceLineItemRequest.prototype['price_type'] = undefined;

/**
 * @member {Number} quantity
 */
DtoCreateInvoiceLineItemRequest.prototype['quantity'] = undefined;






export default DtoCreateInvoiceLineItemRequest;

