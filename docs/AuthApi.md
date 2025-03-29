# FlexpriceSdk.AuthApi

All URIs are relative to */v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**authLoginPost**](AuthApi.md#authLoginPost) | **POST** /auth/login | Login
[**authSignupPost**](AuthApi.md#authSignupPost) | **POST** /auth/signup | Sign up



## authLoginPost

> DtoAuthResponse authLoginPost(login)

Login

Login a user

### Example

```javascript
import FlexpriceSdk from '@flexprice/sdk';

let apiInstance = new FlexpriceSdk.AuthApi();
let login = new FlexpriceSdk.DtoLoginRequest(); // DtoLoginRequest | Login request
apiInstance.authLoginPost(login, (error, data, response) => {
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
 **login** | [**DtoLoginRequest**](DtoLoginRequest.md)| Login request | 

### Return type

[**DtoAuthResponse**](DtoAuthResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## authSignupPost

> DtoAuthResponse authSignupPost(signup)

Sign up

Sign up a new user

### Example

```javascript
import FlexpriceSdk from '@flexprice/sdk';

let apiInstance = new FlexpriceSdk.AuthApi();
let signup = new FlexpriceSdk.DtoSignUpRequest(); // DtoSignUpRequest | Sign up request
apiInstance.authSignupPost(signup, (error, data, response) => {
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
 **signup** | [**DtoSignUpRequest**](DtoSignUpRequest.md)| Sign up request | 

### Return type

[**DtoAuthResponse**](DtoAuthResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

