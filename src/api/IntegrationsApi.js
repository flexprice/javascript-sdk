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


import ApiClient from "../ApiClient";
import DtoCreateIntegrationRequest from '../model/DtoCreateIntegrationRequest';
import DtoLinkedIntegrationsResponse from '../model/DtoLinkedIntegrationsResponse';
import DtoSecretResponse from '../model/DtoSecretResponse';
import ErrorsErrorResponse from '../model/ErrorsErrorResponse';

/**
* Integrations service.
* @module api/IntegrationsApi
* @version 1.0
*/
export default class IntegrationsApi {

    /**
    * Constructs a new IntegrationsApi. 
    * @alias module:api/IntegrationsApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }


    /**
     * Callback function to receive the result of the secretsIntegrationsIdDelete operation.
     * @callback module:api/IntegrationsApi~secretsIntegrationsIdDeleteCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Delete an integration
     * Delete integration credentials
     * @param {String} id Integration ID
     * @param {module:api/IntegrationsApi~secretsIntegrationsIdDeleteCallback} callback The callback function, accepting three arguments: error, data, response
     */
    secretsIntegrationsIdDelete(id, callback) {
      let postBody = null;
      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling secretsIntegrationsIdDelete");
      }

      let pathParams = {
        'id': id
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = [];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = null;
      return this.apiClient.callApi(
        '/secrets/integrations/{id}', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the secretsIntegrationsLinkedGet operation.
     * @callback module:api/IntegrationsApi~secretsIntegrationsLinkedGetCallback
     * @param {String} error Error message, if any.
     * @param {module:model/DtoLinkedIntegrationsResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * List linked integrations
     * Get a list of unique providers which have a valid linked integration secret
     * @param {module:api/IntegrationsApi~secretsIntegrationsLinkedGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/DtoLinkedIntegrationsResponse}
     */
    secretsIntegrationsLinkedGet(callback) {
      let postBody = null;

      let pathParams = {
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = [];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = DtoLinkedIntegrationsResponse;
      return this.apiClient.callApi(
        '/secrets/integrations/linked', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the secretsIntegrationsProviderGet operation.
     * @callback module:api/IntegrationsApi~secretsIntegrationsProviderGetCallback
     * @param {String} error Error message, if any.
     * @param {module:model/DtoSecretResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get integration details
     * Get details of a specific integration
     * @param {String} provider Integration provider
     * @param {module:api/IntegrationsApi~secretsIntegrationsProviderGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/DtoSecretResponse}
     */
    secretsIntegrationsProviderGet(provider, callback) {
      let postBody = null;
      // verify the required parameter 'provider' is set
      if (provider === undefined || provider === null) {
        throw new Error("Missing the required parameter 'provider' when calling secretsIntegrationsProviderGet");
      }

      let pathParams = {
        'provider': provider
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = [];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = DtoSecretResponse;
      return this.apiClient.callApi(
        '/secrets/integrations/{provider}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the secretsIntegrationsProviderPost operation.
     * @callback module:api/IntegrationsApi~secretsIntegrationsProviderPostCallback
     * @param {String} error Error message, if any.
     * @param {module:model/DtoSecretResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Create or update an integration
     * Create or update integration credentials
     * @param {String} provider Integration provider
     * @param {module:model/DtoCreateIntegrationRequest} request Integration creation request
     * @param {module:api/IntegrationsApi~secretsIntegrationsProviderPostCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/DtoSecretResponse}
     */
    secretsIntegrationsProviderPost(provider, request, callback) {
      let postBody = request;
      // verify the required parameter 'provider' is set
      if (provider === undefined || provider === null) {
        throw new Error("Missing the required parameter 'provider' when calling secretsIntegrationsProviderPost");
      }
      // verify the required parameter 'request' is set
      if (request === undefined || request === null) {
        throw new Error("Missing the required parameter 'request' when calling secretsIntegrationsProviderPost");
      }

      let pathParams = {
        'provider': provider
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = [];
      let contentTypes = ['application/json'];
      let accepts = ['application/json'];
      let returnType = DtoSecretResponse;
      return this.apiClient.callApi(
        '/secrets/integrations/{provider}', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }


}
