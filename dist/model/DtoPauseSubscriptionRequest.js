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
import TypesPauseMode from './TypesPauseMode';

/**
 * The DtoPauseSubscriptionRequest model module.
 * @module model/DtoPauseSubscriptionRequest
 * @version 1.0
 */
class DtoPauseSubscriptionRequest {
  /**
   * Constructs a new <code>DtoPauseSubscriptionRequest</code>.
   * @alias module:model/DtoPauseSubscriptionRequest
   * @param pauseMode {module:model/TypesPauseMode} 
   */
  constructor(pauseMode) {
    DtoPauseSubscriptionRequest.initialize(this, pauseMode);
  }

  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */
  static initialize(obj, pauseMode) {
    obj['pause_mode'] = pauseMode;
  }

  /**
   * Constructs a <code>DtoPauseSubscriptionRequest</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/DtoPauseSubscriptionRequest} obj Optional instance to populate.
   * @return {module:model/DtoPauseSubscriptionRequest} The populated <code>DtoPauseSubscriptionRequest</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new DtoPauseSubscriptionRequest();
      if (data.hasOwnProperty('dry_run')) {
        obj['dry_run'] = ApiClient.convertToType(data['dry_run'], 'Boolean');
      }
      if (data.hasOwnProperty('metadata')) {
        obj['metadata'] = ApiClient.convertToType(data['metadata'], {
          'String': 'String'
        });
      }
      if (data.hasOwnProperty('pause_days')) {
        obj['pause_days'] = ApiClient.convertToType(data['pause_days'], 'Number');
      }
      if (data.hasOwnProperty('pause_end')) {
        obj['pause_end'] = ApiClient.convertToType(data['pause_end'], 'String');
      }
      if (data.hasOwnProperty('pause_mode')) {
        obj['pause_mode'] = TypesPauseMode.constructFromObject(data['pause_mode']);
      }
      if (data.hasOwnProperty('pause_start')) {
        obj['pause_start'] = ApiClient.convertToType(data['pause_start'], 'String');
      }
      if (data.hasOwnProperty('reason')) {
        obj['reason'] = ApiClient.convertToType(data['reason'], 'String');
      }
    }
    return obj;
  }

  /**
   * Validates the JSON data with respect to <code>DtoPauseSubscriptionRequest</code>.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @return {boolean} to indicate whether the JSON data is valid with respect to <code>DtoPauseSubscriptionRequest</code>.
   */
  static validateJSON(data) {
    // check to make sure all required properties are present in the JSON string
    for (const property of DtoPauseSubscriptionRequest.RequiredProperties) {
      if (!data.hasOwnProperty(property)) {
        throw new Error("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
      }
    }
    // ensure the json data is a string
    if (data['pause_end'] && !(typeof data['pause_end'] === 'string' || data['pause_end'] instanceof String)) {
      throw new Error("Expected the field `pause_end` to be a primitive type in the JSON string but got " + data['pause_end']);
    }
    // ensure the json data is a string
    if (data['pause_start'] && !(typeof data['pause_start'] === 'string' || data['pause_start'] instanceof String)) {
      throw new Error("Expected the field `pause_start` to be a primitive type in the JSON string but got " + data['pause_start']);
    }
    // ensure the json data is a string
    if (data['reason'] && !(typeof data['reason'] === 'string' || data['reason'] instanceof String)) {
      throw new Error("Expected the field `reason` to be a primitive type in the JSON string but got " + data['reason']);
    }
    return true;
  }
}
DtoPauseSubscriptionRequest.RequiredProperties = ["pause_mode"];

/**
 * @member {Boolean} dry_run
 */
DtoPauseSubscriptionRequest.prototype['dry_run'] = undefined;

/**
 * @member {Object.<String, String>} metadata
 */
DtoPauseSubscriptionRequest.prototype['metadata'] = undefined;

/**
 * @member {Number} pause_days
 */
DtoPauseSubscriptionRequest.prototype['pause_days'] = undefined;

/**
 * @member {String} pause_end
 */
DtoPauseSubscriptionRequest.prototype['pause_end'] = undefined;

/**
 * @member {module:model/TypesPauseMode} pause_mode
 */
DtoPauseSubscriptionRequest.prototype['pause_mode'] = undefined;

/**
 * @member {String} pause_start
 */
DtoPauseSubscriptionRequest.prototype['pause_start'] = undefined;

/**
 * @member {String} reason
 */
DtoPauseSubscriptionRequest.prototype['reason'] = undefined;
export default DtoPauseSubscriptionRequest;