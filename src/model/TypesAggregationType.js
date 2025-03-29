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
* Enum class TypesAggregationType.
* @enum {}
* @readonly
*/
export default class TypesAggregationType {
    
        /**
         * value: "COUNT"
         * @const
         */
        "AggregationCount" = "COUNT";

    
        /**
         * value: "SUM"
         * @const
         */
        "AggregationSum" = "SUM";

    
        /**
         * value: "AVG"
         * @const
         */
        "AggregationAvg" = "AVG";

    
        /**
         * value: "COUNT_UNIQUE"
         * @const
         */
        "AggregationCountUnique" = "COUNT_UNIQUE";

    

    /**
    * Returns a <code>TypesAggregationType</code> enum value from a Javascript object name.
    * @param {Object} data The plain JavaScript object containing the name of the enum value.
    * @return {module:model/TypesAggregationType} The enum <code>TypesAggregationType</code> value.
    */
    static constructFromObject(object) {
        return object;
    }
}

