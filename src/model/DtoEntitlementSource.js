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
 * The DtoEntitlementSource model module.
 * @module model/DtoEntitlementSource
 * @version 1.0
 */
class DtoEntitlementSource {
    /**
     * Constructs a new <code>DtoEntitlementSource</code>.
     * @alias module:model/DtoEntitlementSource
     */
    constructor() { 
        
        DtoEntitlementSource.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>DtoEntitlementSource</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/DtoEntitlementSource} obj Optional instance to populate.
     * @return {module:model/DtoEntitlementSource} The populated <code>DtoEntitlementSource</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new DtoEntitlementSource();

            if (data.hasOwnProperty('entitlement_id')) {
                obj['entitlement_id'] = ApiClient.convertToType(data['entitlement_id'], 'String');
            }
            if (data.hasOwnProperty('is_enabled')) {
                obj['is_enabled'] = ApiClient.convertToType(data['is_enabled'], 'Boolean');
            }
            if (data.hasOwnProperty('plan_id')) {
                obj['plan_id'] = ApiClient.convertToType(data['plan_id'], 'String');
            }
            if (data.hasOwnProperty('plan_name')) {
                obj['plan_name'] = ApiClient.convertToType(data['plan_name'], 'String');
            }
            if (data.hasOwnProperty('quantity')) {
                obj['quantity'] = ApiClient.convertToType(data['quantity'], 'Number');
            }
            if (data.hasOwnProperty('static_value')) {
                obj['static_value'] = ApiClient.convertToType(data['static_value'], 'String');
            }
            if (data.hasOwnProperty('subscription_id')) {
                obj['subscription_id'] = ApiClient.convertToType(data['subscription_id'], 'String');
            }
            if (data.hasOwnProperty('usage_limit')) {
                obj['usage_limit'] = ApiClient.convertToType(data['usage_limit'], 'Number');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>DtoEntitlementSource</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>DtoEntitlementSource</code>.
     */
    static validateJSON(data) {
        // ensure the json data is a string
        if (data['entitlement_id'] && !(typeof data['entitlement_id'] === 'string' || data['entitlement_id'] instanceof String)) {
            throw new Error("Expected the field `entitlement_id` to be a primitive type in the JSON string but got " + data['entitlement_id']);
        }
        // ensure the json data is a string
        if (data['plan_id'] && !(typeof data['plan_id'] === 'string' || data['plan_id'] instanceof String)) {
            throw new Error("Expected the field `plan_id` to be a primitive type in the JSON string but got " + data['plan_id']);
        }
        // ensure the json data is a string
        if (data['plan_name'] && !(typeof data['plan_name'] === 'string' || data['plan_name'] instanceof String)) {
            throw new Error("Expected the field `plan_name` to be a primitive type in the JSON string but got " + data['plan_name']);
        }
        // ensure the json data is a string
        if (data['static_value'] && !(typeof data['static_value'] === 'string' || data['static_value'] instanceof String)) {
            throw new Error("Expected the field `static_value` to be a primitive type in the JSON string but got " + data['static_value']);
        }
        // ensure the json data is a string
        if (data['subscription_id'] && !(typeof data['subscription_id'] === 'string' || data['subscription_id'] instanceof String)) {
            throw new Error("Expected the field `subscription_id` to be a primitive type in the JSON string but got " + data['subscription_id']);
        }

        return true;
    }


}



/**
 * @member {String} entitlement_id
 */
DtoEntitlementSource.prototype['entitlement_id'] = undefined;

/**
 * @member {Boolean} is_enabled
 */
DtoEntitlementSource.prototype['is_enabled'] = undefined;

/**
 * @member {String} plan_id
 */
DtoEntitlementSource.prototype['plan_id'] = undefined;

/**
 * @member {String} plan_name
 */
DtoEntitlementSource.prototype['plan_name'] = undefined;

/**
 * @member {Number} quantity
 */
DtoEntitlementSource.prototype['quantity'] = undefined;

/**
 * @member {String} static_value
 */
DtoEntitlementSource.prototype['static_value'] = undefined;

/**
 * @member {String} subscription_id
 */
DtoEntitlementSource.prototype['subscription_id'] = undefined;

/**
 * @member {Number} usage_limit
 */
DtoEntitlementSource.prototype['usage_limit'] = undefined;






export default DtoEntitlementSource;

