# FlexpriceSdk.EventsApi

All URIs are relative to */v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**eventsBulkPost**](EventsApi.md#eventsBulkPost) | **POST** /events/bulk | Bulk Ingest events
[**eventsPost**](EventsApi.md#eventsPost) | **POST** /events | Ingest event
[**eventsQueryPost**](EventsApi.md#eventsQueryPost) | **POST** /events/query | List raw events
[**eventsUsageMeterPost**](EventsApi.md#eventsUsageMeterPost) | **POST** /events/usage/meter | Get usage by meter
[**eventsUsagePost**](EventsApi.md#eventsUsagePost) | **POST** /events/usage | Get usage statistics



## eventsBulkPost

> {String: String} eventsBulkPost(event)

Bulk Ingest events

Ingest bulk events into the system

### Example

```javascript
import FlexpriceSdk from '@flexprice/sdk';
let defaultClient = FlexpriceSdk.ApiClient.instance;
// Configure API key authorization: ApiKeyAuth
let ApiKeyAuth = defaultClient.authentications['ApiKeyAuth'];
ApiKeyAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKeyAuth.apiKeyPrefix = 'Token';

let apiInstance = new FlexpriceSdk.EventsApi();
let event = new FlexpriceSdk.DtoBulkIngestEventRequest(); // DtoBulkIngestEventRequest | Event data
apiInstance.eventsBulkPost(event, (error, data, response) => {
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
 **event** | [**DtoBulkIngestEventRequest**](DtoBulkIngestEventRequest.md)| Event data | 

### Return type

**{String: String}**

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## eventsPost

> {String: String} eventsPost(event)

Ingest event

Ingest a new event into the system

### Example

```javascript
import FlexpriceSdk from '@flexprice/sdk';
let defaultClient = FlexpriceSdk.ApiClient.instance;
// Configure API key authorization: ApiKeyAuth
let ApiKeyAuth = defaultClient.authentications['ApiKeyAuth'];
ApiKeyAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKeyAuth.apiKeyPrefix = 'Token';

let apiInstance = new FlexpriceSdk.EventsApi();
let event = new FlexpriceSdk.DtoIngestEventRequest(); // DtoIngestEventRequest | Event data
apiInstance.eventsPost(event, (error, data, response) => {
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
 **event** | [**DtoIngestEventRequest**](DtoIngestEventRequest.md)| Event data | 

### Return type

**{String: String}**

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## eventsQueryPost

> DtoGetEventsResponse eventsQueryPost(request)

List raw events

Retrieve raw events with pagination and filtering

### Example

```javascript
import FlexpriceSdk from '@flexprice/sdk';
let defaultClient = FlexpriceSdk.ApiClient.instance;
// Configure API key authorization: ApiKeyAuth
let ApiKeyAuth = defaultClient.authentications['ApiKeyAuth'];
ApiKeyAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKeyAuth.apiKeyPrefix = 'Token';

let apiInstance = new FlexpriceSdk.EventsApi();
let request = new FlexpriceSdk.DtoGetEventsRequest(); // DtoGetEventsRequest | Request body
apiInstance.eventsQueryPost(request, (error, data, response) => {
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
 **request** | [**DtoGetEventsRequest**](DtoGetEventsRequest.md)| Request body | 

### Return type

[**DtoGetEventsResponse**](DtoGetEventsResponse.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## eventsUsageMeterPost

> DtoGetUsageResponse eventsUsageMeterPost(request)

Get usage by meter

Retrieve aggregated usage statistics using meter configuration

### Example

```javascript
import FlexpriceSdk from '@flexprice/sdk';
let defaultClient = FlexpriceSdk.ApiClient.instance;
// Configure API key authorization: ApiKeyAuth
let ApiKeyAuth = defaultClient.authentications['ApiKeyAuth'];
ApiKeyAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKeyAuth.apiKeyPrefix = 'Token';

let apiInstance = new FlexpriceSdk.EventsApi();
let request = new FlexpriceSdk.DtoGetUsageByMeterRequest(); // DtoGetUsageByMeterRequest | Request body
apiInstance.eventsUsageMeterPost(request, (error, data, response) => {
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
 **request** | [**DtoGetUsageByMeterRequest**](DtoGetUsageByMeterRequest.md)| Request body | 

### Return type

[**DtoGetUsageResponse**](DtoGetUsageResponse.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## eventsUsagePost

> DtoGetUsageResponse eventsUsagePost(request)

Get usage statistics

Retrieve aggregated usage statistics for events

### Example

```javascript
import FlexpriceSdk from '@flexprice/sdk';
let defaultClient = FlexpriceSdk.ApiClient.instance;
// Configure API key authorization: ApiKeyAuth
let ApiKeyAuth = defaultClient.authentications['ApiKeyAuth'];
ApiKeyAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKeyAuth.apiKeyPrefix = 'Token';

let apiInstance = new FlexpriceSdk.EventsApi();
let request = new FlexpriceSdk.DtoGetUsageRequest(); // DtoGetUsageRequest | Request body
apiInstance.eventsUsagePost(request, (error, data, response) => {
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
 **request** | [**DtoGetUsageRequest**](DtoGetUsageRequest.md)| Request body | 

### Return type

[**DtoGetUsageResponse**](DtoGetUsageResponse.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

