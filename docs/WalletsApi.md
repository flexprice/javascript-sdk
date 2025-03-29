# FlexpriceClient.WalletsApi

All URIs are relative to */v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**customersIdWalletsGet**](WalletsApi.md#customersIdWalletsGet) | **GET** /customers/{id}/wallets | Get wallets by customer ID
[**walletsIdBalanceRealTimeGet**](WalletsApi.md#walletsIdBalanceRealTimeGet) | **GET** /wallets/{id}/balance/real-time | Get wallet balance
[**walletsIdGet**](WalletsApi.md#walletsIdGet) | **GET** /wallets/{id} | Get wallet by ID
[**walletsIdPut**](WalletsApi.md#walletsIdPut) | **PUT** /wallets/{id} | Update a wallet
[**walletsIdTerminatePost**](WalletsApi.md#walletsIdTerminatePost) | **POST** /wallets/{id}/terminate | Terminate a wallet
[**walletsIdTopUpPost**](WalletsApi.md#walletsIdTopUpPost) | **POST** /wallets/{id}/top-up | Top up wallet
[**walletsIdTransactionsGet**](WalletsApi.md#walletsIdTransactionsGet) | **GET** /wallets/{id}/transactions | Get wallet transactions
[**walletsPost**](WalletsApi.md#walletsPost) | **POST** /wallets | Create a new wallet



## customersIdWalletsGet

> [DtoWalletResponse] customersIdWalletsGet(id)

Get wallets by customer ID

Get all wallets for a customer

### Example

```javascript
import FlexpriceClient from 'flexprice-client';
let defaultClient = FlexpriceClient.ApiClient.instance;
// Configure API key authorization: ApiKeyAuth
let ApiKeyAuth = defaultClient.authentications['ApiKeyAuth'];
ApiKeyAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKeyAuth.apiKeyPrefix = 'Token';

let apiInstance = new FlexpriceClient.WalletsApi();
let id = "id_example"; // String | Customer ID
apiInstance.customersIdWalletsGet(id, (error, data, response) => {
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

[**[DtoWalletResponse]**](DtoWalletResponse.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## walletsIdBalanceRealTimeGet

> DtoWalletBalanceResponse walletsIdBalanceRealTimeGet(id)

Get wallet balance

Get real-time balance of a wallet

### Example

```javascript
import FlexpriceClient from 'flexprice-client';
let defaultClient = FlexpriceClient.ApiClient.instance;
// Configure API key authorization: ApiKeyAuth
let ApiKeyAuth = defaultClient.authentications['ApiKeyAuth'];
ApiKeyAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKeyAuth.apiKeyPrefix = 'Token';

let apiInstance = new FlexpriceClient.WalletsApi();
let id = "id_example"; // String | Wallet ID
apiInstance.walletsIdBalanceRealTimeGet(id, (error, data, response) => {
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
 **id** | **String**| Wallet ID | 

### Return type

[**DtoWalletBalanceResponse**](DtoWalletBalanceResponse.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## walletsIdGet

> DtoWalletResponse walletsIdGet(id)

Get wallet by ID

Get a wallet by its ID

### Example

```javascript
import FlexpriceClient from 'flexprice-client';
let defaultClient = FlexpriceClient.ApiClient.instance;
// Configure API key authorization: ApiKeyAuth
let ApiKeyAuth = defaultClient.authentications['ApiKeyAuth'];
ApiKeyAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKeyAuth.apiKeyPrefix = 'Token';

let apiInstance = new FlexpriceClient.WalletsApi();
let id = "id_example"; // String | Wallet ID
apiInstance.walletsIdGet(id, (error, data, response) => {
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
 **id** | **String**| Wallet ID | 

### Return type

[**DtoWalletResponse**](DtoWalletResponse.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## walletsIdPut

> DtoWalletResponse walletsIdPut(id, request)

Update a wallet

Update a wallet&#39;s details including auto top-up configuration

### Example

```javascript
import FlexpriceClient from 'flexprice-client';

let apiInstance = new FlexpriceClient.WalletsApi();
let id = "id_example"; // String | Wallet ID
let request = new FlexpriceClient.DtoUpdateWalletRequest(); // DtoUpdateWalletRequest | Update wallet request
apiInstance.walletsIdPut(id, request, (error, data, response) => {
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
 **id** | **String**| Wallet ID | 
 **request** | [**DtoUpdateWalletRequest**](DtoUpdateWalletRequest.md)| Update wallet request | 

### Return type

[**DtoWalletResponse**](DtoWalletResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## walletsIdTerminatePost

> DtoWalletResponse walletsIdTerminatePost(id)

Terminate a wallet

Terminates a wallet by closing it and debiting remaining balance

### Example

```javascript
import FlexpriceClient from 'flexprice-client';

let apiInstance = new FlexpriceClient.WalletsApi();
let id = "id_example"; // String | Wallet ID
apiInstance.walletsIdTerminatePost(id, (error, data, response) => {
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
 **id** | **String**| Wallet ID | 

### Return type

[**DtoWalletResponse**](DtoWalletResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## walletsIdTopUpPost

> DtoWalletResponse walletsIdTopUpPost(id, request)

Top up wallet

Add credits to a wallet

### Example

```javascript
import FlexpriceClient from 'flexprice-client';
let defaultClient = FlexpriceClient.ApiClient.instance;
// Configure API key authorization: ApiKeyAuth
let ApiKeyAuth = defaultClient.authentications['ApiKeyAuth'];
ApiKeyAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKeyAuth.apiKeyPrefix = 'Token';

let apiInstance = new FlexpriceClient.WalletsApi();
let id = "id_example"; // String | Wallet ID
let request = new FlexpriceClient.DtoTopUpWalletRequest(); // DtoTopUpWalletRequest | Top up request
apiInstance.walletsIdTopUpPost(id, request, (error, data, response) => {
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
 **id** | **String**| Wallet ID | 
 **request** | [**DtoTopUpWalletRequest**](DtoTopUpWalletRequest.md)| Top up request | 

### Return type

[**DtoWalletResponse**](DtoWalletResponse.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## walletsIdTransactionsGet

> DtoListWalletTransactionsResponse walletsIdTransactionsGet(id, opts)

Get wallet transactions

Get transactions for a wallet with pagination

### Example

```javascript
import FlexpriceClient from 'flexprice-client';
let defaultClient = FlexpriceClient.ApiClient.instance;
// Configure API key authorization: ApiKeyAuth
let ApiKeyAuth = defaultClient.authentications['ApiKeyAuth'];
ApiKeyAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKeyAuth.apiKeyPrefix = 'Token';

let apiInstance = new FlexpriceClient.WalletsApi();
let id = "id_example"; // String | Wallet ID
let opts = {
  'creditsAvailableGt': 3.4, // Number | 
  'endTime': "endTime_example", // String | 
  'expand': "expand_example", // String | 
  'expiryDateAfter': "expiryDateAfter_example", // String | 
  'expiryDateBefore': "expiryDateBefore_example", // String | 
  'id2': "id_example", // String | 
  'limit': 56, // Number | 
  'offset': 56, // Number | 
  'order': "order_example", // String | 
  'referenceId': "referenceId_example", // String | 
  'referenceType': "referenceType_example", // String | 
  'sort': "sort_example", // String | 
  'startTime': "startTime_example", // String | 
  'status': "status_example", // String | 
  'transactionReason': "transactionReason_example", // String | 
  'transactionStatus': "transactionStatus_example", // String | 
  'type': "type_example" // String | 
};
apiInstance.walletsIdTransactionsGet(id, opts, (error, data, response) => {
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
 **id** | **String**| Wallet ID | 
 **creditsAvailableGt** | **Number**|  | [optional] 
 **endTime** | **String**|  | [optional] 
 **expand** | **String**|  | [optional] 
 **expiryDateAfter** | **String**|  | [optional] 
 **expiryDateBefore** | **String**|  | [optional] 
 **id2** | **String**|  | [optional] 
 **limit** | **Number**|  | [optional] 
 **offset** | **Number**|  | [optional] 
 **order** | **String**|  | [optional] 
 **referenceId** | **String**|  | [optional] 
 **referenceType** | **String**|  | [optional] 
 **sort** | **String**|  | [optional] 
 **startTime** | **String**|  | [optional] 
 **status** | **String**|  | [optional] 
 **transactionReason** | **String**|  | [optional] 
 **transactionStatus** | **String**|  | [optional] 
 **type** | **String**|  | [optional] 

### Return type

[**DtoListWalletTransactionsResponse**](DtoListWalletTransactionsResponse.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## walletsPost

> DtoWalletResponse walletsPost(request)

Create a new wallet

Create a new wallet for a customer

### Example

```javascript
import FlexpriceClient from 'flexprice-client';
let defaultClient = FlexpriceClient.ApiClient.instance;
// Configure API key authorization: ApiKeyAuth
let ApiKeyAuth = defaultClient.authentications['ApiKeyAuth'];
ApiKeyAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKeyAuth.apiKeyPrefix = 'Token';

let apiInstance = new FlexpriceClient.WalletsApi();
let request = new FlexpriceClient.DtoCreateWalletRequest(); // DtoCreateWalletRequest | Create wallet request
apiInstance.walletsPost(request, (error, data, response) => {
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
 **request** | [**DtoCreateWalletRequest**](DtoCreateWalletRequest.md)| Create wallet request | 

### Return type

[**DtoWalletResponse**](DtoWalletResponse.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

