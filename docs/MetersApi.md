# FlexpriceSdk.MetersApi

All URIs are relative to */v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**metersGet**](MetersApi.md#metersGet) | **GET** /meters | List meters
[**metersIdDelete**](MetersApi.md#metersIdDelete) | **DELETE** /meters/{id} | Delete meter
[**metersIdDisablePost**](MetersApi.md#metersIdDisablePost) | **POST** /meters/{id}/disable | Disable meter [TODO: Deprecate]
[**metersIdGet**](MetersApi.md#metersIdGet) | **GET** /meters/{id} | Get meter
[**metersIdPut**](MetersApi.md#metersIdPut) | **PUT** /meters/{id} | Update meter
[**metersPost**](MetersApi.md#metersPost) | **POST** /meters | Create meter



## metersGet

> [DtoMeterResponse] metersGet(opts)

List meters

Get all meters

### Example

```javascript
import FlexpriceSdk from '@flexprice/sdk';
let defaultClient = FlexpriceSdk.ApiClient.instance;
// Configure API key authorization: ApiKeyAuth
let ApiKeyAuth = defaultClient.authentications['ApiKeyAuth'];
ApiKeyAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKeyAuth.apiKeyPrefix = 'Token';

let apiInstance = new FlexpriceSdk.MetersApi();
let opts = {
  'endTime': "endTime_example", // String | 
  'eventName': "eventName_example", // String | 
  'expand': "expand_example", // String | 
  'limit': 56, // Number | 
  'meterIds': ["null"], // [String] | 
  'offset': 56, // Number | 
  'order': "order_example", // String | 
  'sort': "sort_example", // String | 
  'startTime': "startTime_example", // String | 
  'status': "status_example" // String | 
};
apiInstance.metersGet(opts, (error, data, response) => {
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
 **eventName** | **String**|  | [optional] 
 **expand** | **String**|  | [optional] 
 **limit** | **Number**|  | [optional] 
 **meterIds** | [**[String]**](String.md)|  | [optional] 
 **offset** | **Number**|  | [optional] 
 **order** | **String**|  | [optional] 
 **sort** | **String**|  | [optional] 
 **startTime** | **String**|  | [optional] 
 **status** | **String**|  | [optional] 

### Return type

[**[DtoMeterResponse]**](DtoMeterResponse.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## metersIdDelete

> {String: String} metersIdDelete(id)

Delete meter

Delete an existing meter

### Example

```javascript
import FlexpriceSdk from '@flexprice/sdk';
let defaultClient = FlexpriceSdk.ApiClient.instance;
// Configure API key authorization: ApiKeyAuth
let ApiKeyAuth = defaultClient.authentications['ApiKeyAuth'];
ApiKeyAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKeyAuth.apiKeyPrefix = 'Token';

let apiInstance = new FlexpriceSdk.MetersApi();
let id = "id_example"; // String | Meter ID
apiInstance.metersIdDelete(id, (error, data, response) => {
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
 **id** | **String**| Meter ID | 

### Return type

**{String: String}**

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## metersIdDisablePost

> {String: String} metersIdDisablePost(id)

Disable meter [TODO: Deprecate]

Disable an existing meter

### Example

```javascript
import FlexpriceSdk from '@flexprice/sdk';
let defaultClient = FlexpriceSdk.ApiClient.instance;
// Configure API key authorization: ApiKeyAuth
let ApiKeyAuth = defaultClient.authentications['ApiKeyAuth'];
ApiKeyAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKeyAuth.apiKeyPrefix = 'Token';

let apiInstance = new FlexpriceSdk.MetersApi();
let id = "id_example"; // String | Meter ID
apiInstance.metersIdDisablePost(id, (error, data, response) => {
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
 **id** | **String**| Meter ID | 

### Return type

**{String: String}**

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## metersIdGet

> DtoMeterResponse metersIdGet(id)

Get meter

Get a specific meter by ID

### Example

```javascript
import FlexpriceSdk from '@flexprice/sdk';
let defaultClient = FlexpriceSdk.ApiClient.instance;
// Configure API key authorization: ApiKeyAuth
let ApiKeyAuth = defaultClient.authentications['ApiKeyAuth'];
ApiKeyAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKeyAuth.apiKeyPrefix = 'Token';

let apiInstance = new FlexpriceSdk.MetersApi();
let id = "id_example"; // String | Meter ID
apiInstance.metersIdGet(id, (error, data, response) => {
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
 **id** | **String**| Meter ID | 

### Return type

[**DtoMeterResponse**](DtoMeterResponse.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## metersIdPut

> DtoMeterResponse metersIdPut(id, meter)

Update meter

Update an existing meter

### Example

```javascript
import FlexpriceSdk from '@flexprice/sdk';
let defaultClient = FlexpriceSdk.ApiClient.instance;
// Configure API key authorization: ApiKeyAuth
let ApiKeyAuth = defaultClient.authentications['ApiKeyAuth'];
ApiKeyAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKeyAuth.apiKeyPrefix = 'Token';

let apiInstance = new FlexpriceSdk.MetersApi();
let id = "id_example"; // String | Meter ID
let meter = new FlexpriceSdk.DtoUpdateMeterRequest(); // DtoUpdateMeterRequest | Meter configuration
apiInstance.metersIdPut(id, meter, (error, data, response) => {
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
 **id** | **String**| Meter ID | 
 **meter** | [**DtoUpdateMeterRequest**](DtoUpdateMeterRequest.md)| Meter configuration | 

### Return type

[**DtoMeterResponse**](DtoMeterResponse.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## metersPost

> DtoMeterResponse metersPost(meter)

Create meter

Create a new meter with the specified configuration

### Example

```javascript
import FlexpriceSdk from '@flexprice/sdk';
let defaultClient = FlexpriceSdk.ApiClient.instance;
// Configure API key authorization: ApiKeyAuth
let ApiKeyAuth = defaultClient.authentications['ApiKeyAuth'];
ApiKeyAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKeyAuth.apiKeyPrefix = 'Token';

let apiInstance = new FlexpriceSdk.MetersApi();
let meter = new FlexpriceSdk.DtoCreateMeterRequest(); // DtoCreateMeterRequest | Meter configuration
apiInstance.metersPost(meter, (error, data, response) => {
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
 **meter** | [**DtoCreateMeterRequest**](DtoCreateMeterRequest.md)| Meter configuration | 

### Return type

[**DtoMeterResponse**](DtoMeterResponse.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

