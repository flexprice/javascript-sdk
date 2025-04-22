# FlexpriceSdk.SubscriptionsApi

All URIs are relative to */v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**subscriptionsGet**](SubscriptionsApi.md#subscriptionsGet) | **GET** /subscriptions | List subscriptions
[**subscriptionsIdCancelPost**](SubscriptionsApi.md#subscriptionsIdCancelPost) | **POST** /subscriptions/{id}/cancel | Cancel subscription
[**subscriptionsIdGet**](SubscriptionsApi.md#subscriptionsIdGet) | **GET** /subscriptions/{id} | Get subscription
[**subscriptionsIdPausePost**](SubscriptionsApi.md#subscriptionsIdPausePost) | **POST** /subscriptions/{id}/pause | Pause a subscription
[**subscriptionsIdPausesGet**](SubscriptionsApi.md#subscriptionsIdPausesGet) | **GET** /subscriptions/{id}/pauses | List all pauses for a subscription
[**subscriptionsIdResumePost**](SubscriptionsApi.md#subscriptionsIdResumePost) | **POST** /subscriptions/{id}/resume | Resume a paused subscription
[**subscriptionsPost**](SubscriptionsApi.md#subscriptionsPost) | **POST** /subscriptions | Create subscription
[**subscriptionsUsagePost**](SubscriptionsApi.md#subscriptionsUsagePost) | **POST** /subscriptions/usage | Get usage by subscription



## subscriptionsGet

> DtoListSubscriptionsResponse subscriptionsGet(opts)

List subscriptions

Get subscriptions with optional filtering

### Example

```javascript
import FlexpriceSdk from '@flexprice/sdk';
let defaultClient = FlexpriceSdk.ApiClient.instance;
// Configure API key authorization: ApiKeyAuth
let ApiKeyAuth = defaultClient.authentications['ApiKeyAuth'];
ApiKeyAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKeyAuth.apiKeyPrefix = 'Token';

let apiInstance = new FlexpriceSdk.SubscriptionsApi();
let opts = {
  'activeAt': "activeAt_example", // String | ActiveAt filters subscriptions that are active at the given time
  'billingCadence': ["null"], // [String] | BillingCadence filters by billing cadence
  'billingPeriod': ["null"], // [String] | BillingPeriod filters by billing period
  'customerId': "customerId_example", // String | CustomerID filters by customer ID
  'endTime': "endTime_example", // String | 
  'expand': "expand_example", // String | 
  'limit': 56, // Number | 
  'offset': 56, // Number | 
  'order': "order_example", // String | 
  'planId': "planId_example", // String | PlanID filters by plan ID
  'sort': "sort_example", // String | 
  'startTime': "startTime_example", // String | 
  'status': "status_example", // String | 
  'subscriptionStatus': ["null"], // [String] | SubscriptionStatus filters by subscription status
  'withLineItems': true // Boolean | WithLineItems includes line items in the response
};
apiInstance.subscriptionsGet(opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **activeAt** | **String**| ActiveAt filters subscriptions that are active at the given time | [optional] 
 **billingCadence** | [**[String]**](String.md)| BillingCadence filters by billing cadence | [optional] 
 **billingPeriod** | [**[String]**](String.md)| BillingPeriod filters by billing period | [optional] 
 **customerId** | **String**| CustomerID filters by customer ID | [optional] 
 **endTime** | **String**|  | [optional] 
 **expand** | **String**|  | [optional] 
 **limit** | **Number**|  | [optional] 
 **offset** | **Number**|  | [optional] 
 **order** | **String**|  | [optional] 
 **planId** | **String**| PlanID filters by plan ID | [optional] 
 **sort** | **String**|  | [optional] 
 **startTime** | **String**|  | [optional] 
 **status** | **String**|  | [optional] 
 **subscriptionStatus** | [**[String]**](String.md)| SubscriptionStatus filters by subscription status | [optional] 
 **withLineItems** | **Boolean**| WithLineItems includes line items in the response | [optional] 

### Return type

[**DtoListSubscriptionsResponse**](DtoListSubscriptionsResponse.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## subscriptionsIdCancelPost

> {String: Object} subscriptionsIdCancelPost(id, opts)

Cancel subscription

Cancel a subscription

### Example

```javascript
import FlexpriceSdk from '@flexprice/sdk';
let defaultClient = FlexpriceSdk.ApiClient.instance;
// Configure API key authorization: ApiKeyAuth
let ApiKeyAuth = defaultClient.authentications['ApiKeyAuth'];
ApiKeyAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKeyAuth.apiKeyPrefix = 'Token';

let apiInstance = new FlexpriceSdk.SubscriptionsApi();
let id = "id_example"; // String | Subscription ID
let opts = {
  'cancelAtPeriodEnd': true // Boolean | Cancel at period end
};
apiInstance.subscriptionsIdCancelPost(id, opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| Subscription ID | 
 **cancelAtPeriodEnd** | **Boolean**| Cancel at period end | [optional] 

### Return type

**{String: Object}**

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## subscriptionsIdGet

> DtoSubscriptionResponse subscriptionsIdGet(id)

Get subscription

Get a subscription by ID

### Example

```javascript
import FlexpriceSdk from '@flexprice/sdk';
let defaultClient = FlexpriceSdk.ApiClient.instance;
// Configure API key authorization: ApiKeyAuth
let ApiKeyAuth = defaultClient.authentications['ApiKeyAuth'];
ApiKeyAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKeyAuth.apiKeyPrefix = 'Token';

let apiInstance = new FlexpriceSdk.SubscriptionsApi();
let id = "id_example"; // String | Subscription ID
apiInstance.subscriptionsIdGet(id, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| Subscription ID | 

### Return type

[**DtoSubscriptionResponse**](DtoSubscriptionResponse.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## subscriptionsIdPausePost

> DtoSubscriptionPauseResponse subscriptionsIdPausePost(id, request)

Pause a subscription

Pause a subscription with the specified parameters

### Example

```javascript
import FlexpriceSdk from '@flexprice/sdk';

let apiInstance = new FlexpriceSdk.SubscriptionsApi();
let id = "id_example"; // String | Subscription ID
let request = new FlexpriceSdk.DtoPauseSubscriptionRequest(); // DtoPauseSubscriptionRequest | Pause subscription request
apiInstance.subscriptionsIdPausePost(id, request, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| Subscription ID | 
 **request** | [**DtoPauseSubscriptionRequest**](DtoPauseSubscriptionRequest.md)| Pause subscription request | 

### Return type

[**DtoSubscriptionPauseResponse**](DtoSubscriptionPauseResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## subscriptionsIdPausesGet

> [DtoListSubscriptionPausesResponse] subscriptionsIdPausesGet(id)

List all pauses for a subscription

List all pauses for a subscription

### Example

```javascript
import FlexpriceSdk from '@flexprice/sdk';

let apiInstance = new FlexpriceSdk.SubscriptionsApi();
let id = "id_example"; // String | Subscription ID
apiInstance.subscriptionsIdPausesGet(id, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| Subscription ID | 

### Return type

[**[DtoListSubscriptionPausesResponse]**](DtoListSubscriptionPausesResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## subscriptionsIdResumePost

> DtoSubscriptionPauseResponse subscriptionsIdResumePost(id, request)

Resume a paused subscription

Resume a paused subscription with the specified parameters

### Example

```javascript
import FlexpriceSdk from '@flexprice/sdk';

let apiInstance = new FlexpriceSdk.SubscriptionsApi();
let id = "id_example"; // String | Subscription ID
let request = new FlexpriceSdk.DtoResumeSubscriptionRequest(); // DtoResumeSubscriptionRequest | Resume subscription request
apiInstance.subscriptionsIdResumePost(id, request, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| Subscription ID | 
 **request** | [**DtoResumeSubscriptionRequest**](DtoResumeSubscriptionRequest.md)| Resume subscription request | 

### Return type

[**DtoSubscriptionPauseResponse**](DtoSubscriptionPauseResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## subscriptionsPost

> DtoSubscriptionResponse subscriptionsPost(subscription)

Create subscription

Create a new subscription

### Example

```javascript
import FlexpriceSdk from '@flexprice/sdk';
let defaultClient = FlexpriceSdk.ApiClient.instance;
// Configure API key authorization: ApiKeyAuth
let ApiKeyAuth = defaultClient.authentications['ApiKeyAuth'];
ApiKeyAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKeyAuth.apiKeyPrefix = 'Token';

let apiInstance = new FlexpriceSdk.SubscriptionsApi();
let subscription = new FlexpriceSdk.DtoCreateSubscriptionRequest(); // DtoCreateSubscriptionRequest | Subscription Request
apiInstance.subscriptionsPost(subscription, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscription** | [**DtoCreateSubscriptionRequest**](DtoCreateSubscriptionRequest.md)| Subscription Request | 

### Return type

[**DtoSubscriptionResponse**](DtoSubscriptionResponse.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## subscriptionsUsagePost

> DtoGetUsageBySubscriptionResponse subscriptionsUsagePost(request)

Get usage by subscription

Get usage for a subscription

### Example

```javascript
import FlexpriceSdk from '@flexprice/sdk';
let defaultClient = FlexpriceSdk.ApiClient.instance;
// Configure API key authorization: ApiKeyAuth
let ApiKeyAuth = defaultClient.authentications['ApiKeyAuth'];
ApiKeyAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKeyAuth.apiKeyPrefix = 'Token';

let apiInstance = new FlexpriceSdk.SubscriptionsApi();
let request = new FlexpriceSdk.DtoGetUsageBySubscriptionRequest(); // DtoGetUsageBySubscriptionRequest | Usage request
apiInstance.subscriptionsUsagePost(request, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **request** | [**DtoGetUsageBySubscriptionRequest**](DtoGetUsageBySubscriptionRequest.md)| Usage request | 

### Return type

[**DtoGetUsageBySubscriptionResponse**](DtoGetUsageBySubscriptionResponse.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

