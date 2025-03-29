# FlexpriceSdk.TenantsApi

All URIs are relative to */v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**tenantBillingGet**](TenantsApi.md#tenantBillingGet) | **GET** /tenant/billing | Get billing usage for the current tenant
[**tenantsIdGet**](TenantsApi.md#tenantsIdGet) | **GET** /tenants/{id} | Get tenant by ID
[**tenantsPost**](TenantsApi.md#tenantsPost) | **POST** /tenants | Create a new tenant
[**tenantsUpdatePut**](TenantsApi.md#tenantsUpdatePut) | **PUT** /tenants/update | Update a tenant



## tenantBillingGet

> DtoTenantBillingUsage tenantBillingGet()

Get billing usage for the current tenant

Get the subscription and usage details for the current tenant

### Example

```javascript
import FlexpriceSdk from '@flexprice/sdk';
let defaultClient = FlexpriceSdk.ApiClient.instance;
// Configure API key authorization: ApiKeyAuth
let ApiKeyAuth = defaultClient.authentications['ApiKeyAuth'];
ApiKeyAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKeyAuth.apiKeyPrefix = 'Token';

let apiInstance = new FlexpriceSdk.TenantsApi();
apiInstance.tenantBillingGet((error, data, response) => {
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

[**DtoTenantBillingUsage**](DtoTenantBillingUsage.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## tenantsIdGet

> DtoTenantResponse tenantsIdGet(id)

Get tenant by ID

Get tenant by ID

### Example

```javascript
import FlexpriceSdk from '@flexprice/sdk';
let defaultClient = FlexpriceSdk.ApiClient.instance;
// Configure API key authorization: ApiKeyAuth
let ApiKeyAuth = defaultClient.authentications['ApiKeyAuth'];
ApiKeyAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKeyAuth.apiKeyPrefix = 'Token';

let apiInstance = new FlexpriceSdk.TenantsApi();
let id = "id_example"; // String | Tenant ID
apiInstance.tenantsIdGet(id, (error, data, response) => {
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
 **id** | **String**| Tenant ID | 

### Return type

[**DtoTenantResponse**](DtoTenantResponse.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## tenantsPost

> DtoTenantResponse tenantsPost(request)

Create a new tenant

Create a new tenant

### Example

```javascript
import FlexpriceSdk from '@flexprice/sdk';
let defaultClient = FlexpriceSdk.ApiClient.instance;
// Configure API key authorization: ApiKeyAuth
let ApiKeyAuth = defaultClient.authentications['ApiKeyAuth'];
ApiKeyAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKeyAuth.apiKeyPrefix = 'Token';

let apiInstance = new FlexpriceSdk.TenantsApi();
let request = new FlexpriceSdk.DtoCreateTenantRequest(); // DtoCreateTenantRequest | Create tenant request
apiInstance.tenantsPost(request, (error, data, response) => {
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
 **request** | [**DtoCreateTenantRequest**](DtoCreateTenantRequest.md)| Create tenant request | 

### Return type

[**DtoTenantResponse**](DtoTenantResponse.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## tenantsUpdatePut

> DtoTenantResponse tenantsUpdatePut(request)

Update a tenant

Update a tenant&#39;s details including name and billing information

### Example

```javascript
import FlexpriceSdk from '@flexprice/sdk';
let defaultClient = FlexpriceSdk.ApiClient.instance;
// Configure API key authorization: ApiKeyAuth
let ApiKeyAuth = defaultClient.authentications['ApiKeyAuth'];
ApiKeyAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKeyAuth.apiKeyPrefix = 'Token';

let apiInstance = new FlexpriceSdk.TenantsApi();
let request = new FlexpriceSdk.DtoUpdateTenantRequest(); // DtoUpdateTenantRequest | Update tenant request
apiInstance.tenantsUpdatePut(request, (error, data, response) => {
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
 **request** | [**DtoUpdateTenantRequest**](DtoUpdateTenantRequest.md)| Update tenant request | 

### Return type

[**DtoTenantResponse**](DtoTenantResponse.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

