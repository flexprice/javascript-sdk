# FlexpriceClient.EventsApi

All URIs are relative to */v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**eventsBulkPost**](EventsApi.md#eventsBulkPost) | **POST** /events/bulk | Bulk Ingest events
[**eventsGet**](EventsApi.md#eventsGet) | **GET** /events | Get raw events
[**eventsPost**](EventsApi.md#eventsPost) | **POST** /events | Ingest event
[**eventsUsageMeterPost**](EventsApi.md#eventsUsageMeterPost) | **POST** /events/usage/meter | Get usage by meter
[**eventsUsagePost**](EventsApi.md#eventsUsagePost) | **POST** /events/usage | Get usage statistics



## eventsBulkPost

> {String: String} eventsBulkPost(event)

Bulk Ingest events

Ingest bulk events into the system

### Example

```javascript
import FlexpriceClient from 'flexprice-client';
let defaultClient = FlexpriceClient.ApiClient.instance;
// Configure API key authorization: ApiKeyAuth
let ApiKeyAuth = defaultClient.authentications['ApiKeyAuth'];
ApiKeyAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKeyAuth.apiKeyPrefix = 'Token';

let apiInstance = new FlexpriceClient.EventsApi();
let event = new FlexpriceClient.DtoBulkIngestEventRequest(); // DtoBulkIngestEventRequest | Event data
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


## eventsGet

> DtoGetEventsResponse eventsGet(opts)

Get raw events

Retrieve raw events with pagination and filtering

### Example

```javascript
import FlexpriceClient from 'flexprice-client';
let defaultClient = FlexpriceClient.ApiClient.instance;
// Configure API key authorization: ApiKeyAuth
let ApiKeyAuth = defaultClient.authentications['ApiKeyAuth'];
ApiKeyAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKeyAuth.apiKeyPrefix = 'Token';

let apiInstance = new FlexpriceClient.EventsApi();
let opts = {
  'externalCustomerId': "externalCustomerId_example", // String | External Customer ID
  'eventName': "eventName_example", // String | Event Name
  'startTime': "startTime_example", // String | Start Time (RFC3339)
  'endTime': "endTime_example", // String | End Time (RFC3339)
  'iterFirstKey': "iterFirstKey_example", // String | Iter First Key (unix_timestamp_nanoseconds::event_id)
  'iterLastKey': "iterLastKey_example", // String | Iter Last Key (unix_timestamp_nanoseconds::event_id)
  'pageSize': 56 // Number | Page Size (1-50)
};
apiInstance.eventsGet(opts, (error, data, response) => {
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
 **externalCustomerId** | **String**| External Customer ID | [optional] 
 **eventName** | **String**| Event Name | [optional] 
 **startTime** | **String**| Start Time (RFC3339) | [optional] 
 **endTime** | **String**| End Time (RFC3339) | [optional] 
 **iterFirstKey** | **String**| Iter First Key (unix_timestamp_nanoseconds::event_id) | [optional] 
 **iterLastKey** | **String**| Iter Last Key (unix_timestamp_nanoseconds::event_id) | [optional] 
 **pageSize** | **Number**| Page Size (1-50) | [optional] 

### Return type

[**DtoGetEventsResponse**](DtoGetEventsResponse.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## eventsPost

> {String: String} eventsPost(event)

Ingest event

Ingest a new event into the system

### Example

```javascript
import FlexpriceClient from 'flexprice-client';
let defaultClient = FlexpriceClient.ApiClient.instance;
// Configure API key authorization: ApiKeyAuth
let ApiKeyAuth = defaultClient.authentications['ApiKeyAuth'];
ApiKeyAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKeyAuth.apiKeyPrefix = 'Token';

let apiInstance = new FlexpriceClient.EventsApi();
let event = new FlexpriceClient.DtoIngestEventRequest(); // DtoIngestEventRequest | Event data
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


## eventsUsageMeterPost

> DtoGetUsageResponse eventsUsageMeterPost(request)

Get usage by meter

Retrieve aggregated usage statistics using meter configuration

### Example

```javascript
import FlexpriceClient from 'flexprice-client';
let defaultClient = FlexpriceClient.ApiClient.instance;
// Configure API key authorization: ApiKeyAuth
let ApiKeyAuth = defaultClient.authentications['ApiKeyAuth'];
ApiKeyAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKeyAuth.apiKeyPrefix = 'Token';

let apiInstance = new FlexpriceClient.EventsApi();
let request = new FlexpriceClient.DtoGetUsageByMeterRequest(); // DtoGetUsageByMeterRequest | Request body
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
import FlexpriceClient from 'flexprice-client';
let defaultClient = FlexpriceClient.ApiClient.instance;
// Configure API key authorization: ApiKeyAuth
let ApiKeyAuth = defaultClient.authentications['ApiKeyAuth'];
ApiKeyAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKeyAuth.apiKeyPrefix = 'Token';

let apiInstance = new FlexpriceClient.EventsApi();
let request = new FlexpriceClient.DtoGetUsageRequest(); // DtoGetUsageRequest | Request body
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

