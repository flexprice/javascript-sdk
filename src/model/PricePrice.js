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
import PriceJSONBTransformQuantity from './PriceJSONBTransformQuantity';
import PricePriceTier from './PricePriceTier';
import TypesBillingCadence from './TypesBillingCadence';
import TypesBillingModel from './TypesBillingModel';
import TypesBillingPeriod from './TypesBillingPeriod';
import TypesBillingTier from './TypesBillingTier';
import TypesInvoiceCadence from './TypesInvoiceCadence';
import TypesPriceType from './TypesPriceType';
import TypesStatus from './TypesStatus';

/**
 * The PricePrice model module.
 * @module model/PricePrice
 * @version 1.0
 */
class PricePrice {
    /**
     * Constructs a new <code>PricePrice</code>.
     * @alias module:model/PricePrice
     */
    constructor() { 
        
        PricePrice.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>PricePrice</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/PricePrice} obj Optional instance to populate.
     * @return {module:model/PricePrice} The populated <code>PricePrice</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new PricePrice();

            if (data.hasOwnProperty('amount')) {
                obj['amount'] = ApiClient.convertToType(data['amount'], 'Number');
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
            if (data.hasOwnProperty('created_at')) {
                obj['created_at'] = ApiClient.convertToType(data['created_at'], 'String');
            }
            if (data.hasOwnProperty('created_by')) {
                obj['created_by'] = ApiClient.convertToType(data['created_by'], 'String');
            }
            if (data.hasOwnProperty('currency')) {
                obj['currency'] = ApiClient.convertToType(data['currency'], 'String');
            }
            if (data.hasOwnProperty('description')) {
                obj['description'] = ApiClient.convertToType(data['description'], 'String');
            }
            if (data.hasOwnProperty('display_amount')) {
                obj['display_amount'] = ApiClient.convertToType(data['display_amount'], 'String');
            }
            if (data.hasOwnProperty('environment_id')) {
                obj['environment_id'] = ApiClient.convertToType(data['environment_id'], 'String');
            }
            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'String');
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
            if (data.hasOwnProperty('status')) {
                obj['status'] = TypesStatus.constructFromObject(data['status']);
            }
            if (data.hasOwnProperty('tenant_id')) {
                obj['tenant_id'] = ApiClient.convertToType(data['tenant_id'], 'String');
            }
            if (data.hasOwnProperty('tier_mode')) {
                obj['tier_mode'] = TypesBillingTier.constructFromObject(data['tier_mode']);
            }
            if (data.hasOwnProperty('tiers')) {
                obj['tiers'] = ApiClient.convertToType(data['tiers'], [PricePriceTier]);
            }
            if (data.hasOwnProperty('transform_quantity')) {
                obj['transform_quantity'] = PriceJSONBTransformQuantity.constructFromObject(data['transform_quantity']);
            }
            if (data.hasOwnProperty('trial_period')) {
                obj['trial_period'] = ApiClient.convertToType(data['trial_period'], 'Number');
            }
            if (data.hasOwnProperty('type')) {
                obj['type'] = TypesPriceType.constructFromObject(data['type']);
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
     * Validates the JSON data with respect to <code>PricePrice</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>PricePrice</code>.
     */
    static validateJSON(data) {
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
        if (data['description'] && !(typeof data['description'] === 'string' || data['description'] instanceof String)) {
            throw new Error("Expected the field `description` to be a primitive type in the JSON string but got " + data['description']);
        }
        // ensure the json data is a string
        if (data['display_amount'] && !(typeof data['display_amount'] === 'string' || data['display_amount'] instanceof String)) {
            throw new Error("Expected the field `display_amount` to be a primitive type in the JSON string but got " + data['display_amount']);
        }
        // ensure the json data is a string
        if (data['environment_id'] && !(typeof data['environment_id'] === 'string' || data['environment_id'] instanceof String)) {
            throw new Error("Expected the field `environment_id` to be a primitive type in the JSON string but got " + data['environment_id']);
        }
        // ensure the json data is a string
        if (data['id'] && !(typeof data['id'] === 'string' || data['id'] instanceof String)) {
            throw new Error("Expected the field `id` to be a primitive type in the JSON string but got " + data['id']);
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
        // ensure the json data is a string
        if (data['tenant_id'] && !(typeof data['tenant_id'] === 'string' || data['tenant_id'] instanceof String)) {
            throw new Error("Expected the field `tenant_id` to be a primitive type in the JSON string but got " + data['tenant_id']);
        }
        if (data['tiers']) { // data not null
            // ensure the json data is an array
            if (!Array.isArray(data['tiers'])) {
                throw new Error("Expected the field `tiers` to be an array in the JSON data but got " + data['tiers']);
            }
            // validate the optional field `tiers` (array)
            for (const item of data['tiers']) {
                PricePriceTier.validateJSON(item);
            };
        }
        // validate the optional field `transform_quantity`
        if (data['transform_quantity']) { // data not null
          PriceJSONBTransformQuantity.validateJSON(data['transform_quantity']);
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
 * Amount stored in main currency units (e.g., dollars, not cents) For USD: 12.50 means $12.50
 * @member {Number} amount
 */
PricePrice.prototype['amount'] = undefined;

/**
 * @member {module:model/TypesBillingCadence} billing_cadence
 */
PricePrice.prototype['billing_cadence'] = undefined;

/**
 * @member {module:model/TypesBillingModel} billing_model
 */
PricePrice.prototype['billing_model'] = undefined;

/**
 * @member {module:model/TypesBillingPeriod} billing_period
 */
PricePrice.prototype['billing_period'] = undefined;

/**
 * BillingPeriodCount is the count of the billing period ex 1, 3, 6, 12
 * @member {Number} billing_period_count
 */
PricePrice.prototype['billing_period_count'] = undefined;

/**
 * @member {String} created_at
 */
PricePrice.prototype['created_at'] = undefined;

/**
 * @member {String} created_by
 */
PricePrice.prototype['created_by'] = undefined;

/**
 * Currency 3 digit ISO currency code in lowercase ex usd, eur, gbp
 * @member {String} currency
 */
PricePrice.prototype['currency'] = undefined;

/**
 * Description of the price
 * @member {String} description
 */
PricePrice.prototype['description'] = undefined;

/**
 * DisplayAmount is the formatted amount with currency symbol For USD: $12.50
 * @member {String} display_amount
 */
PricePrice.prototype['display_amount'] = undefined;

/**
 * EnvironmentID is the environment identifier for the price
 * @member {String} environment_id
 */
PricePrice.prototype['environment_id'] = undefined;

/**
 * ID uuid identifier for the price
 * @member {String} id
 */
PricePrice.prototype['id'] = undefined;

/**
 * @member {module:model/TypesInvoiceCadence} invoice_cadence
 */
PricePrice.prototype['invoice_cadence'] = undefined;

/**
 * LookupKey used for looking up the price in the database
 * @member {String} lookup_key
 */
PricePrice.prototype['lookup_key'] = undefined;

/**
 * @member {Object.<String, String>} metadata
 */
PricePrice.prototype['metadata'] = undefined;

/**
 * MeterID is the id of the meter for usage based pricing
 * @member {String} meter_id
 */
PricePrice.prototype['meter_id'] = undefined;

/**
 * PlanID is the id of the plan for plan based pricing
 * @member {String} plan_id
 */
PricePrice.prototype['plan_id'] = undefined;

/**
 * @member {module:model/TypesStatus} status
 */
PricePrice.prototype['status'] = undefined;

/**
 * @member {String} tenant_id
 */
PricePrice.prototype['tenant_id'] = undefined;

/**
 * @member {module:model/TypesBillingTier} tier_mode
 */
PricePrice.prototype['tier_mode'] = undefined;

/**
 * @member {Array.<module:model/PricePriceTier>} tiers
 */
PricePrice.prototype['tiers'] = undefined;

/**
 * @member {module:model/PriceJSONBTransformQuantity} transform_quantity
 */
PricePrice.prototype['transform_quantity'] = undefined;

/**
 * TrialPeriod is the number of days for the trial period Note: This is only applicable for recurring prices (BILLING_CADENCE_RECURRING)
 * @member {Number} trial_period
 */
PricePrice.prototype['trial_period'] = undefined;

/**
 * @member {module:model/TypesPriceType} type
 */
PricePrice.prototype['type'] = undefined;

/**
 * @member {String} updated_at
 */
PricePrice.prototype['updated_at'] = undefined;

/**
 * @member {String} updated_by
 */
PricePrice.prototype['updated_by'] = undefined;






export default PricePrice;

