# FlexpriceClient.PricesApi

All URIs are relative to */v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**pricesGet**](PricesApi.md#pricesGet) | **GET** /prices | Get prices
[**pricesIdDelete**](PricesApi.md#pricesIdDelete) | **DELETE** /prices/{id} | Delete a price
[**pricesIdGet**](PricesApi.md#pricesIdGet) | **GET** /prices/{id} | Get a price by ID
[**pricesIdPut**](PricesApi.md#pricesIdPut) | **PUT** /prices/{id} | Update a price
[**pricesPost**](PricesApi.md#pricesPost) | **POST** /prices | Create a new price



## pricesGet

> DtoListPricesResponse pricesGet(opts)

Get prices

Get prices with the specified filter

### Example

```javascript
import FlexpriceClient from 'flexprice-client';
let defaultClient = FlexpriceClient.ApiClient.instance;
// Configure API key authorization: ApiKeyAuth
let ApiKeyAuth = defaultClient.authentications['ApiKeyAuth'];
ApiKeyAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKeyAuth.apiKeyPrefix = 'Token';

let apiInstance = new FlexpriceClient.PricesApi();
let opts = {
  'endTime': "endTime_example", // String | 
  'expand': "expand_example", // String | 
  'limit': 56, // Number | 
  'offset': 56, // Number | 
  'order': "order_example", // String | 
  'planIds': ["null"], // [String] | 
  'priceIds': ["null"], // [String] | 
  'sort': "sort_example", // String | 
  'startTime': "startTime_example", // String | 
  'status': "status_example" // String | 
};
apiInstance.pricesGet(opts, (error, data, response) => {
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
 **priceIds** | [**[String]**](String.md)|  | [optional] 
 **sort** | **String**|  | [optional] 
 **startTime** | **String**|  | [optional] 
 **status** | **String**|  | [optional] 

### Return type

[**DtoListPricesResponse**](DtoListPricesResponse.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## pricesIdDelete

> {String: Object} pricesIdDelete(id)

Delete a price

Delete a price

### Example

```javascript
import FlexpriceClient from 'flexprice-client';
let defaultClient = FlexpriceClient.ApiClient.instance;
// Configure API key authorization: ApiKeyAuth
let ApiKeyAuth = defaultClient.authentications['ApiKeyAuth'];
ApiKeyAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKeyAuth.apiKeyPrefix = 'Token';

let apiInstance = new FlexpriceClient.PricesApi();
let id = "id_example"; // String | Price ID
apiInstance.pricesIdDelete(id, (error, data, response) => {
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
 **id** | **String**| Price ID | 

### Return type

**{String: Object}**

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## pricesIdGet

> DtoPriceResponse pricesIdGet(id)

Get a price by ID

Get a price by ID

### Example

```javascript
import FlexpriceClient from 'flexprice-client';
let defaultClient = FlexpriceClient.ApiClient.instance;
// Configure API key authorization: ApiKeyAuth
let ApiKeyAuth = defaultClient.authentications['ApiKeyAuth'];
ApiKeyAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKeyAuth.apiKeyPrefix = 'Token';

let apiInstance = new FlexpriceClient.PricesApi();
let id = "id_example"; // String | Price ID
apiInstance.pricesIdGet(id, (error, data, response) => {
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
 **id** | **String**| Price ID | 

### Return type

[**DtoPriceResponse**](DtoPriceResponse.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## pricesIdPut

> DtoPriceResponse pricesIdPut(id, price)

Update a price

Update a price with the specified configuration

### Example

```javascript
import FlexpriceClient from 'flexprice-client';
let defaultClient = FlexpriceClient.ApiClient.instance;
// Configure API key authorization: ApiKeyAuth
let ApiKeyAuth = defaultClient.authentications['ApiKeyAuth'];
ApiKeyAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKeyAuth.apiKeyPrefix = 'Token';

let apiInstance = new FlexpriceClient.PricesApi();
let id = "id_example"; // String | Price ID
let price = new FlexpriceClient.DtoUpdatePriceRequest(); // DtoUpdatePriceRequest | Price configuration
apiInstance.pricesIdPut(id, price, (error, data, response) => {
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
 **id** | **String**| Price ID | 
 **price** | [**DtoUpdatePriceRequest**](DtoUpdatePriceRequest.md)| Price configuration | 

### Return type

[**DtoPriceResponse**](DtoPriceResponse.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## pricesPost

> DtoPriceResponse pricesPost(price)

Create a new price

Create a new price with the specified configuration

### Example

```javascript
import FlexpriceClient from 'flexprice-client';
let defaultClient = FlexpriceClient.ApiClient.instance;
// Configure API key authorization: ApiKeyAuth
let ApiKeyAuth = defaultClient.authentications['ApiKeyAuth'];
ApiKeyAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKeyAuth.apiKeyPrefix = 'Token';

let apiInstance = new FlexpriceClient.PricesApi();
let price = new FlexpriceClient.DtoCreatePriceRequest(); // DtoCreatePriceRequest | Price configuration
apiInstance.pricesPost(price, (error, data, response) => {
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
 **price** | [**DtoCreatePriceRequest**](DtoCreatePriceRequest.md)| Price configuration | 

### Return type

[**DtoPriceResponse**](DtoPriceResponse.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

