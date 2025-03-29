# FlexpriceClient.PaymentsApi

All URIs are relative to */v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**paymentsGet**](PaymentsApi.md#paymentsGet) | **GET** /payments | List payments
[**paymentsIdDelete**](PaymentsApi.md#paymentsIdDelete) | **DELETE** /payments/{id} | Delete a payment
[**paymentsIdGet**](PaymentsApi.md#paymentsIdGet) | **GET** /payments/{id} | Get a payment by ID
[**paymentsIdProcessPost**](PaymentsApi.md#paymentsIdProcessPost) | **POST** /payments/{id}/process | Process a payment
[**paymentsIdPut**](PaymentsApi.md#paymentsIdPut) | **PUT** /payments/{id} | Update a payment
[**paymentsPost**](PaymentsApi.md#paymentsPost) | **POST** /payments | Create a new payment



## paymentsGet

> DtoListPaymentsResponse paymentsGet(opts)

List payments

List payments with the specified filter

### Example

```javascript
import FlexpriceClient from 'flexprice-client';
let defaultClient = FlexpriceClient.ApiClient.instance;
// Configure API key authorization: ApiKeyAuth
let ApiKeyAuth = defaultClient.authentications['ApiKeyAuth'];
ApiKeyAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKeyAuth.apiKeyPrefix = 'Token';

let apiInstance = new FlexpriceClient.PaymentsApi();
let opts = {
  'currency': "currency_example", // String | 
  'destinationId': "destinationId_example", // String | 
  'destinationType': "destinationType_example", // String | 
  'endTime': "endTime_example", // String | 
  'expand': "expand_example", // String | 
  'limit': 56, // Number | 
  'offset': 56, // Number | 
  'order': "order_example", // String | 
  'paymentGateway': "paymentGateway_example", // String | 
  'paymentIds': ["null"], // [String] | 
  'paymentMethodType': "paymentMethodType_example", // String | 
  'paymentStatus': "paymentStatus_example", // String | 
  'sort': "sort_example", // String | 
  'startTime': "startTime_example", // String | 
  'status': "status_example" // String | 
};
apiInstance.paymentsGet(opts, (error, data, response) => {
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
 **currency** | **String**|  | [optional] 
 **destinationId** | **String**|  | [optional] 
 **destinationType** | **String**|  | [optional] 
 **endTime** | **String**|  | [optional] 
 **expand** | **String**|  | [optional] 
 **limit** | **Number**|  | [optional] 
 **offset** | **Number**|  | [optional] 
 **order** | **String**|  | [optional] 
 **paymentGateway** | **String**|  | [optional] 
 **paymentIds** | [**[String]**](String.md)|  | [optional] 
 **paymentMethodType** | **String**|  | [optional] 
 **paymentStatus** | **String**|  | [optional] 
 **sort** | **String**|  | [optional] 
 **startTime** | **String**|  | [optional] 
 **status** | **String**|  | [optional] 

### Return type

[**DtoListPaymentsResponse**](DtoListPaymentsResponse.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## paymentsIdDelete

> {String: Object} paymentsIdDelete(id)

Delete a payment

Delete a payment

### Example

```javascript
import FlexpriceClient from 'flexprice-client';
let defaultClient = FlexpriceClient.ApiClient.instance;
// Configure API key authorization: ApiKeyAuth
let ApiKeyAuth = defaultClient.authentications['ApiKeyAuth'];
ApiKeyAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKeyAuth.apiKeyPrefix = 'Token';

let apiInstance = new FlexpriceClient.PaymentsApi();
let id = "id_example"; // String | Payment ID
apiInstance.paymentsIdDelete(id, (error, data, response) => {
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
 **id** | **String**| Payment ID | 

### Return type

**{String: Object}**

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## paymentsIdGet

> DtoPaymentResponse paymentsIdGet(id)

Get a payment by ID

Get a payment by ID

### Example

```javascript
import FlexpriceClient from 'flexprice-client';
let defaultClient = FlexpriceClient.ApiClient.instance;
// Configure API key authorization: ApiKeyAuth
let ApiKeyAuth = defaultClient.authentications['ApiKeyAuth'];
ApiKeyAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKeyAuth.apiKeyPrefix = 'Token';

let apiInstance = new FlexpriceClient.PaymentsApi();
let id = "id_example"; // String | Payment ID
apiInstance.paymentsIdGet(id, (error, data, response) => {
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
 **id** | **String**| Payment ID | 

### Return type

[**DtoPaymentResponse**](DtoPaymentResponse.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## paymentsIdProcessPost

> DtoPaymentResponse paymentsIdProcessPost(id)

Process a payment

Process a payment

### Example

```javascript
import FlexpriceClient from 'flexprice-client';
let defaultClient = FlexpriceClient.ApiClient.instance;
// Configure API key authorization: ApiKeyAuth
let ApiKeyAuth = defaultClient.authentications['ApiKeyAuth'];
ApiKeyAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKeyAuth.apiKeyPrefix = 'Token';

let apiInstance = new FlexpriceClient.PaymentsApi();
let id = "id_example"; // String | Payment ID
apiInstance.paymentsIdProcessPost(id, (error, data, response) => {
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
 **id** | **String**| Payment ID | 

### Return type

[**DtoPaymentResponse**](DtoPaymentResponse.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## paymentsIdPut

> DtoPaymentResponse paymentsIdPut(id, payment)

Update a payment

Update a payment with the specified configuration

### Example

```javascript
import FlexpriceClient from 'flexprice-client';
let defaultClient = FlexpriceClient.ApiClient.instance;
// Configure API key authorization: ApiKeyAuth
let ApiKeyAuth = defaultClient.authentications['ApiKeyAuth'];
ApiKeyAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKeyAuth.apiKeyPrefix = 'Token';

let apiInstance = new FlexpriceClient.PaymentsApi();
let id = "id_example"; // String | Payment ID
let payment = new FlexpriceClient.DtoUpdatePaymentRequest(); // DtoUpdatePaymentRequest | Payment configuration
apiInstance.paymentsIdPut(id, payment, (error, data, response) => {
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
 **id** | **String**| Payment ID | 
 **payment** | [**DtoUpdatePaymentRequest**](DtoUpdatePaymentRequest.md)| Payment configuration | 

### Return type

[**DtoPaymentResponse**](DtoPaymentResponse.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## paymentsPost

> DtoPaymentResponse paymentsPost(payment)

Create a new payment

Create a new payment with the specified configuration

### Example

```javascript
import FlexpriceClient from 'flexprice-client';
let defaultClient = FlexpriceClient.ApiClient.instance;
// Configure API key authorization: ApiKeyAuth
let ApiKeyAuth = defaultClient.authentications['ApiKeyAuth'];
ApiKeyAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKeyAuth.apiKeyPrefix = 'Token';

let apiInstance = new FlexpriceClient.PaymentsApi();
let payment = new FlexpriceClient.DtoCreatePaymentRequest(); // DtoCreatePaymentRequest | Payment configuration
apiInstance.paymentsPost(payment, (error, data, response) => {
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
 **payment** | [**DtoCreatePaymentRequest**](DtoCreatePaymentRequest.md)| Payment configuration | 

### Return type

[**DtoPaymentResponse**](DtoPaymentResponse.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

