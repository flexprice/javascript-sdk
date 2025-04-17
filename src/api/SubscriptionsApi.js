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
import DtoCreateSubscriptionRequest from '../model/DtoCreateSubscriptionRequest';
import DtoGetUsageBySubscriptionRequest from '../model/DtoGetUsageBySubscriptionRequest';
import DtoGetUsageBySubscriptionResponse from '../model/DtoGetUsageBySubscriptionResponse';
import DtoListSubscriptionPausesResponse from '../model/DtoListSubscriptionPausesResponse';
import DtoListSubscriptionsResponse from '../model/DtoListSubscriptionsResponse';
import DtoPauseSubscriptionRequest from '../model/DtoPauseSubscriptionRequest';
import DtoResumeSubscriptionRequest from '../model/DtoResumeSubscriptionRequest';
import DtoSubscriptionPauseResponse from '../model/DtoSubscriptionPauseResponse';
import DtoSubscriptionResponse from '../model/DtoSubscriptionResponse';
import ErrorsErrorResponse from '../model/ErrorsErrorResponse';

/**
* Subscriptions service.
* @module api/SubscriptionsApi
* @version 1.0
*/
export default class SubscriptionsApi {

    /**
    * Constructs a new SubscriptionsApi. 
    * @alias module:api/SubscriptionsApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }


    /**
     * Callback function to receive the result of the subscriptionsGet operation.
     * @callback module:api/SubscriptionsApi~subscriptionsGetCallback
     * @param {String} error Error message, if any.
     * @param {module:model/DtoListSubscriptionsResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * List subscriptions
     * Get subscriptions with optional filtering
     * @param {Object} opts Optional parameters
     * @param {String} [activeAt] ActiveAt filters subscriptions that are active at the given time
     * @param {Array.<module:model/String>} [billingCadence] BillingCadence filters by billing cadence
     * @param {Array.<module:model/String>} [billingPeriod] BillingPeriod filters by billing period
     * @param {String} [customerId] CustomerID filters by customer ID
     * @param {String} [endTime] 
     * @param {String} [expand] 
     * @param {Boolean} [includeCanceled] IncludeCanceled includes canceled subscriptions if true
     * @param {Number} [limit] 
     * @param {Number} [offset] 
     * @param {module:model/String} [order] 
     * @param {String} [planId] PlanID filters by plan ID
     * @param {String} [sort] 
     * @param {String} [startTime] 
     * @param {module:model/String} [status] 
     * @param {Array.<module:model/String>} [subscriptionStatus] SubscriptionStatus filters by subscription status
     * @param {Boolean} [withLineItems] WithLineItems includes line items in the response
     * @param {module:api/SubscriptionsApi~subscriptionsGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/DtoListSubscriptionsResponse}
     */
    subscriptionsGet(opts, callback) {
      opts = opts || {};
      let postBody = null;

      let pathParams = {
      };
      let queryParams = {
        'active_at': opts['activeAt'],
        'billing_cadence': this.apiClient.buildCollectionParam(opts['billingCadence'], 'csv'),
        'billing_period': this.apiClient.buildCollectionParam(opts['billingPeriod'], 'csv'),
        'customer_id': opts['customerId'],
        'end_time': opts['endTime'],
        'expand': opts['expand'],
        'include_canceled': opts['includeCanceled'],
        'limit': opts['limit'],
        'offset': opts['offset'],
        'order': opts['order'],
        'plan_id': opts['planId'],
        'sort': opts['sort'],
        'start_time': opts['startTime'],
        'status': opts['status'],
        'subscription_status': this.apiClient.buildCollectionParam(opts['subscriptionStatus'], 'csv'),
        'with_line_items': opts['withLineItems']
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['ApiKeyAuth'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = DtoListSubscriptionsResponse;
      return this.apiClient.callApi(
        '/subscriptions', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the subscriptionsIdCancelPost operation.
     * @callback module:api/SubscriptionsApi~subscriptionsIdCancelPostCallback
     * @param {String} error Error message, if any.
     * @param {Object.<String, {String: Object}>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Cancel subscription
     * Cancel a subscription
     * @param {String} id Subscription ID
     * @param {Object} opts Optional parameters
     * @param {Boolean} [cancelAtPeriodEnd] Cancel at period end
     * @param {module:api/SubscriptionsApi~subscriptionsIdCancelPostCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Object.<String, {String: Object}>}
     */
    subscriptionsIdCancelPost(id, opts, callback) {
      opts = opts || {};
      let postBody = null;
      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling subscriptionsIdCancelPost");
      }

      let pathParams = {
        'id': id
      };
      let queryParams = {
        'cancel_at_period_end': opts['cancelAtPeriodEnd']
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['ApiKeyAuth'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = {'String': Object};
      return this.apiClient.callApi(
        '/subscriptions/{id}/cancel', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the subscriptionsIdGet operation.
     * @callback module:api/SubscriptionsApi~subscriptionsIdGetCallback
     * @param {String} error Error message, if any.
     * @param {module:model/DtoSubscriptionResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get subscription
     * Get a subscription by ID
     * @param {String} id Subscription ID
     * @param {module:api/SubscriptionsApi~subscriptionsIdGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/DtoSubscriptionResponse}
     */
    subscriptionsIdGet(id, callback) {
      let postBody = null;
      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling subscriptionsIdGet");
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

      let authNames = ['ApiKeyAuth'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = DtoSubscriptionResponse;
      return this.apiClient.callApi(
        '/subscriptions/{id}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the subscriptionsIdPausePost operation.
     * @callback module:api/SubscriptionsApi~subscriptionsIdPausePostCallback
     * @param {String} error Error message, if any.
     * @param {module:model/DtoSubscriptionPauseResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Pause a subscription
     * Pause a subscription with the specified parameters
     * @param {String} id Subscription ID
     * @param {module:model/DtoPauseSubscriptionRequest} request Pause subscription request
     * @param {module:api/SubscriptionsApi~subscriptionsIdPausePostCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/DtoSubscriptionPauseResponse}
     */
    subscriptionsIdPausePost(id, request, callback) {
      let postBody = request;
      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling subscriptionsIdPausePost");
      }
      // verify the required parameter 'request' is set
      if (request === undefined || request === null) {
        throw new Error("Missing the required parameter 'request' when calling subscriptionsIdPausePost");
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
      let contentTypes = ['application/json'];
      let accepts = ['application/json'];
      let returnType = DtoSubscriptionPauseResponse;
      return this.apiClient.callApi(
        '/subscriptions/{id}/pause', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the subscriptionsIdPausesGet operation.
     * @callback module:api/SubscriptionsApi~subscriptionsIdPausesGetCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/DtoListSubscriptionPausesResponse>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * List all pauses for a subscription
     * List all pauses for a subscription
     * @param {String} id Subscription ID
     * @param {module:api/SubscriptionsApi~subscriptionsIdPausesGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Array.<module:model/DtoListSubscriptionPausesResponse>}
     */
    subscriptionsIdPausesGet(id, callback) {
      let postBody = null;
      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling subscriptionsIdPausesGet");
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
      let returnType = [DtoListSubscriptionPausesResponse];
      return this.apiClient.callApi(
        '/subscriptions/{id}/pauses', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the subscriptionsIdResumePost operation.
     * @callback module:api/SubscriptionsApi~subscriptionsIdResumePostCallback
     * @param {String} error Error message, if any.
     * @param {module:model/DtoSubscriptionPauseResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Resume a paused subscription
     * Resume a paused subscription with the specified parameters
     * @param {String} id Subscription ID
     * @param {module:model/DtoResumeSubscriptionRequest} request Resume subscription request
     * @param {module:api/SubscriptionsApi~subscriptionsIdResumePostCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/DtoSubscriptionPauseResponse}
     */
    subscriptionsIdResumePost(id, request, callback) {
      let postBody = request;
      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling subscriptionsIdResumePost");
      }
      // verify the required parameter 'request' is set
      if (request === undefined || request === null) {
        throw new Error("Missing the required parameter 'request' when calling subscriptionsIdResumePost");
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
      let contentTypes = ['application/json'];
      let accepts = ['application/json'];
      let returnType = DtoSubscriptionPauseResponse;
      return this.apiClient.callApi(
        '/subscriptions/{id}/resume', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the subscriptionsPost operation.
     * @callback module:api/SubscriptionsApi~subscriptionsPostCallback
     * @param {String} error Error message, if any.
     * @param {module:model/DtoSubscriptionResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Create subscription
     * Create a new subscription
     * @param {module:model/DtoCreateSubscriptionRequest} subscription Subscription Request
     * @param {module:api/SubscriptionsApi~subscriptionsPostCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/DtoSubscriptionResponse}
     */
    subscriptionsPost(subscription, callback) {
      let postBody = subscription;
      // verify the required parameter 'subscription' is set
      if (subscription === undefined || subscription === null) {
        throw new Error("Missing the required parameter 'subscription' when calling subscriptionsPost");
      }

      let pathParams = {
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['ApiKeyAuth'];
      let contentTypes = ['application/json'];
      let accepts = ['application/json'];
      let returnType = DtoSubscriptionResponse;
      return this.apiClient.callApi(
        '/subscriptions', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the subscriptionsUsagePost operation.
     * @callback module:api/SubscriptionsApi~subscriptionsUsagePostCallback
     * @param {String} error Error message, if any.
     * @param {module:model/DtoGetUsageBySubscriptionResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get usage by subscription
     * Get usage for a subscription
     * @param {module:model/DtoGetUsageBySubscriptionRequest} request Usage request
     * @param {module:api/SubscriptionsApi~subscriptionsUsagePostCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/DtoGetUsageBySubscriptionResponse}
     */
    subscriptionsUsagePost(request, callback) {
      let postBody = request;
      // verify the required parameter 'request' is set
      if (request === undefined || request === null) {
        throw new Error("Missing the required parameter 'request' when calling subscriptionsUsagePost");
      }

      let pathParams = {
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['ApiKeyAuth'];
      let contentTypes = ['application/json'];
      let accepts = ['application/json'];
      let returnType = DtoGetUsageBySubscriptionResponse;
      return this.apiClient.callApi(
        '/subscriptions/usage', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }


}
