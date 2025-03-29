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
import DtoEntitlementResponse from './DtoEntitlementResponse';
import DtoPriceResponse from './DtoPriceResponse';
import TypesStatus from './TypesStatus';

/**
 * The DtoPlanResponse model module.
 * @module model/DtoPlanResponse
 * @version 1.0
 */
class DtoPlanResponse {
  /**
   * Constructs a new <code>DtoPlanResponse</code>.
   * @alias module:model/DtoPlanResponse
   */
  constructor() {
    DtoPlanResponse.initialize(this);
  }

  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */
  static initialize(obj) {}

  /**
   * Constructs a <code>DtoPlanResponse</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/DtoPlanResponse} obj Optional instance to populate.
   * @return {module:model/DtoPlanResponse} The populated <code>DtoPlanResponse</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new DtoPlanResponse();
      if (data.hasOwnProperty('created_at')) {
        obj['created_at'] = ApiClient.convertToType(data['created_at'], 'String');
      }
      if (data.hasOwnProperty('created_by')) {
        obj['created_by'] = ApiClient.convertToType(data['created_by'], 'String');
      }
      if (data.hasOwnProperty('description')) {
        obj['description'] = ApiClient.convertToType(data['description'], 'String');
      }
      if (data.hasOwnProperty('entitlements')) {
        obj['entitlements'] = ApiClient.convertToType(data['entitlements'], [DtoEntitlementResponse]);
      }
      if (data.hasOwnProperty('environment_id')) {
        obj['environment_id'] = ApiClient.convertToType(data['environment_id'], 'String');
      }
      if (data.hasOwnProperty('id')) {
        obj['id'] = ApiClient.convertToType(data['id'], 'String');
      }
      if (data.hasOwnProperty('lookup_key')) {
        obj['lookup_key'] = ApiClient.convertToType(data['lookup_key'], 'String');
      }
      if (data.hasOwnProperty('name')) {
        obj['name'] = ApiClient.convertToType(data['name'], 'String');
      }
      if (data.hasOwnProperty('prices')) {
        obj['prices'] = ApiClient.convertToType(data['prices'], [DtoPriceResponse]);
      }
      if (data.hasOwnProperty('status')) {
        obj['status'] = TypesStatus.constructFromObject(data['status']);
      }
      if (data.hasOwnProperty('tenant_id')) {
        obj['tenant_id'] = ApiClient.convertToType(data['tenant_id'], 'String');
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
   * Validates the JSON data with respect to <code>DtoPlanResponse</code>.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @return {boolean} to indicate whether the JSON data is valid with respect to <code>DtoPlanResponse</code>.
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
    if (data['description'] && !(typeof data['description'] === 'string' || data['description'] instanceof String)) {
      throw new Error("Expected the field `description` to be a primitive type in the JSON string but got " + data['description']);
    }
    if (data['entitlements']) {
      // data not null
      // ensure the json data is an array
      if (!Array.isArray(data['entitlements'])) {
        throw new Error("Expected the field `entitlements` to be an array in the JSON data but got " + data['entitlements']);
      }
      // validate the optional field `entitlements` (array)
      for (const item of data['entitlements']) {
        DtoEntitlementResponse.validateJSON(item);
      }
      ;
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
    if (data['name'] && !(typeof data['name'] === 'string' || data['name'] instanceof String)) {
      throw new Error("Expected the field `name` to be a primitive type in the JSON string but got " + data['name']);
    }
    if (data['prices']) {
      // data not null
      // ensure the json data is an array
      if (!Array.isArray(data['prices'])) {
        throw new Error("Expected the field `prices` to be an array in the JSON data but got " + data['prices']);
      }
      // validate the optional field `prices` (array)
      for (const item of data['prices']) {
        DtoPriceResponse.validateJSON(item);
      }
      ;
    }
    // ensure the json data is a string
    if (data['tenant_id'] && !(typeof data['tenant_id'] === 'string' || data['tenant_id'] instanceof String)) {
      throw new Error("Expected the field `tenant_id` to be a primitive type in the JSON string but got " + data['tenant_id']);
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
 * @member {String} created_at
 */
DtoPlanResponse.prototype['created_at'] = undefined;

/**
 * @member {String} created_by
 */
DtoPlanResponse.prototype['created_by'] = undefined;

/**
 * @member {String} description
 */
DtoPlanResponse.prototype['description'] = undefined;

/**
 * @member {Array.<module:model/DtoEntitlementResponse>} entitlements
 */
DtoPlanResponse.prototype['entitlements'] = undefined;

/**
 * @member {String} environment_id
 */
DtoPlanResponse.prototype['environment_id'] = undefined;

/**
 * @member {String} id
 */
DtoPlanResponse.prototype['id'] = undefined;

/**
 * @member {String} lookup_key
 */
DtoPlanResponse.prototype['lookup_key'] = undefined;

/**
 * @member {String} name
 */
DtoPlanResponse.prototype['name'] = undefined;

/**
 * @member {Array.<module:model/DtoPriceResponse>} prices
 */
DtoPlanResponse.prototype['prices'] = undefined;

/**
 * @member {module:model/TypesStatus} status
 */
DtoPlanResponse.prototype['status'] = undefined;

/**
 * @member {String} tenant_id
 */
DtoPlanResponse.prototype['tenant_id'] = undefined;

/**
 * @member {String} updated_at
 */
DtoPlanResponse.prototype['updated_at'] = undefined;

/**
 * @member {String} updated_by
 */
DtoPlanResponse.prototype['updated_by'] = undefined;
export default DtoPlanResponse;