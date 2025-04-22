# FlexpriceSdk.InvoicesApi

All URIs are relative to */v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**customersIdInvoicesSummaryGet**](InvoicesApi.md#customersIdInvoicesSummaryGet) | **GET** /customers/{id}/invoices/summary | Get a customer invoice summary
[**invoicesGet**](InvoicesApi.md#invoicesGet) | **GET** /invoices | List invoices
[**invoicesIdFinalizePost**](InvoicesApi.md#invoicesIdFinalizePost) | **POST** /invoices/{id}/finalize | Finalize an invoice
[**invoicesIdGet**](InvoicesApi.md#invoicesIdGet) | **GET** /invoices/{id} | Get an invoice by ID
[**invoicesIdPaymentAttemptPost**](InvoicesApi.md#invoicesIdPaymentAttemptPost) | **POST** /invoices/{id}/payment/attempt | Attempt payment for an invoice
[**invoicesIdPaymentPut**](InvoicesApi.md#invoicesIdPaymentPut) | **PUT** /invoices/{id}/payment | Update invoice payment status
[**invoicesIdPdfGet**](InvoicesApi.md#invoicesIdPdfGet) | **GET** /invoices/{id}/pdf | Get PDF for an invoice
[**invoicesIdVoidPost**](InvoicesApi.md#invoicesIdVoidPost) | **POST** /invoices/{id}/void | Void an invoice
[**invoicesPost**](InvoicesApi.md#invoicesPost) | **POST** /invoices | Create a new invoice
[**invoicesPreviewPost**](InvoicesApi.md#invoicesPreviewPost) | **POST** /invoices/preview | Get a preview invoice



## customersIdInvoicesSummaryGet

> DtoCustomerMultiCurrencyInvoiceSummary customersIdInvoicesSummaryGet(id)

Get a customer invoice summary

Get a customer invoice summary

### Example

```javascript
import FlexpriceSdk from '@flexprice/sdk';
let defaultClient = FlexpriceSdk.ApiClient.instance;
// Configure API key authorization: ApiKeyAuth
let ApiKeyAuth = defaultClient.authentications['ApiKeyAuth'];
ApiKeyAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKeyAuth.apiKeyPrefix = 'Token';

let apiInstance = new FlexpriceSdk.InvoicesApi();
let id = "id_example"; // String | Customer ID
apiInstance.customersIdInvoicesSummaryGet(id, (error, data, response) => {
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

[**DtoCustomerMultiCurrencyInvoiceSummary**](DtoCustomerMultiCurrencyInvoiceSummary.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## invoicesGet

> DtoListInvoicesResponse invoicesGet(opts)

List invoices

List invoices with optional filtering

### Example

```javascript
import FlexpriceSdk from '@flexprice/sdk';

let apiInstance = new FlexpriceSdk.InvoicesApi();
let opts = {
  'amountDueGt': 3.4, // Number | 
  'amountRemainingGt': 3.4, // Number | 
  'customerId': "customerId_example", // String | 
  'endTime': "endTime_example", // String | 
  'expand': "expand_example", // String | 
  'invoiceIds': ["null"], // [String] | 
  'invoiceStatus': ["null"], // [String] | 
  'invoiceType': "invoiceType_example", // String | 
  'limit': 56, // Number | 
  'offset': 56, // Number | 
  'order': "order_example", // String | 
  'paymentStatus': ["null"], // [String] | 
  'sort': "sort_example", // String | 
  'startTime': "startTime_example", // String | 
  'status': "status_example", // String | 
  'subscriptionId': "subscriptionId_example" // String | 
};
apiInstance.invoicesGet(opts, (error, data, response) => {
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
 **amountDueGt** | **Number**|  | [optional] 
 **amountRemainingGt** | **Number**|  | [optional] 
 **customerId** | **String**|  | [optional] 
 **endTime** | **String**|  | [optional] 
 **expand** | **String**|  | [optional] 
 **invoiceIds** | [**[String]**](String.md)|  | [optional] 
 **invoiceStatus** | [**[String]**](String.md)|  | [optional] 
 **invoiceType** | **String**|  | [optional] 
 **limit** | **Number**|  | [optional] 
 **offset** | **Number**|  | [optional] 
 **order** | **String**|  | [optional] 
 **paymentStatus** | [**[String]**](String.md)|  | [optional] 
 **sort** | **String**|  | [optional] 
 **startTime** | **String**|  | [optional] 
 **status** | **String**|  | [optional] 
 **subscriptionId** | **String**|  | [optional] 

### Return type

[**DtoListInvoicesResponse**](DtoListInvoicesResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## invoicesIdFinalizePost

> {String: Object} invoicesIdFinalizePost(id)

Finalize an invoice

Finalize a draft invoice

### Example

```javascript
import FlexpriceSdk from '@flexprice/sdk';

let apiInstance = new FlexpriceSdk.InvoicesApi();
let id = "id_example"; // String | Invoice ID
apiInstance.invoicesIdFinalizePost(id, (error, data, response) => {
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
 **id** | **String**| Invoice ID | 

### Return type

**{String: Object}**

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## invoicesIdGet

> DtoInvoiceResponse invoicesIdGet(id)

Get an invoice by ID

Get detailed information about an invoice

### Example

```javascript
import FlexpriceSdk from '@flexprice/sdk';

let apiInstance = new FlexpriceSdk.InvoicesApi();
let id = "id_example"; // String | Invoice ID
apiInstance.invoicesIdGet(id, (error, data, response) => {
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
 **id** | **String**| Invoice ID | 

### Return type

[**DtoInvoiceResponse**](DtoInvoiceResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## invoicesIdPaymentAttemptPost

> {String: Object} invoicesIdPaymentAttemptPost(id)

Attempt payment for an invoice

Attempt to pay an invoice using customer&#39;s available wallets

### Example

```javascript
import FlexpriceSdk from '@flexprice/sdk';

let apiInstance = new FlexpriceSdk.InvoicesApi();
let id = "id_example"; // String | Invoice ID
apiInstance.invoicesIdPaymentAttemptPost(id, (error, data, response) => {
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
 **id** | **String**| Invoice ID | 

### Return type

**{String: Object}**

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## invoicesIdPaymentPut

> DtoInvoiceResponse invoicesIdPaymentPut(id, request)

Update invoice payment status

Update the payment status of an invoice

### Example

```javascript
import FlexpriceSdk from '@flexprice/sdk';
let defaultClient = FlexpriceSdk.ApiClient.instance;
// Configure API key authorization: ApiKeyAuth
let ApiKeyAuth = defaultClient.authentications['ApiKeyAuth'];
ApiKeyAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKeyAuth.apiKeyPrefix = 'Token';

let apiInstance = new FlexpriceSdk.InvoicesApi();
let id = "id_example"; // String | Invoice ID
let request = new FlexpriceSdk.DtoUpdatePaymentStatusRequest(); // DtoUpdatePaymentStatusRequest | Payment Status Update Request
apiInstance.invoicesIdPaymentPut(id, request, (error, data, response) => {
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
 **id** | **String**| Invoice ID | 
 **request** | [**DtoUpdatePaymentStatusRequest**](DtoUpdatePaymentStatusRequest.md)| Payment Status Update Request | 

### Return type

[**DtoInvoiceResponse**](DtoInvoiceResponse.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## invoicesIdPdfGet

> File invoicesIdPdfGet(id, opts)

Get PDF for an invoice

Retrieve the PDF document for a specific invoice by its ID

### Example

```javascript
import FlexpriceSdk from '@flexprice/sdk';

let apiInstance = new FlexpriceSdk.InvoicesApi();
let id = "id_example"; // String | Invoice ID
let opts = {
  'url': true // Boolean | Return presigned URL from s3 instead of PDF
};
apiInstance.invoicesIdPdfGet(id, opts, (error, data, response) => {
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
 **id** | **String**| Invoice ID | 
 **url** | **Boolean**| Return presigned URL from s3 instead of PDF | [optional] 

### Return type

**File**

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: */*


## invoicesIdVoidPost

> {String: Object} invoicesIdVoidPost(id)

Void an invoice

Void an invoice that hasn&#39;t been paid

### Example

```javascript
import FlexpriceSdk from '@flexprice/sdk';

let apiInstance = new FlexpriceSdk.InvoicesApi();
let id = "id_example"; // String | Invoice ID
apiInstance.invoicesIdVoidPost(id, (error, data, response) => {
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
 **id** | **String**| Invoice ID | 

### Return type

**{String: Object}**

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## invoicesPost

> DtoInvoiceResponse invoicesPost(invoice)

Create a new invoice

Create a new invoice with the provided details

### Example

```javascript
import FlexpriceSdk from '@flexprice/sdk';

let apiInstance = new FlexpriceSdk.InvoicesApi();
let invoice = new FlexpriceSdk.DtoCreateInvoiceRequest(); // DtoCreateInvoiceRequest | Invoice details
apiInstance.invoicesPost(invoice, (error, data, response) => {
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
 **invoice** | [**DtoCreateInvoiceRequest**](DtoCreateInvoiceRequest.md)| Invoice details | 

### Return type

[**DtoInvoiceResponse**](DtoInvoiceResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## invoicesPreviewPost

> DtoInvoiceResponse invoicesPreviewPost(request)

Get a preview invoice

Get a preview invoice

### Example

```javascript
import FlexpriceSdk from '@flexprice/sdk';

let apiInstance = new FlexpriceSdk.InvoicesApi();
let request = new FlexpriceSdk.DtoGetPreviewInvoiceRequest(); // DtoGetPreviewInvoiceRequest | Preview Invoice Request
apiInstance.invoicesPreviewPost(request, (error, data, response) => {
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
 **request** | [**DtoGetPreviewInvoiceRequest**](DtoGetPreviewInvoiceRequest.md)| Preview Invoice Request | 

### Return type

[**DtoInvoiceResponse**](DtoInvoiceResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

