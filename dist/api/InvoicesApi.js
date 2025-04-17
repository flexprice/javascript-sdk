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
import DtoCreateInvoiceRequest from '../model/DtoCreateInvoiceRequest';
import DtoCustomerMultiCurrencyInvoiceSummary from '../model/DtoCustomerMultiCurrencyInvoiceSummary';
import DtoGetPreviewInvoiceRequest from '../model/DtoGetPreviewInvoiceRequest';
import DtoInvoiceResponse from '../model/DtoInvoiceResponse';
import DtoListInvoicesResponse from '../model/DtoListInvoicesResponse';
import DtoUpdatePaymentStatusRequest from '../model/DtoUpdatePaymentStatusRequest';
import ErrorsErrorResponse from '../model/ErrorsErrorResponse';

/**
* Invoices service.
* @module api/InvoicesApi
* @version 1.0
*/
export default class InvoicesApi {
  /**
  * Constructs a new InvoicesApi. 
  * @alias module:api/InvoicesApi
  * @class
  * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
  * default to {@link module:ApiClient#instance} if unspecified.
  */
  constructor(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;
  }

  /**
   * Callback function to receive the result of the customersIdInvoicesSummaryGet operation.
   * @callback module:api/InvoicesApi~customersIdInvoicesSummaryGetCallback
   * @param {String} error Error message, if any.
   * @param {module:model/DtoCustomerMultiCurrencyInvoiceSummary} data The data returned by the service call.
   * @param {String} response The complete HTTP response.
   */

  /**
   * Get a customer invoice summary
   * Get a customer invoice summary
   * @param {String} id Customer ID
   * @param {module:api/InvoicesApi~customersIdInvoicesSummaryGetCallback} callback The callback function, accepting three arguments: error, data, response
   * data is of type: {@link module:model/DtoCustomerMultiCurrencyInvoiceSummary}
   */
  customersIdInvoicesSummaryGet(id, callback) {
    let postBody = null;
    // verify the required parameter 'id' is set
    if (id === undefined || id === null) {
      throw new Error("Missing the required parameter 'id' when calling customersIdInvoicesSummaryGet");
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
    let returnType = DtoCustomerMultiCurrencyInvoiceSummary;
    return this.apiClient.callApi('/customers/{id}/invoices/summary', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
  }

  /**
   * Callback function to receive the result of the invoicesGet operation.
   * @callback module:api/InvoicesApi~invoicesGetCallback
   * @param {String} error Error message, if any.
   * @param {module:model/DtoListInvoicesResponse} data The data returned by the service call.
   * @param {String} response The complete HTTP response.
   */

  /**
   * List invoices
   * List invoices with optional filtering
   * @param {Object} opts Optional parameters
   * @param {Number} [amountDueGt] 
   * @param {Number} [amountRemainingGt] 
   * @param {String} [customerId] 
   * @param {String} [endTime] 
   * @param {String} [expand] 
   * @param {Array.<module:model/String>} [invoiceStatus] 
   * @param {module:model/String} [invoiceType] 
   * @param {Number} [limit] 
   * @param {Number} [offset] 
   * @param {module:model/String} [order] 
   * @param {Array.<module:model/String>} [paymentStatus] 
   * @param {String} [sort] 
   * @param {String} [startTime] 
   * @param {module:model/String} [status] 
   * @param {String} [subscriptionId] 
   * @param {module:api/InvoicesApi~invoicesGetCallback} callback The callback function, accepting three arguments: error, data, response
   * data is of type: {@link module:model/DtoListInvoicesResponse}
   */
  invoicesGet(opts, callback) {
    opts = opts || {};
    let postBody = null;
    let pathParams = {};
    let queryParams = {
      'amount_due_gt': opts['amountDueGt'],
      'amount_remaining_gt': opts['amountRemainingGt'],
      'customer_id': opts['customerId'],
      'end_time': opts['endTime'],
      'expand': opts['expand'],
      'invoice_status': this.apiClient.buildCollectionParam(opts['invoiceStatus'], 'csv'),
      'invoice_type': opts['invoiceType'],
      'limit': opts['limit'],
      'offset': opts['offset'],
      'order': opts['order'],
      'payment_status': this.apiClient.buildCollectionParam(opts['paymentStatus'], 'csv'),
      'sort': opts['sort'],
      'start_time': opts['startTime'],
      'status': opts['status'],
      'subscription_id': opts['subscriptionId']
    };
    let headerParams = {};
    let formParams = {};
    let authNames = [];
    let contentTypes = [];
    let accepts = ['application/json'];
    let returnType = DtoListInvoicesResponse;
    return this.apiClient.callApi('/invoices', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
  }

  /**
   * Callback function to receive the result of the invoicesIdFinalizePost operation.
   * @callback module:api/InvoicesApi~invoicesIdFinalizePostCallback
   * @param {String} error Error message, if any.
   * @param {Object.<String, {String: Object}>} data The data returned by the service call.
   * @param {String} response The complete HTTP response.
   */

  /**
   * Finalize an invoice
   * Finalize a draft invoice
   * @param {String} id Invoice ID
   * @param {module:api/InvoicesApi~invoicesIdFinalizePostCallback} callback The callback function, accepting three arguments: error, data, response
   * data is of type: {@link Object.<String, {String: Object}>}
   */
  invoicesIdFinalizePost(id, callback) {
    let postBody = null;
    // verify the required parameter 'id' is set
    if (id === undefined || id === null) {
      throw new Error("Missing the required parameter 'id' when calling invoicesIdFinalizePost");
    }
    let pathParams = {
      'id': id
    };
    let queryParams = {};
    let headerParams = {};
    let formParams = {};
    let authNames = [];
    let contentTypes = [];
    let accepts = ['application/json'];
    let returnType = {
      'String': Object
    };
    return this.apiClient.callApi('/invoices/{id}/finalize', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
  }

  /**
   * Callback function to receive the result of the invoicesIdGet operation.
   * @callback module:api/InvoicesApi~invoicesIdGetCallback
   * @param {String} error Error message, if any.
   * @param {module:model/DtoInvoiceResponse} data The data returned by the service call.
   * @param {String} response The complete HTTP response.
   */

  /**
   * Get an invoice by ID
   * Get detailed information about an invoice
   * @param {String} id Invoice ID
   * @param {module:api/InvoicesApi~invoicesIdGetCallback} callback The callback function, accepting three arguments: error, data, response
   * data is of type: {@link module:model/DtoInvoiceResponse}
   */
  invoicesIdGet(id, callback) {
    let postBody = null;
    // verify the required parameter 'id' is set
    if (id === undefined || id === null) {
      throw new Error("Missing the required parameter 'id' when calling invoicesIdGet");
    }
    let pathParams = {
      'id': id
    };
    let queryParams = {};
    let headerParams = {};
    let formParams = {};
    let authNames = [];
    let contentTypes = [];
    let accepts = ['application/json'];
    let returnType = DtoInvoiceResponse;
    return this.apiClient.callApi('/invoices/{id}', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
  }

  /**
   * Callback function to receive the result of the invoicesIdPaymentAttemptPost operation.
   * @callback module:api/InvoicesApi~invoicesIdPaymentAttemptPostCallback
   * @param {String} error Error message, if any.
   * @param {Object.<String, {String: Object}>} data The data returned by the service call.
   * @param {String} response The complete HTTP response.
   */

  /**
   * Attempt payment for an invoice
   * Attempt to pay an invoice using customer's available wallets
   * @param {String} id Invoice ID
   * @param {module:api/InvoicesApi~invoicesIdPaymentAttemptPostCallback} callback The callback function, accepting three arguments: error, data, response
   * data is of type: {@link Object.<String, {String: Object}>}
   */
  invoicesIdPaymentAttemptPost(id, callback) {
    let postBody = null;
    // verify the required parameter 'id' is set
    if (id === undefined || id === null) {
      throw new Error("Missing the required parameter 'id' when calling invoicesIdPaymentAttemptPost");
    }
    let pathParams = {
      'id': id
    };
    let queryParams = {};
    let headerParams = {};
    let formParams = {};
    let authNames = [];
    let contentTypes = [];
    let accepts = ['application/json'];
    let returnType = {
      'String': Object
    };
    return this.apiClient.callApi('/invoices/{id}/payment/attempt', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
  }

  /**
   * Callback function to receive the result of the invoicesIdPaymentPut operation.
   * @callback module:api/InvoicesApi~invoicesIdPaymentPutCallback
   * @param {String} error Error message, if any.
   * @param {module:model/DtoInvoiceResponse} data The data returned by the service call.
   * @param {String} response The complete HTTP response.
   */

  /**
   * Update invoice payment status
   * Update the payment status of an invoice
   * @param {String} id Invoice ID
   * @param {module:model/DtoUpdatePaymentStatusRequest} request Payment Status Update Request
   * @param {module:api/InvoicesApi~invoicesIdPaymentPutCallback} callback The callback function, accepting three arguments: error, data, response
   * data is of type: {@link module:model/DtoInvoiceResponse}
   */
  invoicesIdPaymentPut(id, request, callback) {
    let postBody = request;
    // verify the required parameter 'id' is set
    if (id === undefined || id === null) {
      throw new Error("Missing the required parameter 'id' when calling invoicesIdPaymentPut");
    }
    // verify the required parameter 'request' is set
    if (request === undefined || request === null) {
      throw new Error("Missing the required parameter 'request' when calling invoicesIdPaymentPut");
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
    let returnType = DtoInvoiceResponse;
    return this.apiClient.callApi('/invoices/{id}/payment', 'PUT', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
  }

  /**
   * Callback function to receive the result of the invoicesIdPdfGet operation.
   * @callback module:api/InvoicesApi~invoicesIdPdfGetCallback
   * @param {String} error Error message, if any.
   * @param {File} data The data returned by the service call.
   * @param {String} response The complete HTTP response.
   */

  /**
   * Get PDF for an invoice
   * Retrieve the PDF document for a specific invoice by its ID
   * @param {String} id Invoice ID
   * @param {module:api/InvoicesApi~invoicesIdPdfGetCallback} callback The callback function, accepting three arguments: error, data, response
   * data is of type: {@link File}
   */
  invoicesIdPdfGet(id, callback) {
    let postBody = null;
    // verify the required parameter 'id' is set
    if (id === undefined || id === null) {
      throw new Error("Missing the required parameter 'id' when calling invoicesIdPdfGet");
    }
    let pathParams = {
      'id': id
    };
    let queryParams = {};
    let headerParams = {};
    let formParams = {};
    let authNames = [];
    let contentTypes = [];
    let accepts = ['*/*'];
    let returnType = File;
    return this.apiClient.callApi('/invoices/{id}/pdf', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
  }

  /**
   * Callback function to receive the result of the invoicesIdVoidPost operation.
   * @callback module:api/InvoicesApi~invoicesIdVoidPostCallback
   * @param {String} error Error message, if any.
   * @param {Object.<String, {String: Object}>} data The data returned by the service call.
   * @param {String} response The complete HTTP response.
   */

  /**
   * Void an invoice
   * Void an invoice that hasn't been paid
   * @param {String} id Invoice ID
   * @param {module:api/InvoicesApi~invoicesIdVoidPostCallback} callback The callback function, accepting three arguments: error, data, response
   * data is of type: {@link Object.<String, {String: Object}>}
   */
  invoicesIdVoidPost(id, callback) {
    let postBody = null;
    // verify the required parameter 'id' is set
    if (id === undefined || id === null) {
      throw new Error("Missing the required parameter 'id' when calling invoicesIdVoidPost");
    }
    let pathParams = {
      'id': id
    };
    let queryParams = {};
    let headerParams = {};
    let formParams = {};
    let authNames = [];
    let contentTypes = [];
    let accepts = ['application/json'];
    let returnType = {
      'String': Object
    };
    return this.apiClient.callApi('/invoices/{id}/void', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
  }

  /**
   * Callback function to receive the result of the invoicesPost operation.
   * @callback module:api/InvoicesApi~invoicesPostCallback
   * @param {String} error Error message, if any.
   * @param {module:model/DtoInvoiceResponse} data The data returned by the service call.
   * @param {String} response The complete HTTP response.
   */

  /**
   * Create a new invoice
   * Create a new invoice with the provided details
   * @param {module:model/DtoCreateInvoiceRequest} invoice Invoice details
   * @param {module:api/InvoicesApi~invoicesPostCallback} callback The callback function, accepting three arguments: error, data, response
   * data is of type: {@link module:model/DtoInvoiceResponse}
   */
  invoicesPost(invoice, callback) {
    let postBody = invoice;
    // verify the required parameter 'invoice' is set
    if (invoice === undefined || invoice === null) {
      throw new Error("Missing the required parameter 'invoice' when calling invoicesPost");
    }
    let pathParams = {};
    let queryParams = {};
    let headerParams = {};
    let formParams = {};
    let authNames = [];
    let contentTypes = ['application/json'];
    let accepts = ['application/json'];
    let returnType = DtoInvoiceResponse;
    return this.apiClient.callApi('/invoices', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
  }

  /**
   * Callback function to receive the result of the invoicesPreviewPost operation.
   * @callback module:api/InvoicesApi~invoicesPreviewPostCallback
   * @param {String} error Error message, if any.
   * @param {module:model/DtoInvoiceResponse} data The data returned by the service call.
   * @param {String} response The complete HTTP response.
   */

  /**
   * Get a preview invoice
   * Get a preview invoice
   * @param {module:model/DtoGetPreviewInvoiceRequest} request Preview Invoice Request
   * @param {module:api/InvoicesApi~invoicesPreviewPostCallback} callback The callback function, accepting three arguments: error, data, response
   * data is of type: {@link module:model/DtoInvoiceResponse}
   */
  invoicesPreviewPost(request, callback) {
    let postBody = request;
    // verify the required parameter 'request' is set
    if (request === undefined || request === null) {
      throw new Error("Missing the required parameter 'request' when calling invoicesPreviewPost");
    }
    let pathParams = {};
    let queryParams = {};
    let headerParams = {};
    let formParams = {};
    let authNames = [];
    let contentTypes = ['application/json'];
    let accepts = ['application/json'];
    let returnType = DtoInvoiceResponse;
    return this.apiClient.callApi('/invoices/preview', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
  }
}