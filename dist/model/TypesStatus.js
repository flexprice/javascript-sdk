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
* Enum class TypesStatus.
* @enum {}
* @readonly
*/
export default class TypesStatus {
  /**
   * value: "published"
   * @const
   */
  "StatusPublished" = "published";

  /**
   * value: "deleted"
   * @const
   */
  "StatusDeleted" = "deleted";

  /**
   * value: "archived"
   * @const
   */
  "StatusArchived" = "archived";

  /**
  * Returns a <code>TypesStatus</code> enum value from a Javascript object name.
  * @param {Object} data The plain JavaScript object containing the name of the enum value.
  * @return {module:model/TypesStatus} The enum <code>TypesStatus</code> value.
  */
  static constructFromObject(object) {
    return object;
  }
}