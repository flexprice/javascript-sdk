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
import DtoCreatePriceTier from './DtoCreatePriceTier';
import PriceTransformQuantity from './PriceTransformQuantity';
import TypesBillingCadence from './TypesBillingCadence';
import TypesBillingModel from './TypesBillingModel';
import TypesBillingPeriod from './TypesBillingPeriod';
import TypesBillingTier from './TypesBillingTier';
import TypesInvoiceCadence from './TypesInvoiceCadence';
import TypesPriceType from './TypesPriceType';

/**
 * The DtoCreatePlanPriceRequest model module.
 * @module model/DtoCreatePlanPriceRequest
 * @version 1.0
 */
class DtoCreatePlanPriceRequest {
    /**
     * Constructs a new <code>DtoCreatePlanPriceRequest</code>.
     * @alias module:model/DtoCreatePlanPriceRequest
     * @param billingCadence {module:model/TypesBillingCadence} 
     * @param billingModel {module:model/TypesBillingModel} 
     * @param billingPeriod {module:model/TypesBillingPeriod} 
     * @param billingPeriodCount {Number} 
     * @param currency {String} 
     * @param invoiceCadence {module:model/TypesInvoiceCadence} 
     * @param type {module:model/TypesPriceType} 
     */
    constructor(billingCadence, billingModel, billingPeriod, billingPeriodCount, currency, invoiceCadence, type) { 
        
        DtoCreatePlanPriceRequest.initialize(this, billingCadence, billingModel, billingPeriod, billingPeriodCount, currency, invoiceCadence, type);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, billingCadence, billingModel, billingPeriod, billingPeriodCount, currency, invoiceCadence, type) { 
        obj['billing_cadence'] = billingCadence;
        obj['billing_model'] = billingModel;
        obj['billing_period'] = billingPeriod;
        obj['billing_period_count'] = billingPeriodCount;
        obj['currency'] = currency;
        obj['invoice_cadence'] = invoiceCadence;
        obj['type'] = type;
    }

    /**
     * Constructs a <code>DtoCreatePlanPriceRequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/DtoCreatePlanPriceRequest} obj Optional instance to populate.
     * @return {module:model/DtoCreatePlanPriceRequest} The populated <code>DtoCreatePlanPriceRequest</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new DtoCreatePlanPriceRequest();

            if (data.hasOwnProperty('amount')) {
                obj['amount'] = ApiClient.convertToType(data['amount'], 'String');
            }
            if (data.hasOwnProperty('billing_cadence')) {
                obj['billing_cadence'] = TypesBillingCadence.constructFromObject(data['billing_cadence']);
            }
            if (data.hasOwnProperty('billing_model')) {
                obj['billing_model'] = TypesBillingModel.constructFromObject(data['billing_model']);
            }
            if (data.hasOwnProperty('billing_period')) {
                obj['billing_period'] = TypesBillingPeriod.constructFromObject(data['billing_period']);
            }
            if (data.hasOwnProperty('billing_period_count')) {
                obj['billing_period_count'] = ApiClient.convertToType(data['billing_period_count'], 'Number');
            }
            if (data.hasOwnProperty('currency')) {
                obj['currency'] = ApiClient.convertToType(data['currency'], 'String');
            }
            if (data.hasOwnProperty('description')) {
                obj['description'] = ApiClient.convertToType(data['description'], 'String');
            }
            if (data.hasOwnProperty('filter_values')) {
                obj['filter_values'] = ApiClient.convertToType(data['filter_values'], {'String': ['String']});
            }
            if (data.hasOwnProperty('invoice_cadence')) {
                obj['invoice_cadence'] = TypesInvoiceCadence.constructFromObject(data['invoice_cadence']);
            }
            if (data.hasOwnProperty('lookup_key')) {
                obj['lookup_key'] = ApiClient.convertToType(data['lookup_key'], 'String');
            }
            if (data.hasOwnProperty('metadata')) {
                obj['metadata'] = ApiClient.convertToType(data['metadata'], {'String': 'String'});
            }
            if (data.hasOwnProperty('meter_id')) {
                obj['meter_id'] = ApiClient.convertToType(data['meter_id'], 'String');
            }
            if (data.hasOwnProperty('plan_id')) {
                obj['plan_id'] = ApiClient.convertToType(data['plan_id'], 'String');
            }
            if (data.hasOwnProperty('tier_mode')) {
                obj['tier_mode'] = TypesBillingTier.constructFromObject(data['tier_mode']);
            }
            if (data.hasOwnProperty('tiers')) {
                obj['tiers'] = ApiClient.convertToType(data['tiers'], [DtoCreatePriceTier]);
            }
            if (data.hasOwnProperty('transform_quantity')) {
                obj['transform_quantity'] = PriceTransformQuantity.constructFromObject(data['transform_quantity']);
            }
            if (data.hasOwnProperty('trial_period')) {
                obj['trial_period'] = ApiClient.convertToType(data['trial_period'], 'Number');
            }
            if (data.hasOwnProperty('type')) {
                obj['type'] = TypesPriceType.constructFromObject(data['type']);
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>DtoCreatePlanPriceRequest</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>DtoCreatePlanPriceRequest</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of DtoCreatePlanPriceRequest.RequiredProperties) {
            if (!data.hasOwnProperty(property)) {
                throw new Error("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
            }
        }
        // ensure the json data is a string
        if (data['amount'] && !(typeof data['amount'] === 'string' || data['amount'] instanceof String)) {
            throw new Error("Expected the field `amount` to be a primitive type in the JSON string but got " + data['amount']);
        }
        // ensure the json data is a string
        if (data['currency'] && !(typeof data['currency'] === 'string' || data['currency'] instanceof String)) {
            throw new Error("Expected the field `currency` to be a primitive type in the JSON string but got " + data['currency']);
        }
        // ensure the json data is a string
        if (data['description'] && !(typeof data['description'] === 'string' || data['description'] instanceof String)) {
            throw new Error("Expected the field `description` to be a primitive type in the JSON string but got " + data['description']);
        }
        // ensure the json data is a string
        if (data['lookup_key'] && !(typeof data['lookup_key'] === 'string' || data['lookup_key'] instanceof String)) {
            throw new Error("Expected the field `lookup_key` to be a primitive type in the JSON string but got " + data['lookup_key']);
        }
        // ensure the json data is a string
        if (data['meter_id'] && !(typeof data['meter_id'] === 'string' || data['meter_id'] instanceof String)) {
            throw new Error("Expected the field `meter_id` to be a primitive type in the JSON string but got " + data['meter_id']);
        }
        // ensure the json data is a string
        if (data['plan_id'] && !(typeof data['plan_id'] === 'string' || data['plan_id'] instanceof String)) {
            throw new Error("Expected the field `plan_id` to be a primitive type in the JSON string but got " + data['plan_id']);
        }
        if (data['tiers']) { // data not null
            // ensure the json data is an array
            if (!Array.isArray(data['tiers'])) {
                throw new Error("Expected the field `tiers` to be an array in the JSON data but got " + data['tiers']);
            }
            // validate the optional field `tiers` (array)
            for (const item of data['tiers']) {
                DtoCreatePriceTier.validateJSON(item);
            };
        }
        // validate the optional field `transform_quantity`
        if (data['transform_quantity']) { // data not null
          PriceTransformQuantity.validateJSON(data['transform_quantity']);
        }

        return true;
    }


}

DtoCreatePlanPriceRequest.RequiredProperties = ["billing_cadence", "billing_model", "billing_period", "billing_period_count", "currency", "invoice_cadence", "type"];

/**
 * @member {String} amount
 */
DtoCreatePlanPriceRequest.prototype['amount'] = undefined;

/**
 * @member {module:model/TypesBillingCadence} billing_cadence
 */
DtoCreatePlanPriceRequest.prototype['billing_cadence'] = undefined;

/**
 * @member {module:model/TypesBillingModel} billing_model
 */
DtoCreatePlanPriceRequest.prototype['billing_model'] = undefined;

/**
 * @member {module:model/TypesBillingPeriod} billing_period
 */
DtoCreatePlanPriceRequest.prototype['billing_period'] = undefined;

/**
 * @member {Number} billing_period_count
 */
DtoCreatePlanPriceRequest.prototype['billing_period_count'] = undefined;

/**
 * @member {String} currency
 */
DtoCreatePlanPriceRequest.prototype['currency'] = undefined;

/**
 * @member {String} description
 */
DtoCreatePlanPriceRequest.prototype['description'] = undefined;

/**
 * @member {Object.<String, Array.<String>>} filter_values
 */
DtoCreatePlanPriceRequest.prototype['filter_values'] = undefined;

/**
 * @member {module:model/TypesInvoiceCadence} invoice_cadence
 */
DtoCreatePlanPriceRequest.prototype['invoice_cadence'] = undefined;

/**
 * @member {String} lookup_key
 */
DtoCreatePlanPriceRequest.prototype['lookup_key'] = undefined;

/**
 * @member {Object.<String, String>} metadata
 */
DtoCreatePlanPriceRequest.prototype['metadata'] = undefined;

/**
 * @member {String} meter_id
 */
DtoCreatePlanPriceRequest.prototype['meter_id'] = undefined;

/**
 * @member {String} plan_id
 */
DtoCreatePlanPriceRequest.prototype['plan_id'] = undefined;

/**
 * @member {module:model/TypesBillingTier} tier_mode
 */
DtoCreatePlanPriceRequest.prototype['tier_mode'] = undefined;

/**
 * @member {Array.<module:model/DtoCreatePriceTier>} tiers
 */
DtoCreatePlanPriceRequest.prototype['tiers'] = undefined;

/**
 * @member {module:model/PriceTransformQuantity} transform_quantity
 */
DtoCreatePlanPriceRequest.prototype['transform_quantity'] = undefined;

/**
 * @member {Number} trial_period
 */
DtoCreatePlanPriceRequest.prototype['trial_period'] = undefined;

/**
 * @member {module:model/TypesPriceType} type
 */
DtoCreatePlanPriceRequest.prototype['type'] = undefined;






export default DtoCreatePlanPriceRequest;

