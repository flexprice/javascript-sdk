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
import DtoCreatePaymentRequest from '../model/DtoCreatePaymentRequest';
import DtoListPaymentsResponse from '../model/DtoListPaymentsResponse';
import DtoPaymentResponse from '../model/DtoPaymentResponse';
import DtoUpdatePaymentRequest from '../model/DtoUpdatePaymentRequest';
import ErrorsErrorResponse from '../model/ErrorsErrorResponse';

/**
* Payments service.
* @module api/PaymentsApi
* @version 1.0
*/
export default class PaymentsApi {
  /**
  * Constructs a new PaymentsApi. 
  * @alias module:api/PaymentsApi
  * @class
  * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
  * default to {@link module:ApiClient#instance} if unspecified.
  */
  constructor(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;
  }

  /**
   * Callback function to receive the result of the paymentsGet operation.
   * @callback module:api/PaymentsApi~paymentsGetCallback
   * @param {String} error Error message, if any.
   * @param {module:model/DtoListPaymentsResponse} data The data returned by the service call.
   * @param {String} response The complete HTTP response.
   */

  /**
   * List payments
   * List payments with the specified filter
   * @param {Object} opts Optional parameters
   * @param {String} [currency] 
   * @param {String} [destinationId] 
   * @param {String} [destinationType] 
   * @param {String} [endTime] 
   * @param {String} [expand] 
   * @param {Number} [limit] 
   * @param {Number} [offset] 
   * @param {module:model/String} [order] 
   * @param {String} [paymentGateway] 
   * @param {Array.<String>} [paymentIds] 
   * @param {String} [paymentMethodType] 
   * @param {String} [paymentStatus] 
   * @param {String} [sort] 
   * @param {String} [startTime] 
   * @param {module:model/String} [status] 
   * @param {module:api/PaymentsApi~paymentsGetCallback} callback The callback function, accepting three arguments: error, data, response
   * data is of type: {@link module:model/DtoListPaymentsResponse}
   */
  paymentsGet(opts, callback) {
    opts = opts || {};
    let postBody = null;
    let pathParams = {};
    let queryParams = {
      'currency': opts['currency'],
      'destination_id': opts['destinationId'],
      'destination_type': opts['destinationType'],
      'end_time': opts['endTime'],
      'expand': opts['expand'],
      'limit': opts['limit'],
      'offset': opts['offset'],
      'order': opts['order'],
      'payment_gateway': opts['paymentGateway'],
      'payment_ids': this.apiClient.buildCollectionParam(opts['paymentIds'], 'csv'),
      'payment_method_type': opts['paymentMethodType'],
      'payment_status': opts['paymentStatus'],
      'sort': opts['sort'],
      'start_time': opts['startTime'],
      'status': opts['status']
    };
    let headerParams = {};
    let formParams = {};
    let authNames = ['ApiKeyAuth'];
    let contentTypes = [];
    let accepts = ['application/json'];
    let returnType = DtoListPaymentsResponse;
    return this.apiClient.callApi('/payments', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
  }

  /**
   * Callback function to receive the result of the paymentsIdDelete operation.
   * @callback module:api/PaymentsApi~paymentsIdDeleteCallback
   * @param {String} error Error message, if any.
   * @param {Object.<String, {String: Object}>} data The data returned by the service call.
   * @param {String} response The complete HTTP response.
   */

  /**
   * Delete a payment
   * Delete a payment
   * @param {String} id Payment ID
   * @param {module:api/PaymentsApi~paymentsIdDeleteCallback} callback The callback function, accepting three arguments: error, data, response
   * data is of type: {@link Object.<String, {String: Object}>}
   */
  paymentsIdDelete(id, callback) {
    let postBody = null;
    // verify the required parameter 'id' is set
    if (id === undefined || id === null) {
      throw new Error("Missing the required parameter 'id' when calling paymentsIdDelete");
    }
    let pathParams = {
      'id': id
    };
    let queryParams = {};
    let headerParams = {};
    let formParams = {};
    let authNames = ['ApiKeyAuth'];
    let contentTypes = [];
    let accepts = ['application/json'];
    let returnType = {
      'String': Object
    };
    return this.apiClient.callApi('/payments/{id}', 'DELETE', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
  }

  /**
   * Callback function to receive the result of the paymentsIdGet operation.
   * @callback module:api/PaymentsApi~paymentsIdGetCallback
   * @param {String} error Error message, if any.
   * @param {module:model/DtoPaymentResponse} data The data returned by the service call.
   * @param {String} response The complete HTTP response.
   */

  /**
   * Get a payment by ID
   * Get a payment by ID
   * @param {String} id Payment ID
   * @param {module:api/PaymentsApi~paymentsIdGetCallback} callback The callback function, accepting three arguments: error, data, response
   * data is of type: {@link module:model/DtoPaymentResponse}
   */
  paymentsIdGet(id, callback) {
    let postBody = null;
    // verify the required parameter 'id' is set
    if (id === undefined || id === null) {
      throw new Error("Missing the required parameter 'id' when calling paymentsIdGet");
    }
    let pathParams = {
      'id': id
    };
    let queryParams = {};
    let headerParams = {};
    let formParams = {};
    let authNames = ['ApiKeyAuth'];
    let contentTypes = [];
    let accepts = ['application/json'];
    let returnType = DtoPaymentResponse;
    return this.apiClient.callApi('/payments/{id}', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
  }

  /**
   * Callback function to receive the result of the paymentsIdProcessPost operation.
   * @callback module:api/PaymentsApi~paymentsIdProcessPostCallback
   * @param {String} error Error message, if any.
   * @param {module:model/DtoPaymentResponse} data The data returned by the service call.
   * @param {String} response The complete HTTP response.
   */

  /**
   * Process a payment
   * Process a payment
   * @param {String} id Payment ID
   * @param {module:api/PaymentsApi~paymentsIdProcessPostCallback} callback The callback function, accepting three arguments: error, data, response
   * data is of type: {@link module:model/DtoPaymentResponse}
   */
  paymentsIdProcessPost(id, callback) {
    let postBody = null;
    // verify the required parameter 'id' is set
    if (id === undefined || id === null) {
      throw new Error("Missing the required parameter 'id' when calling paymentsIdProcessPost");
    }
    let pathParams = {
      'id': id
    };
    let queryParams = {};
    let headerParams = {};
    let formParams = {};
    let authNames = ['ApiKeyAuth'];
    let contentTypes = [];
    let accepts = ['application/json'];
    let returnType = DtoPaymentResponse;
    return this.apiClient.callApi('/payments/{id}/process', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
  }

  /**
   * Callback function to receive the result of the paymentsIdPut operation.
   * @callback module:api/PaymentsApi~paymentsIdPutCallback
   * @param {String} error Error message, if any.
   * @param {module:model/DtoPaymentResponse} data The data returned by the service call.
   * @param {String} response The complete HTTP response.
   */

  /**
   * Update a payment
   * Update a payment with the specified configuration
   * @param {String} id Payment ID
   * @param {module:model/DtoUpdatePaymentRequest} payment Payment configuration
   * @param {module:api/PaymentsApi~paymentsIdPutCallback} callback The callback function, accepting three arguments: error, data, response
   * data is of type: {@link module:model/DtoPaymentResponse}
   */
  paymentsIdPut(id, payment, callback) {
    let postBody = payment;
    // verify the required parameter 'id' is set
    if (id === undefined || id === null) {
      throw new Error("Missing the required parameter 'id' when calling paymentsIdPut");
    }
    // verify the required parameter 'payment' is set
    if (payment === undefined || payment === null) {
      throw new Error("Missing the required parameter 'payment' when calling paymentsIdPut");
    }
    let pathParams = {
      'id': id
    };
    let queryParams = {};
    let headerParams = {};
    let formParams = {};
    let authNames = ['ApiKeyAuth'];
    let contentTypes = ['application/json'];
    let accepts = ['application/json'];
    let returnType = DtoPaymentResponse;
    return this.apiClient.callApi('/payments/{id}', 'PUT', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
  }

  /**
   * Callback function to receive the result of the paymentsPost operation.
   * @callback module:api/PaymentsApi~paymentsPostCallback
   * @param {String} error Error message, if any.
   * @param {module:model/DtoPaymentResponse} data The data returned by the service call.
   * @param {String} response The complete HTTP response.
   */

  /**
   * Create a new payment
   * Create a new payment with the specified configuration
   * @param {module:model/DtoCreatePaymentRequest} payment Payment configuration
   * @param {module:api/PaymentsApi~paymentsPostCallback} callback The callback function, accepting three arguments: error, data, response
   * data is of type: {@link module:model/DtoPaymentResponse}
   */
  paymentsPost(payment, callback) {
    let postBody = payment;
    // verify the required parameter 'payment' is set
    if (payment === undefined || payment === null) {
      throw new Error("Missing the required parameter 'payment' when calling paymentsPost");
    }
    let pathParams = {};
    let queryParams = {};
    let headerParams = {};
    let formParams = {};
    let authNames = ['ApiKeyAuth'];
    let contentTypes = ['application/json'];
    let accepts = ['application/json'];
    let returnType = DtoPaymentResponse;
    return this.apiClient.callApi('/payments', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
  }
}