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
* Enum class TypesPaymentStatus.
* @enum {}
* @readonly
*/
export default class TypesPaymentStatus {
    
        /**
         * value: "PENDING"
         * @const
         */
        "PaymentStatusPending" = "PENDING";

    
        /**
         * value: "PROCESSING"
         * @const
         */
        "PaymentStatusProcessing" = "PROCESSING";

    
        /**
         * value: "SUCCEEDED"
         * @const
         */
        "PaymentStatusSucceeded" = "SUCCEEDED";

    
        /**
         * value: "FAILED"
         * @const
         */
        "PaymentStatusFailed" = "FAILED";

    
        /**
         * value: "REFUNDED"
         * @const
         */
        "PaymentStatusRefunded" = "REFUNDED";

    
        /**
         * value: "PARTIALLY_REFUNDED"
         * @const
         */
        "PaymentStatusPartiallyRefunded" = "PARTIALLY_REFUNDED";

    

    /**
    * Returns a <code>TypesPaymentStatus</code> enum value from a Javascript object name.
    * @param {Object} data The plain JavaScript object containing the name of the enum value.
    * @return {module:model/TypesPaymentStatus} The enum <code>TypesPaymentStatus</code> value.
    */
    static constructFromObject(object) {
        return object;
    }
}

