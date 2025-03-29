# FlexpriceSdk.CustomersApi

All URIs are relative to */v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**customersGet**](CustomersApi.md#customersGet) | **GET** /customers | Get customers
[**customersIdDelete**](CustomersApi.md#customersIdDelete) | **DELETE** /customers/{id} | Delete a customer
[**customersIdEntitlementsGet**](CustomersApi.md#customersIdEntitlementsGet) | **GET** /customers/{id}/entitlements | Get customer entitlements
[**customersIdGet**](CustomersApi.md#customersIdGet) | **GET** /customers/{id} | Get a customer
[**customersIdPut**](CustomersApi.md#customersIdPut) | **PUT** /customers/{id} | Update a customer
[**customersIdUsageGet**](CustomersApi.md#customersIdUsageGet) | **GET** /customers/{id}/usage | Get customer usage summary
[**customersLookupLookupKeyGet**](CustomersApi.md#customersLookupLookupKeyGet) | **GET** /customers/lookup/{lookup_key} | Get a customer by lookup key
[**customersPost**](CustomersApi.md#customersPost) | **POST** /customers | Create a customer



## customersGet

> DtoListCustomersResponse customersGet(opts)

Get customers

Get customers

### Example

```javascript
import FlexpriceSdk from '@flexprice/sdk';
let defaultClient = FlexpriceSdk.ApiClient.instance;
// Configure API key authorization: ApiKeyAuth
let ApiKeyAuth = defaultClient.authentications['ApiKeyAuth'];
ApiKeyAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKeyAuth.apiKeyPrefix = 'Token';

let apiInstance = new FlexpriceSdk.CustomersApi();
let opts = {
  'customerIds': ["null"], // [String] | 
  'email': "email_example", // String | 
  'endTime': "endTime_example", // String | 
  'expand': "expand_example", // String | 
  'externalId': "externalId_example", // String | 
  'limit': 56, // Number | 
  'offset': 56, // Number | 
  'order': "order_example", // String | 
  'sort': "sort_example", // String | 
  'startTime': "startTime_example", // String | 
  'status': "status_example" // String | 
};
apiInstance.customersGet(opts, (error, data, response) => {
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
 **customerIds** | [**[String]**](String.md)|  | [optional] 
 **email** | **String**|  | [optional] 
 **endTime** | **String**|  | [optional] 
 **expand** | **String**|  | [optional] 
 **externalId** | **String**|  | [optional] 
 **limit** | **Number**|  | [optional] 
 **offset** | **Number**|  | [optional] 
 **order** | **String**|  | [optional] 
 **sort** | **String**|  | [optional] 
 **startTime** | **String**|  | [optional] 
 **status** | **String**|  | [optional] 

### Return type

[**DtoListCustomersResponse**](DtoListCustomersResponse.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## customersIdDelete

> customersIdDelete(id)

Delete a customer

Delete a customer

### Example

```javascript
import FlexpriceSdk from '@flexprice/sdk';
let defaultClient = FlexpriceSdk.ApiClient.instance;
// Configure API key authorization: ApiKeyAuth
let ApiKeyAuth = defaultClient.authentications['ApiKeyAuth'];
ApiKeyAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKeyAuth.apiKeyPrefix = 'Token';

let apiInstance = new FlexpriceSdk.CustomersApi();
let id = "id_example"; // String | Customer ID
apiInstance.customersIdDelete(id, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| Customer ID | 

### Return type

null (empty response body)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## customersIdEntitlementsGet

> DtoCustomerEntitlementsResponse customersIdEntitlementsGet(id, opts)

Get customer entitlements

Get customer entitlements

### Example

```javascript
import FlexpriceSdk from '@flexprice/sdk';
let defaultClient = FlexpriceSdk.ApiClient.instance;
// Configure API key authorization: ApiKeyAuth
let ApiKeyAuth = defaultClient.authentications['ApiKeyAuth'];
ApiKeyAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKeyAuth.apiKeyPrefix = 'Token';

let apiInstance = new FlexpriceSdk.CustomersApi();
let id = "id_example"; // String | Customer ID
let opts = {
  'featureIds': ["null"], // [String] | 
  'subscriptionIds': ["null"] // [String] | 
};
apiInstance.customersIdEntitlementsGet(id, opts, (error, data, response) => {
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
 **id** | **String**| Customer ID | 
 **featureIds** | [**[String]**](String.md)|  | [optional] 
 **subscriptionIds** | [**[String]**](String.md)|  | [optional] 

### Return type

[**DtoCustomerEntitlementsResponse**](DtoCustomerEntitlementsResponse.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## customersIdGet

> DtoCustomerResponse customersIdGet(id)

Get a customer

Get a customer

### Example

```javascript
import FlexpriceSdk from '@flexprice/sdk';
let defaultClient = FlexpriceSdk.ApiClient.instance;
// Configure API key authorization: ApiKeyAuth
let ApiKeyAuth = defaultClient.authentications['ApiKeyAuth'];
ApiKeyAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKeyAuth.apiKeyPrefix = 'Token';

let apiInstance = new FlexpriceSdk.CustomersApi();
let id = "id_example"; // String | Customer ID
apiInstance.customersIdGet(id, (error, data, response) => {
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
 **id** | **String**| Customer ID | 

### Return type

[**DtoCustomerResponse**](DtoCustomerResponse.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## customersIdPut

> DtoCustomerResponse customersIdPut(id, customer)

Update a customer

Update a customer

### Example

```javascript
import FlexpriceSdk from '@flexprice/sdk';
let defaultClient = FlexpriceSdk.ApiClient.instance;
// Configure API key authorization: ApiKeyAuth
let ApiKeyAuth = defaultClient.authentications['ApiKeyAuth'];
ApiKeyAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKeyAuth.apiKeyPrefix = 'Token';

let apiInstance = new FlexpriceSdk.CustomersApi();
let id = "id_example"; // String | Customer ID
let customer = new FlexpriceSdk.DtoUpdateCustomerRequest(); // DtoUpdateCustomerRequest | Customer
apiInstance.customersIdPut(id, customer, (error, data, response) => {
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
 **id** | **String**| Customer ID | 
 **customer** | [**DtoUpdateCustomerRequest**](DtoUpdateCustomerRequest.md)| Customer | 

### Return type

[**DtoCustomerResponse**](DtoCustomerResponse.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## customersIdUsageGet

> DtoCustomerUsageSummaryResponse customersIdUsageGet(id, opts)

Get customer usage summary

Get customer usage summary

### Example

```javascript
import FlexpriceSdk from '@flexprice/sdk';
let defaultClient = FlexpriceSdk.ApiClient.instance;
// Configure API key authorization: ApiKeyAuth
let ApiKeyAuth = defaultClient.authentications['ApiKeyAuth'];
ApiKeyAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKeyAuth.apiKeyPrefix = 'Token';

let apiInstance = new FlexpriceSdk.CustomersApi();
let id = "id_example"; // String | Customer ID
let opts = {
  'featureIds': ["null"], // [String] | 
  'subscriptionIds': ["null"] // [String] | 
};
apiInstance.customersIdUsageGet(id, opts, (error, data, response) => {
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
 **id** | **String**| Customer ID | 
 **featureIds** | [**[String]**](String.md)|  | [optional] 
 **subscriptionIds** | [**[String]**](String.md)|  | [optional] 

### Return type

[**DtoCustomerUsageSummaryResponse**](DtoCustomerUsageSummaryResponse.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## customersLookupLookupKeyGet

> DtoCustomerResponse customersLookupLookupKeyGet(lookupKey)

Get a customer by lookup key

Get a customer by lookup key (external_id)

### Example

```javascript
import FlexpriceSdk from '@flexprice/sdk';
let defaultClient = FlexpriceSdk.ApiClient.instance;
// Configure API key authorization: ApiKeyAuth
let ApiKeyAuth = defaultClient.authentications['ApiKeyAuth'];
ApiKeyAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKeyAuth.apiKeyPrefix = 'Token';

let apiInstance = new FlexpriceSdk.CustomersApi();
let lookupKey = "lookupKey_example"; // String | Customer Lookup Key (external_id)
apiInstance.customersLookupLookupKeyGet(lookupKey, (error, data, response) => {
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
 **lookupKey** | **String**| Customer Lookup Key (external_id) | 

### Return type

[**DtoCustomerResponse**](DtoCustomerResponse.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## customersPost

> DtoCustomerResponse customersPost(customer)

Create a customer

Create a customer

### Example

```javascript
import FlexpriceSdk from '@flexprice/sdk';
let defaultClient = FlexpriceSdk.ApiClient.instance;
// Configure API key authorization: ApiKeyAuth
let ApiKeyAuth = defaultClient.authentications['ApiKeyAuth'];
ApiKeyAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKeyAuth.apiKeyPrefix = 'Token';

let apiInstance = new FlexpriceSdk.CustomersApi();
let customer = new FlexpriceSdk.DtoCreateCustomerRequest(); // DtoCreateCustomerRequest | Customer
apiInstance.customersPost(customer, (error, data, response) => {
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
 **customer** | [**DtoCreateCustomerRequest**](DtoCreateCustomerRequest.md)| Customer | 

### Return type

[**DtoCustomerResponse**](DtoCustomerResponse.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

