# FlexpriceSdk.EntitlementsApi

All URIs are relative to */v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**entitlementsGet**](EntitlementsApi.md#entitlementsGet) | **GET** /entitlements | Get entitlements
[**entitlementsIdDelete**](EntitlementsApi.md#entitlementsIdDelete) | **DELETE** /entitlements/{id} | Delete an entitlement
[**entitlementsIdGet**](EntitlementsApi.md#entitlementsIdGet) | **GET** /entitlements/{id} | Get an entitlement by ID
[**entitlementsIdPut**](EntitlementsApi.md#entitlementsIdPut) | **PUT** /entitlements/{id} | Update an entitlement
[**entitlementsPost**](EntitlementsApi.md#entitlementsPost) | **POST** /entitlements | Create a new entitlement
[**plansIdEntitlementsGet**](EntitlementsApi.md#plansIdEntitlementsGet) | **GET** /plans/{id}/entitlements | Get plan entitlements



## entitlementsGet

> DtoListEntitlementsResponse entitlementsGet(opts)

Get entitlements

Get entitlements with the specified filter

### Example

```javascript
import FlexpriceSdk from '@flexprice/sdk';
let defaultClient = FlexpriceSdk.ApiClient.instance;
// Configure API key authorization: ApiKeyAuth
let ApiKeyAuth = defaultClient.authentications['ApiKeyAuth'];
ApiKeyAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKeyAuth.apiKeyPrefix = 'Token';

let apiInstance = new FlexpriceSdk.EntitlementsApi();
let opts = {
  'endTime': "endTime_example", // String | 
  'expand': "expand_example", // String | 
  'featureIds': ["null"], // [String] | 
  'featureType': "featureType_example", // String | 
  'isEnabled': true, // Boolean | 
  'limit': 56, // Number | 
  'offset': 56, // Number | 
  'order': "order_example", // String | 
  'planIds': ["null"], // [String] | Specific filters for entitlements
  'sort': "sort_example", // String | 
  'startTime': "startTime_example", // String | 
  'status': "status_example" // String | 
};
apiInstance.entitlementsGet(opts, (error, data, response) => {
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
 **featureIds** | [**[String]**](String.md)|  | [optional] 
 **featureType** | **String**|  | [optional] 
 **isEnabled** | **Boolean**|  | [optional] 
 **limit** | **Number**|  | [optional] 
 **offset** | **Number**|  | [optional] 
 **order** | **String**|  | [optional] 
 **planIds** | [**[String]**](String.md)| Specific filters for entitlements | [optional] 
 **sort** | **String**|  | [optional] 
 **startTime** | **String**|  | [optional] 
 **status** | **String**|  | [optional] 

### Return type

[**DtoListEntitlementsResponse**](DtoListEntitlementsResponse.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## entitlementsIdDelete

> {String: Object} entitlementsIdDelete(id)

Delete an entitlement

Delete an entitlement

### Example

```javascript
import FlexpriceSdk from '@flexprice/sdk';
let defaultClient = FlexpriceSdk.ApiClient.instance;
// Configure API key authorization: ApiKeyAuth
let ApiKeyAuth = defaultClient.authentications['ApiKeyAuth'];
ApiKeyAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKeyAuth.apiKeyPrefix = 'Token';

let apiInstance = new FlexpriceSdk.EntitlementsApi();
let id = "id_example"; // String | Entitlement ID
apiInstance.entitlementsIdDelete(id, (error, data, response) => {
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
 **id** | **String**| Entitlement ID | 

### Return type

**{String: Object}**

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## entitlementsIdGet

> DtoEntitlementResponse entitlementsIdGet(id)

Get an entitlement by ID

Get an entitlement by ID

### Example

```javascript
import FlexpriceSdk from '@flexprice/sdk';
let defaultClient = FlexpriceSdk.ApiClient.instance;
// Configure API key authorization: ApiKeyAuth
let ApiKeyAuth = defaultClient.authentications['ApiKeyAuth'];
ApiKeyAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKeyAuth.apiKeyPrefix = 'Token';

let apiInstance = new FlexpriceSdk.EntitlementsApi();
let id = "id_example"; // String | Entitlement ID
apiInstance.entitlementsIdGet(id, (error, data, response) => {
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
 **id** | **String**| Entitlement ID | 

### Return type

[**DtoEntitlementResponse**](DtoEntitlementResponse.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## entitlementsIdPut

> DtoEntitlementResponse entitlementsIdPut(id, entitlement)

Update an entitlement

Update an entitlement with the specified configuration

### Example

```javascript
import FlexpriceSdk from '@flexprice/sdk';
let defaultClient = FlexpriceSdk.ApiClient.instance;
// Configure API key authorization: ApiKeyAuth
let ApiKeyAuth = defaultClient.authentications['ApiKeyAuth'];
ApiKeyAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKeyAuth.apiKeyPrefix = 'Token';

let apiInstance = new FlexpriceSdk.EntitlementsApi();
let id = "id_example"; // String | Entitlement ID
let entitlement = new FlexpriceSdk.DtoUpdateEntitlementRequest(); // DtoUpdateEntitlementRequest | Entitlement configuration
apiInstance.entitlementsIdPut(id, entitlement, (error, data, response) => {
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
 **id** | **String**| Entitlement ID | 
 **entitlement** | [**DtoUpdateEntitlementRequest**](DtoUpdateEntitlementRequest.md)| Entitlement configuration | 

### Return type

[**DtoEntitlementResponse**](DtoEntitlementResponse.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## entitlementsPost

> DtoEntitlementResponse entitlementsPost(entitlement)

Create a new entitlement

Create a new entitlement with the specified configuration

### Example

```javascript
import FlexpriceSdk from '@flexprice/sdk';
let defaultClient = FlexpriceSdk.ApiClient.instance;
// Configure API key authorization: ApiKeyAuth
let ApiKeyAuth = defaultClient.authentications['ApiKeyAuth'];
ApiKeyAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKeyAuth.apiKeyPrefix = 'Token';

let apiInstance = new FlexpriceSdk.EntitlementsApi();
let entitlement = new FlexpriceSdk.DtoCreateEntitlementRequest(); // DtoCreateEntitlementRequest | Entitlement configuration
apiInstance.entitlementsPost(entitlement, (error, data, response) => {
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
 **entitlement** | [**DtoCreateEntitlementRequest**](DtoCreateEntitlementRequest.md)| Entitlement configuration | 

### Return type

[**DtoEntitlementResponse**](DtoEntitlementResponse.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## plansIdEntitlementsGet

> DtoPlanResponse plansIdEntitlementsGet(id)

Get plan entitlements

Get all entitlements for a plan

### Example

```javascript
import FlexpriceSdk from '@flexprice/sdk';
let defaultClient = FlexpriceSdk.ApiClient.instance;
// Configure API key authorization: ApiKeyAuth
let ApiKeyAuth = defaultClient.authentications['ApiKeyAuth'];
ApiKeyAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKeyAuth.apiKeyPrefix = 'Token';

let apiInstance = new FlexpriceSdk.EntitlementsApi();
let id = "id_example"; // String | Plan ID
apiInstance.plansIdEntitlementsGet(id, (error, data, response) => {
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

