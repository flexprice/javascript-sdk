# FlexpriceClient.EnvironmentsApi

All URIs are relative to */v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**environmentsGet**](EnvironmentsApi.md#environmentsGet) | **GET** /environments | Get environments
[**environmentsIdGet**](EnvironmentsApi.md#environmentsIdGet) | **GET** /environments/{id} | Get an environment
[**environmentsIdPut**](EnvironmentsApi.md#environmentsIdPut) | **PUT** /environments/{id} | Update an environment
[**environmentsPost**](EnvironmentsApi.md#environmentsPost) | **POST** /environments | Create an environment



## environmentsGet

> DtoListEnvironmentsResponse environmentsGet(opts)

Get environments

Get environments

### Example

```javascript
import FlexpriceClient from 'flexprice-client';
let defaultClient = FlexpriceClient.ApiClient.instance;
// Configure API key authorization: ApiKeyAuth
let ApiKeyAuth = defaultClient.authentications['ApiKeyAuth'];
ApiKeyAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKeyAuth.apiKeyPrefix = 'Token';

let apiInstance = new FlexpriceClient.EnvironmentsApi();
let opts = {
  'expand': "expand_example", // String | 
  'limit': 56, // Number | 
  'offset': 56, // Number | 
  'order': "order_example", // String | 
  'sort': "sort_example", // String | 
  'status': "status_example" // String | 
};
apiInstance.environmentsGet(opts, (error, data, response) => {
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
 **expand** | **String**|  | [optional] 
 **limit** | **Number**|  | [optional] 
 **offset** | **Number**|  | [optional] 
 **order** | **String**|  | [optional] 
 **sort** | **String**|  | [optional] 
 **status** | **String**|  | [optional] 

### Return type

[**DtoListEnvironmentsResponse**](DtoListEnvironmentsResponse.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## environmentsIdGet

> DtoEnvironmentResponse environmentsIdGet(id)

Get an environment

Get an environment

### Example

```javascript
import FlexpriceClient from 'flexprice-client';
let defaultClient = FlexpriceClient.ApiClient.instance;
// Configure API key authorization: ApiKeyAuth
let ApiKeyAuth = defaultClient.authentications['ApiKeyAuth'];
ApiKeyAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKeyAuth.apiKeyPrefix = 'Token';

let apiInstance = new FlexpriceClient.EnvironmentsApi();
let id = "id_example"; // String | Environment ID
apiInstance.environmentsIdGet(id, (error, data, response) => {
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
 **id** | **String**| Environment ID | 

### Return type

[**DtoEnvironmentResponse**](DtoEnvironmentResponse.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## environmentsIdPut

> DtoEnvironmentResponse environmentsIdPut(id, environment)

Update an environment

Update an environment

### Example

```javascript
import FlexpriceClient from 'flexprice-client';
let defaultClient = FlexpriceClient.ApiClient.instance;
// Configure API key authorization: ApiKeyAuth
let ApiKeyAuth = defaultClient.authentications['ApiKeyAuth'];
ApiKeyAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKeyAuth.apiKeyPrefix = 'Token';

let apiInstance = new FlexpriceClient.EnvironmentsApi();
let id = "id_example"; // String | Environment ID
let environment = new FlexpriceClient.DtoUpdateEnvironmentRequest(); // DtoUpdateEnvironmentRequest | Environment
apiInstance.environmentsIdPut(id, environment, (error, data, response) => {
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
 **id** | **String**| Environment ID | 
 **environment** | [**DtoUpdateEnvironmentRequest**](DtoUpdateEnvironmentRequest.md)| Environment | 

### Return type

[**DtoEnvironmentResponse**](DtoEnvironmentResponse.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## environmentsPost

> DtoEnvironmentResponse environmentsPost(environment)

Create an environment

Create an environment

### Example

```javascript
import FlexpriceClient from 'flexprice-client';
let defaultClient = FlexpriceClient.ApiClient.instance;
// Configure API key authorization: ApiKeyAuth
let ApiKeyAuth = defaultClient.authentications['ApiKeyAuth'];
ApiKeyAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKeyAuth.apiKeyPrefix = 'Token';

let apiInstance = new FlexpriceClient.EnvironmentsApi();
let environment = new FlexpriceClient.DtoCreateEnvironmentRequest(); // DtoCreateEnvironmentRequest | Environment
apiInstance.environmentsPost(environment, (error, data, response) => {
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
 **environment** | [**DtoCreateEnvironmentRequest**](DtoCreateEnvironmentRequest.md)| Environment | 

### Return type

[**DtoEnvironmentResponse**](DtoEnvironmentResponse.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

