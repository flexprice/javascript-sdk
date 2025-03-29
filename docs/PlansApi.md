# FlexpriceSdk.PlansApi

All URIs are relative to */v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**plansGet**](PlansApi.md#plansGet) | **GET** /plans | Get plans
[**plansIdDelete**](PlansApi.md#plansIdDelete) | **DELETE** /plans/{id} | Delete a plan
[**plansIdGet**](PlansApi.md#plansIdGet) | **GET** /plans/{id} | Get a plan
[**plansIdPut**](PlansApi.md#plansIdPut) | **PUT** /plans/{id} | Update a plan
[**plansPost**](PlansApi.md#plansPost) | **POST** /plans | Create a new plan



## plansGet

> DtoListPlansResponse plansGet(opts)

Get plans

Get plans with optional filtering

### Example

```javascript
import FlexpriceSdk from '@flexprice/sdk';
let defaultClient = FlexpriceSdk.ApiClient.instance;
// Configure API key authorization: ApiKeyAuth
let ApiKeyAuth = defaultClient.authentications['ApiKeyAuth'];
ApiKeyAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKeyAuth.apiKeyPrefix = 'Token';

let apiInstance = new FlexpriceSdk.PlansApi();
let opts = {
  'endTime': "endTime_example", // String | 
  'expand': "expand_example", // String | 
  'limit': 56, // Number | 
  'offset': 56, // Number | 
  'order': "order_example", // String | 
  'planIds': ["null"], // [String] | 
  'sort': "sort_example", // String | 
  'startTime': "startTime_example", // String | 
  'status': "status_example" // String | 
};
apiInstance.plansGet(opts, (error, data, response) => {
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
 **endTime** | **String**|  | [optional] 
 **expand** | **String**|  | [optional] 
 **limit** | **Number**|  | [optional] 
 **offset** | **Number**|  | [optional] 
 **order** | **String**|  | [optional] 
 **planIds** | [**[String]**](String.md)|  | [optional] 
 **sort** | **String**|  | [optional] 
 **startTime** | **String**|  | [optional] 
 **status** | **String**|  | [optional] 

### Return type

[**DtoListPlansResponse**](DtoListPlansResponse.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## plansIdDelete

> {String: Object} plansIdDelete(id)

Delete a plan

Delete a plan by ID

### Example

```javascript
import FlexpriceSdk from '@flexprice/sdk';
let defaultClient = FlexpriceSdk.ApiClient.instance;
// Configure API key authorization: ApiKeyAuth
let ApiKeyAuth = defaultClient.authentications['ApiKeyAuth'];
ApiKeyAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKeyAuth.apiKeyPrefix = 'Token';

let apiInstance = new FlexpriceSdk.PlansApi();
let id = "id_example"; // String | Plan ID
apiInstance.plansIdDelete(id, (error, data, response) => {
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
 **id** | **String**| Plan ID | 

### Return type

**{String: Object}**

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## plansIdGet

> DtoPlanResponse plansIdGet(id)

Get a plan

Get a plan by ID

### Example

```javascript
import FlexpriceSdk from '@flexprice/sdk';
let defaultClient = FlexpriceSdk.ApiClient.instance;
// Configure API key authorization: ApiKeyAuth
let ApiKeyAuth = defaultClient.authentications['ApiKeyAuth'];
ApiKeyAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKeyAuth.apiKeyPrefix = 'Token';

let apiInstance = new FlexpriceSdk.PlansApi();
let id = "id_example"; // String | Plan ID
apiInstance.plansIdGet(id, (error, data, response) => {
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
 **id** | **String**| Plan ID | 

### Return type

[**DtoPlanResponse**](DtoPlanResponse.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## plansIdPut

> DtoPlanResponse plansIdPut(id, plan)

Update a plan

Update a plan by ID

### Example

```javascript
import FlexpriceSdk from '@flexprice/sdk';
let defaultClient = FlexpriceSdk.ApiClient.instance;
// Configure API key authorization: ApiKeyAuth
let ApiKeyAuth = defaultClient.authentications['ApiKeyAuth'];
ApiKeyAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKeyAuth.apiKeyPrefix = 'Token';

let apiInstance = new FlexpriceSdk.PlansApi();
let id = "id_example"; // String | Plan ID
let plan = new FlexpriceSdk.DtoUpdatePlanRequest(); // DtoUpdatePlanRequest | Plan update
apiInstance.plansIdPut(id, plan, (error, data, response) => {
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
 **id** | **String**| Plan ID | 
 **plan** | [**DtoUpdatePlanRequest**](DtoUpdatePlanRequest.md)| Plan update | 

### Return type

[**DtoPlanResponse**](DtoPlanResponse.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## plansPost

> DtoPlanResponse plansPost(plan)

Create a new plan

Create a new plan with the specified configuration

### Example

```javascript
import FlexpriceSdk from '@flexprice/sdk';
let defaultClient = FlexpriceSdk.ApiClient.instance;
// Configure API key authorization: ApiKeyAuth
let ApiKeyAuth = defaultClient.authentications['ApiKeyAuth'];
ApiKeyAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKeyAuth.apiKeyPrefix = 'Token';

let apiInstance = new FlexpriceSdk.PlansApi();
let plan = new FlexpriceSdk.DtoCreatePlanRequest(); // DtoCreatePlanRequest | Plan configuration
apiInstance.plansPost(plan, (error, data, response) => {
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
 **plan** | [**DtoCreatePlanRequest**](DtoCreatePlanRequest.md)| Plan configuration | 

### Return type

[**DtoPlanResponse**](DtoPlanResponse.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

