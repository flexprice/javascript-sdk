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
import TypesSecretProvider from './TypesSecretProvider';

/**
 * The DtoCreateIntegrationRequest model module.
 * @module model/DtoCreateIntegrationRequest
 * @version 1.0
 */
class DtoCreateIntegrationRequest {
  /**
   * Constructs a new <code>DtoCreateIntegrationRequest</code>.
   * @alias module:model/DtoCreateIntegrationRequest
   * @param credentials {Object.<String, String>} 
   * @param name {String} 
   * @param provider {module:model/TypesSecretProvider} 
   */
  constructor(credentials, name, provider) {
    DtoCreateIntegrationRequest.initialize(this, credentials, name, provider);
  }

  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */
  static initialize(obj, credentials, name, provider) {
    obj['credentials'] = credentials;
    obj['name'] = name;
    obj['provider'] = provider;
  }

  /**
   * Constructs a <code>DtoCreateIntegrationRequest</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/DtoCreateIntegrationRequest} obj Optional instance to populate.
   * @return {module:model/DtoCreateIntegrationRequest} The populated <code>DtoCreateIntegrationRequest</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new DtoCreateIntegrationRequest();
      if (data.hasOwnProperty('credentials')) {
        obj['credentials'] = ApiClient.convertToType(data['credentials'], {
          'String': 'String'
        });
      }
      if (data.hasOwnProperty('name')) {
        obj['name'] = ApiClient.convertToType(data['name'], 'String');
      }
      if (data.hasOwnProperty('provider')) {
        obj['provider'] = TypesSecretProvider.constructFromObject(data['provider']);
      }
    }
    return obj;
  }

  /**
   * Validates the JSON data with respect to <code>DtoCreateIntegrationRequest</code>.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @return {boolean} to indicate whether the JSON data is valid with respect to <code>DtoCreateIntegrationRequest</code>.
   */
  static validateJSON(data) {
    // check to make sure all required properties are present in the JSON string
    for (const property of DtoCreateIntegrationRequest.RequiredProperties) {
      if (!data.hasOwnProperty(property)) {
        throw new Error("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
      }
    }
    // ensure the json data is a string
    if (data['name'] && !(typeof data['name'] === 'string' || data['name'] instanceof String)) {
      throw new Error("Expected the field `name` to be a primitive type in the JSON string but got " + data['name']);
    }
    return true;
  }
}
DtoCreateIntegrationRequest.RequiredProperties = ["credentials", "name", "provider"];

/**
 * @member {Object.<String, String>} credentials
 */
DtoCreateIntegrationRequest.prototype['credentials'] = undefined;

/**
 * @member {String} name
 */
DtoCreateIntegrationRequest.prototype['name'] = undefined;

/**
 * @member {module:model/TypesSecretProvider} provider
 */
DtoCreateIntegrationRequest.prototype['provider'] = undefined;
export default DtoCreateIntegrationRequest;