# FlexpriceSdk.SecretsApi

All URIs are relative to */v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**secretsApiKeysGet**](SecretsApi.md#secretsApiKeysGet) | **GET** /secrets/api/keys | List API keys
[**secretsApiKeysIdDelete**](SecretsApi.md#secretsApiKeysIdDelete) | **DELETE** /secrets/api/keys/{id} | Delete an API key
[**secretsApiKeysPost**](SecretsApi.md#secretsApiKeysPost) | **POST** /secrets/api/keys | Create a new API key



## secretsApiKeysGet

> DtoListSecretsResponse secretsApiKeysGet(opts)

List API keys

Get a paginated list of API keys

### Example

```javascript
import FlexpriceSdk from '@flexprice/sdk';

let apiInstance = new FlexpriceSdk.SecretsApi();
let opts = {
  'limit': 56, // Number | Limit
  'offset': 56, // Number | Offset
  'status': "status_example" // String | Status (published/archived)
};
apiInstance.secretsApiKeysGet(opts, (error, data, response) => {
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
 **limit** | **Number**| Limit | [optional] 
 **offset** | **Number**| Offset | [optional] 
 **status** | **String**| Status (published/archived) | [optional] 

### Return type

[**DtoListSecretsResponse**](DtoListSecretsResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## secretsApiKeysIdDelete

> secretsApiKeysIdDelete(id)

Delete an API key

Delete an API key by ID

### Example

```javascript
import FlexpriceSdk from '@flexprice/sdk';

let apiInstance = new FlexpriceSdk.SecretsApi();
let id = "id_example"; // String | API key ID
apiInstance.secretsApiKeysIdDelete(id, (error, data, response) => {
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
 **id** | **String**| API key ID | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## secretsApiKeysPost

> DtoCreateAPIKeyResponse secretsApiKeysPost(request)

Create a new API key

Create a new API key with the specified type and permissions

### Example

```javascript
import FlexpriceSdk from '@flexprice/sdk';

let apiInstance = new FlexpriceSdk.SecretsApi();
let request = new FlexpriceSdk.DtoCreateAPIKeyRequest(); // DtoCreateAPIKeyRequest | API key creation request
apiInstance.secretsApiKeysPost(request, (error, data, response) => {
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
 **request** | [**DtoCreateAPIKeyRequest**](DtoCreateAPIKeyRequest.md)| API key creation request | 

### Return type

[**DtoCreateAPIKeyResponse**](DtoCreateAPIKeyResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

