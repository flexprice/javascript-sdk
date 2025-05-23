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
* Enum class TypesFilterOperatorType.
* @enum {}
* @readonly
*/
export default class TypesFilterOperatorType {
  /**
   * value: "eq"
   * @const
   */
  "EQUAL" = "eq";

  /**
   * value: "contains"
   * @const
   */
  "CONTAINS" = "contains";

  /**
   * value: "gt"
   * @const
   */
  "GREATER_THAN" = "gt";

  /**
   * value: "lt"
   * @const
   */
  "LESS_THAN" = "lt";

  /**
   * value: "in"
   * @const
   */
  "IN" = "in";

  /**
   * value: "not_in"
   * @const
   */
  "NOT_IN" = "not_in";

  /**
   * value: "before"
   * @const
   */
  "BEFORE" = "before";

  /**
   * value: "after"
   * @const
   */
  "AFTER" = "after";

  /**
  * Returns a <code>TypesFilterOperatorType</code> enum value from a Javascript object name.
  * @param {Object} data The plain JavaScript object containing the name of the enum value.
  * @return {module:model/TypesFilterOperatorType} The enum <code>TypesFilterOperatorType</code> value.
  */
  static constructFromObject(object) {
    return object;
  }
}