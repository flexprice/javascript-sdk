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
import TypesTaskStatus from './TypesTaskStatus';

/**
 * The DtoUpdateTaskStatusRequest model module.
 * @module model/DtoUpdateTaskStatusRequest
 * @version 1.0
 */
class DtoUpdateTaskStatusRequest {
  /**
   * Constructs a new <code>DtoUpdateTaskStatusRequest</code>.
   * @alias module:model/DtoUpdateTaskStatusRequest
   * @param taskStatus {module:model/TypesTaskStatus} 
   */
  constructor(taskStatus) {
    DtoUpdateTaskStatusRequest.initialize(this, taskStatus);
  }

  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */
  static initialize(obj, taskStatus) {
    obj['task_status'] = taskStatus;
  }

  /**
   * Constructs a <code>DtoUpdateTaskStatusRequest</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/DtoUpdateTaskStatusRequest} obj Optional instance to populate.
   * @return {module:model/DtoUpdateTaskStatusRequest} The populated <code>DtoUpdateTaskStatusRequest</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new DtoUpdateTaskStatusRequest();
      if (data.hasOwnProperty('task_status')) {
        obj['task_status'] = TypesTaskStatus.constructFromObject(data['task_status']);
      }
    }
    return obj;
  }

  /**
   * Validates the JSON data with respect to <code>DtoUpdateTaskStatusRequest</code>.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @return {boolean} to indicate whether the JSON data is valid with respect to <code>DtoUpdateTaskStatusRequest</code>.
   */
  static validateJSON(data) {
    // check to make sure all required properties are present in the JSON string
    for (const property of DtoUpdateTaskStatusRequest.RequiredProperties) {
      if (!data.hasOwnProperty(property)) {
        throw new Error("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
      }
    }
    return true;
  }
}
DtoUpdateTaskStatusRequest.RequiredProperties = ["task_status"];

/**
 * @member {module:model/TypesTaskStatus} task_status
 */
DtoUpdateTaskStatusRequest.prototype['task_status'] = undefined;
export default DtoUpdateTaskStatusRequest;