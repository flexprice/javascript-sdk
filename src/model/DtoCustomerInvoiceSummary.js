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
 * The DtoCustomerInvoiceSummary model module.
 * @module model/DtoCustomerInvoiceSummary
 * @version 1.0
 */
class DtoCustomerInvoiceSummary {
    /**
     * Constructs a new <code>DtoCustomerInvoiceSummary</code>.
     * @alias module:model/DtoCustomerInvoiceSummary
     */
    constructor() { 
        
        DtoCustomerInvoiceSummary.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>DtoCustomerInvoiceSummary</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/DtoCustomerInvoiceSummary} obj Optional instance to populate.
     * @return {module:model/DtoCustomerInvoiceSummary} The populated <code>DtoCustomerInvoiceSummary</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new DtoCustomerInvoiceSummary();

            if (data.hasOwnProperty('currency')) {
                obj['currency'] = ApiClient.convertToType(data['currency'], 'String');
            }
            if (data.hasOwnProperty('customer_id')) {
                obj['customer_id'] = ApiClient.convertToType(data['customer_id'], 'String');
            }
            if (data.hasOwnProperty('overdue_invoice_count')) {
                obj['overdue_invoice_count'] = ApiClient.convertToType(data['overdue_invoice_count'], 'Number');
            }
            if (data.hasOwnProperty('total_invoice_count')) {
                obj['total_invoice_count'] = ApiClient.convertToType(data['total_invoice_count'], 'Number');
            }
            if (data.hasOwnProperty('total_overdue_amount')) {
                obj['total_overdue_amount'] = ApiClient.convertToType(data['total_overdue_amount'], 'Number');
            }
            if (data.hasOwnProperty('total_revenue_amount')) {
                obj['total_revenue_amount'] = ApiClient.convertToType(data['total_revenue_amount'], 'Number');
            }
            if (data.hasOwnProperty('total_unpaid_amount')) {
                obj['total_unpaid_amount'] = ApiClient.convertToType(data['total_unpaid_amount'], 'Number');
            }
            if (data.hasOwnProperty('unpaid_fixed_charges')) {
                obj['unpaid_fixed_charges'] = ApiClient.convertToType(data['unpaid_fixed_charges'], 'Number');
            }
            if (data.hasOwnProperty('unpaid_invoice_count')) {
                obj['unpaid_invoice_count'] = ApiClient.convertToType(data['unpaid_invoice_count'], 'Number');
            }
            if (data.hasOwnProperty('unpaid_usage_charges')) {
                obj['unpaid_usage_charges'] = ApiClient.convertToType(data['unpaid_usage_charges'], 'Number');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>DtoCustomerInvoiceSummary</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>DtoCustomerInvoiceSummary</code>.
     */
    static validateJSON(data) {
        // ensure the json data is a string
        if (data['currency'] && !(typeof data['currency'] === 'string' || data['currency'] instanceof String)) {
            throw new Error("Expected the field `currency` to be a primitive type in the JSON string but got " + data['currency']);
        }
        // ensure the json data is a string
        if (data['customer_id'] && !(typeof data['customer_id'] === 'string' || data['customer_id'] instanceof String)) {
            throw new Error("Expected the field `customer_id` to be a primitive type in the JSON string but got " + data['customer_id']);
        }

        return true;
    }


}



/**
 * @member {String} currency
 */
DtoCustomerInvoiceSummary.prototype['currency'] = undefined;

/**
 * @member {String} customer_id
 */
DtoCustomerInvoiceSummary.prototype['customer_id'] = undefined;

/**
 * @member {Number} overdue_invoice_count
 */
DtoCustomerInvoiceSummary.prototype['overdue_invoice_count'] = undefined;

/**
 * @member {Number} total_invoice_count
 */
DtoCustomerInvoiceSummary.prototype['total_invoice_count'] = undefined;

/**
 * @member {Number} total_overdue_amount
 */
DtoCustomerInvoiceSummary.prototype['total_overdue_amount'] = undefined;

/**
 * @member {Number} total_revenue_amount
 */
DtoCustomerInvoiceSummary.prototype['total_revenue_amount'] = undefined;

/**
 * @member {Number} total_unpaid_amount
 */
DtoCustomerInvoiceSummary.prototype['total_unpaid_amount'] = undefined;

/**
 * @member {Number} unpaid_fixed_charges
 */
DtoCustomerInvoiceSummary.prototype['unpaid_fixed_charges'] = undefined;

/**
 * @member {Number} unpaid_invoice_count
 */
DtoCustomerInvoiceSummary.prototype['unpaid_invoice_count'] = undefined;

/**
 * @member {Number} unpaid_usage_charges
 */
DtoCustomerInvoiceSummary.prototype['unpaid_usage_charges'] = undefined;






export default DtoCustomerInvoiceSummary;

