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
* Enum class TypesTaskType.
* @enum {}
* @readonly
*/
export default class TypesTaskType {
  /**
   * value: "IMPORT"
   * @const
   */
  "TaskTypeImport" = "IMPORT";

  /**
   * value: "EXPORT"
   * @const
   */
  "TaskTypeExport" = "EXPORT";

  /**
  * Returns a <code>TypesTaskType</code> enum value from a Javascript object name.
  * @param {Object} data The plain JavaScript object containing the name of the enum value.
  * @return {module:model/TypesTaskType} The enum <code>TypesTaskType</code> value.
  */
  static constructFromObject(object) {
    return object;
  }
}