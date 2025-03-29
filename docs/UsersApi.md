# FlexpriceSdk.UsersApi

All URIs are relative to */v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**usersMeGet**](UsersApi.md#usersMeGet) | **GET** /users/me | Get user info



## usersMeGet

> DtoUserResponse usersMeGet()

Get user info

Get the current user&#39;s information

### Example

```javascript
import FlexpriceSdk from '@flexprice/sdk';
let defaultClient = FlexpriceSdk.ApiClient.instance;
// Configure API key authorization: ApiKeyAuth
let ApiKeyAuth = defaultClient.authentications['ApiKeyAuth'];
ApiKeyAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKeyAuth.apiKeyPrefix = 'Token';

let apiInstance = new FlexpriceSdk.UsersApi();
apiInstance.usersMeGet((error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

This endpoint does not need any parameter.

### Return type

[**DtoUserResponse**](DtoUserResponse.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

