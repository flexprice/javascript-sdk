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
import GithubComFlexpriceFlexpriceInternalTypesValue from './GithubComFlexpriceFlexpriceInternalTypesValue';
import TypesDataType from './TypesDataType';
import TypesFilterOperatorType from './TypesFilterOperatorType';

/**
 * The TypesFilterCondition model module.
 * @module model/TypesFilterCondition
 * @version 1.0
 */
class TypesFilterCondition {
  /**
   * Constructs a new <code>TypesFilterCondition</code>.
   * @alias module:model/TypesFilterCondition
   */
  constructor() {
    TypesFilterCondition.initialize(this);
  }

  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */
  static initialize(obj) {}

  /**
   * Constructs a <code>TypesFilterCondition</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/TypesFilterCondition} obj Optional instance to populate.
   * @return {module:model/TypesFilterCondition} The populated <code>TypesFilterCondition</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new TypesFilterCondition();
      if (data.hasOwnProperty('data_type')) {
        obj['data_type'] = TypesDataType.constructFromObject(data['data_type']);
      }
      if (data.hasOwnProperty('field')) {
        obj['field'] = ApiClient.convertToType(data['field'], 'String');
      }
      if (data.hasOwnProperty('operator')) {
        obj['operator'] = TypesFilterOperatorType.constructFromObject(data['operator']);
      }
      if (data.hasOwnProperty('value')) {
        obj['value'] = GithubComFlexpriceFlexpriceInternalTypesValue.constructFromObject(data['value']);
      }
    }
    return obj;
  }

  /**
   * Validates the JSON data with respect to <code>TypesFilterCondition</code>.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @return {boolean} to indicate whether the JSON data is valid with respect to <code>TypesFilterCondition</code>.
   */
  static validateJSON(data) {
    // ensure the json data is a string
    if (data['field'] && !(typeof data['field'] === 'string' || data['field'] instanceof String)) {
      throw new Error("Expected the field `field` to be a primitive type in the JSON string but got " + data['field']);
    }
    // validate the optional field `value`
    if (data['value']) {
      // data not null
      GithubComFlexpriceFlexpriceInternalTypesValue.validateJSON(data['value']);
    }
    return true;
  }
}

/**
 * @member {module:model/TypesDataType} data_type
 */
TypesFilterCondition.prototype['data_type'] = undefined;

/**
 * @member {String} field
 */
TypesFilterCondition.prototype['field'] = undefined;

/**
 * @member {module:model/TypesFilterOperatorType} operator
 */
TypesFilterCondition.prototype['operator'] = undefined;

/**
 * @member {module:model/GithubComFlexpriceFlexpriceInternalTypesValue} value
 */
TypesFilterCondition.prototype['value'] = undefined;
export default TypesFilterCondition;