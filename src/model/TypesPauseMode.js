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
* Enum class TypesPauseMode.
* @enum {}
* @readonly
*/
export default class TypesPauseMode {
    
        /**
         * value: "immediate"
         * @const
         */
        "PauseModeImmediate" = "immediate";

    
        /**
         * value: "scheduled"
         * @const
         */
        "PauseModeScheduled" = "scheduled";

    
        /**
         * value: "period_end"
         * @const
         */
        "PauseModePeriodEnd" = "period_end";

    

    /**
    * Returns a <code>TypesPauseMode</code> enum value from a Javascript object name.
    * @param {Object} data The plain JavaScript object containing the name of the enum value.
    * @return {module:model/TypesPauseMode} The enum <code>TypesPauseMode</code> value.
    */
    static constructFromObject(object) {
        return object;
    }
}

