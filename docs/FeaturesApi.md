# FlexpriceClient.FeaturesApi

All URIs are relative to */v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**featuresGet**](FeaturesApi.md#featuresGet) | **GET** /features | List features
[**featuresIdDelete**](FeaturesApi.md#featuresIdDelete) | **DELETE** /features/{id} | Delete a feature
[**featuresIdGet**](FeaturesApi.md#featuresIdGet) | **GET** /features/{id} | Get a feature by ID
[**featuresIdPut**](FeaturesApi.md#featuresIdPut) | **PUT** /features/{id} | Update a feature
[**featuresPost**](FeaturesApi.md#featuresPost) | **POST** /features | Create a new feature



## featuresGet

> DtoListFeaturesResponse featuresGet(opts)

List features

List features with optional filtering

### Example

```javascript
import FlexpriceClient from 'flexprice-client';
let defaultClient = FlexpriceClient.ApiClient.instance;
// Configure API key authorization: ApiKeyAuth
let ApiKeyAuth = defaultClient.authentications['ApiKeyAuth'];
ApiKeyAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKeyAuth.apiKeyPrefix = 'Token';

let apiInstance = new FlexpriceClient.FeaturesApi();
let opts = {
  'endTime': "endTime_example", // String | 
  'expand': "expand_example", // String | 
  'featureIds': ["null"], // [String] | Feature specific filters
  'limit': 56, // Number | 
  'lookupKey': "lookupKey_example", // String | 
  'meterIds': ["null"], // [String] | 
  'offset': 56, // Number | 
  'order': "order_example", // String | 
  'sort': "sort_example", // String | 
  'startTime': "startTime_example", // String | 
  'status': "status_example" // String | 
};
apiInstance.featuresGet(opts, (error, data, response) => {
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
 **featureIds** | [**[String]**](String.md)| Feature specific filters | [optional] 
 **limit** | **Number**|  | [optional] 
 **lookupKey** | **String**|  | [optional] 
 **meterIds** | [**[String]**](String.md)|  | [optional] 
 **offset** | **Number**|  | [optional] 
 **order** | **String**|  | [optional] 
 **sort** | **String**|  | [optional] 
 **startTime** | **String**|  | [optional] 
 **status** | **String**|  | [optional] 

### Return type

[**DtoListFeaturesResponse**](DtoListFeaturesResponse.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## featuresIdDelete

> {String: Object} featuresIdDelete(id)

Delete a feature

Delete a feature by ID

### Example

```javascript
import FlexpriceClient from 'flexprice-client';
let defaultClient = FlexpriceClient.ApiClient.instance;
// Configure API key authorization: ApiKeyAuth
let ApiKeyAuth = defaultClient.authentications['ApiKeyAuth'];
ApiKeyAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKeyAuth.apiKeyPrefix = 'Token';

let apiInstance = new FlexpriceClient.FeaturesApi();
let id = "id_example"; // String | Feature ID
apiInstance.featuresIdDelete(id, (error, data, response) => {
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
 **id** | **String**| Feature ID | 

### Return type

**{String: Object}**

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## featuresIdGet

> DtoFeatureResponse featuresIdGet(id)

Get a feature by ID

Get a feature by ID

### Example

```javascript
import FlexpriceClient from 'flexprice-client';
let defaultClient = FlexpriceClient.ApiClient.instance;
// Configure API key authorization: ApiKeyAuth
let ApiKeyAuth = defaultClient.authentications['ApiKeyAuth'];
ApiKeyAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKeyAuth.apiKeyPrefix = 'Token';

let apiInstance = new FlexpriceClient.FeaturesApi();
let id = "id_example"; // String | Feature ID
apiInstance.featuresIdGet(id, (error, data, response) => {
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
 **id** | **String**| Feature ID | 

### Return type

[**DtoFeatureResponse**](DtoFeatureResponse.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## featuresIdPut

> DtoFeatureResponse featuresIdPut(id, feature)

Update a feature

Update a feature by ID

### Example

```javascript
import FlexpriceClient from 'flexprice-client';
let defaultClient = FlexpriceClient.ApiClient.instance;
// Configure API key authorization: ApiKeyAuth
let ApiKeyAuth = defaultClient.authentications['ApiKeyAuth'];
ApiKeyAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKeyAuth.apiKeyPrefix = 'Token';

let apiInstance = new FlexpriceClient.FeaturesApi();
let id = "id_example"; // String | Feature ID
let feature = new FlexpriceClient.DtoUpdateFeatureRequest(); // DtoUpdateFeatureRequest | Feature update data
apiInstance.featuresIdPut(id, feature, (error, data, response) => {
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
 **id** | **String**| Feature ID | 
 **feature** | [**DtoUpdateFeatureRequest**](DtoUpdateFeatureRequest.md)| Feature update data | 

### Return type

[**DtoFeatureResponse**](DtoFeatureResponse.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## featuresPost

> DtoFeatureResponse featuresPost(feature)

Create a new feature

Create a new feature

### Example

```javascript
import FlexpriceClient from 'flexprice-client';
let defaultClient = FlexpriceClient.ApiClient.instance;
// Configure API key authorization: ApiKeyAuth
let ApiKeyAuth = defaultClient.authentications['ApiKeyAuth'];
ApiKeyAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKeyAuth.apiKeyPrefix = 'Token';

let apiInstance = new FlexpriceClient.FeaturesApi();
let feature = new FlexpriceClient.DtoCreateFeatureRequest(); // DtoCreateFeatureRequest | Feature to create
apiInstance.featuresPost(feature, (error, data, response) => {
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
 **feature** | [**DtoCreateFeatureRequest**](DtoCreateFeatureRequest.md)| Feature to create | 

### Return type

[**DtoFeatureResponse**](DtoFeatureResponse.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

