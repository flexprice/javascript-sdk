# FlexpriceClient.IntegrationsApi

All URIs are relative to */v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**secretsIntegrationsIdDelete**](IntegrationsApi.md#secretsIntegrationsIdDelete) | **DELETE** /secrets/integrations/{id} | Delete an integration
[**secretsIntegrationsLinkedGet**](IntegrationsApi.md#secretsIntegrationsLinkedGet) | **GET** /secrets/integrations/linked | List linked integrations
[**secretsIntegrationsProviderGet**](IntegrationsApi.md#secretsIntegrationsProviderGet) | **GET** /secrets/integrations/{provider} | Get integration details
[**secretsIntegrationsProviderPost**](IntegrationsApi.md#secretsIntegrationsProviderPost) | **POST** /secrets/integrations/{provider} | Create or update an integration



## secretsIntegrationsIdDelete

> secretsIntegrationsIdDelete(id)

Delete an integration

Delete integration credentials

### Example

```javascript
import FlexpriceClient from 'flexprice-client';

let apiInstance = new FlexpriceClient.IntegrationsApi();
let id = "id_example"; // String | Integration ID
apiInstance.secretsIntegrationsIdDelete(id, (error, data, response) => {
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
 **id** | **String**| Integration ID | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## secretsIntegrationsLinkedGet

> DtoLinkedIntegrationsResponse secretsIntegrationsLinkedGet()

List linked integrations

Get a list of unique providers which have a valid linked integration secret

### Example

```javascript
import FlexpriceClient from 'flexprice-client';

let apiInstance = new FlexpriceClient.IntegrationsApi();
apiInstance.secretsIntegrationsLinkedGet((error, data, response) => {
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

[**DtoLinkedIntegrationsResponse**](DtoLinkedIntegrationsResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## secretsIntegrationsProviderGet

> DtoSecretResponse secretsIntegrationsProviderGet(provider)

Get integration details

Get details of a specific integration

### Example

```javascript
import FlexpriceClient from 'flexprice-client';

let apiInstance = new FlexpriceClient.IntegrationsApi();
let provider = "provider_example"; // String | Integration provider
apiInstance.secretsIntegrationsProviderGet(provider, (error, data, response) => {
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
 **provider** | **String**| Integration provider | 

### Return type

[**DtoSecretResponse**](DtoSecretResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## secretsIntegrationsProviderPost

> DtoSecretResponse secretsIntegrationsProviderPost(provider, request)

Create or update an integration

Create or update integration credentials

### Example

```javascript
import FlexpriceClient from 'flexprice-client';

let apiInstance = new FlexpriceClient.IntegrationsApi();
let provider = "provider_example"; // String | Integration provider
let request = new FlexpriceClient.DtoCreateIntegrationRequest(); // DtoCreateIntegrationRequest | Integration creation request
apiInstance.secretsIntegrationsProviderPost(provider, request, (error, data, response) => {
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
 **provider** | **String**| Integration provider | 
 **request** | [**DtoCreateIntegrationRequest**](DtoCreateIntegrationRequest.md)| Integration creation request | 

### Return type

[**DtoSecretResponse**](DtoSecretResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

