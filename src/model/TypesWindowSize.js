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
* Enum class TypesWindowSize.
* @enum {}
* @readonly
*/
export default class TypesWindowSize {
    
        /**
         * value: "MINUTE"
         * @const
         */
        "WindowSizeMinute" = "MINUTE";

    
        /**
         * value: "15MIN"
         * @const
         */
        "WindowSize15Min" = "15MIN";

    
        /**
         * value: "30MIN"
         * @const
         */
        "WindowSize30Min" = "30MIN";

    
        /**
         * value: "HOUR"
         * @const
         */
        "WindowSizeHour" = "HOUR";

    
        /**
         * value: "3HOUR"
         * @const
         */
        "WindowSize3Hour" = "3HOUR";

    
        /**
         * value: "6HOUR"
         * @const
         */
        "WindowSize6Hour" = "6HOUR";

    
        /**
         * value: "12HOUR"
         * @const
         */
        "WindowSize12Hour" = "12HOUR";

    
        /**
         * value: "DAY"
         * @const
         */
        "WindowSizeDay" = "DAY";

    
        /**
         * value: "WEEK"
         * @const
         */
        "WindowSizeWeek" = "WEEK";

    

    /**
    * Returns a <code>TypesWindowSize</code> enum value from a Javascript object name.
    * @param {Object} data The plain JavaScript object containing the name of the enum value.
    * @return {module:model/TypesWindowSize} The enum <code>TypesWindowSize</code> value.
    */
    static constructFromObject(object) {
        return object;
    }
}

