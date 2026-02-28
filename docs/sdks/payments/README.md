# Payments

## Overview

### Available Operations

* [listPayments](#listpayments) - List payments
* [createPayment](#createpayment) - Create payment
* [getPayment](#getpayment) - Get payment
* [updatePayment](#updatepayment) - Update payment
* [deletePayment](#deletepayment) - Delete payment
* [processPayment](#processpayment) - Process payment

## listPayments

Use when listing or searching payments (e.g. reconciliation UI or customer payment history). Returns a paginated list; supports filtering by customer, invoice, status.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="listPayments" method="get" path="/payments" -->
```typescript
import { Flexprice } from "@flexprice/sdk";

const flexprice = new Flexprice({
  serverURL: "https://api.example.com",
  apiKeyAuth: "<YOUR_API_KEY_HERE>",
});

async function run() {
  const result = await flexprice.payments.listPayments();

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { FlexpriceCore } from "@flexprice/sdk/core.js";
import { paymentsListPayments } from "@flexprice/sdk/funcs/payments-list-payments.js";

// Use `FlexpriceCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const flexprice = new FlexpriceCore({
  serverURL: "https://api.example.com",
  apiKeyAuth: "<YOUR_API_KEY_HERE>",
});

async function run() {
  const res = await paymentsListPayments(flexprice);
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("paymentsListPayments failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [models.ListPaymentsRequest](../../sdk/models/list-payments-request.md)                                                                                                        | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[models.DtoListPaymentsResponse](../../sdk/models/dto-list-payments-response.md)\>**

### Errors

| Error Type                       | Status Code                      | Content Type                     |
| -------------------------------- | -------------------------------- | -------------------------------- |
| models.ErrorsErrorsErrorResponse | 400                              | application/json                 |
| models.ErrorsErrorsErrorResponse | 500                              | application/json                 |
| models.SDKError                  | 4XX, 5XX                         | \*/\*                            |

## createPayment

Use when recording a payment against an invoice (e.g. after receiving funds via a gateway or manual entry).

### Example Usage

<!-- UsageSnippet language="typescript" operationID="createPayment" method="post" path="/payments" -->
```typescript
import { Flexprice } from "@flexprice/sdk";

const flexprice = new Flexprice({
  serverURL: "https://api.example.com",
  apiKeyAuth: "<YOUR_API_KEY_HERE>",
});

async function run() {
  const result = await flexprice.payments.createPayment({
    amount: "883.46",
    currency: "CFP Franc",
    destinationId: "<id>",
    destinationType: "INVOICE",
    paymentMethodType: "OFFLINE",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { FlexpriceCore } from "@flexprice/sdk/core.js";
import { paymentsCreatePayment } from "@flexprice/sdk/funcs/payments-create-payment.js";

// Use `FlexpriceCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const flexprice = new FlexpriceCore({
  serverURL: "https://api.example.com",
  apiKeyAuth: "<YOUR_API_KEY_HERE>",
});

async function run() {
  const res = await paymentsCreatePayment(flexprice, {
    amount: "883.46",
    currency: "CFP Franc",
    destinationId: "<id>",
    destinationType: "INVOICE",
    paymentMethodType: "OFFLINE",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("paymentsCreatePayment failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [models.DtoCreatePaymentRequest](../../sdk/models/dto-create-payment-request.md)                                                                                               | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[models.DtoPaymentResponse](../../sdk/models/dto-payment-response.md)\>**

### Errors

| Error Type                       | Status Code                      | Content Type                     |
| -------------------------------- | -------------------------------- | -------------------------------- |
| models.ErrorsErrorsErrorResponse | 400                              | application/json                 |
| models.ErrorsErrorsErrorResponse | 500                              | application/json                 |
| models.SDKError                  | 4XX, 5XX                         | \*/\*                            |

## getPayment

Use when you need to load a single payment (e.g. for a receipt view or reconciliation).

### Example Usage

<!-- UsageSnippet language="typescript" operationID="getPayment" method="get" path="/payments/{id}" -->
```typescript
import { Flexprice } from "@flexprice/sdk";

const flexprice = new Flexprice({
  serverURL: "https://api.example.com",
  apiKeyAuth: "<YOUR_API_KEY_HERE>",
});

async function run() {
  const result = await flexprice.payments.getPayment("<id>");

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { FlexpriceCore } from "@flexprice/sdk/core.js";
import { paymentsGetPayment } from "@flexprice/sdk/funcs/payments-get-payment.js";

// Use `FlexpriceCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const flexprice = new FlexpriceCore({
  serverURL: "https://api.example.com",
  apiKeyAuth: "<YOUR_API_KEY_HERE>",
});

async function run() {
  const res = await paymentsGetPayment(flexprice, "<id>");
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("paymentsGetPayment failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `id`                                                                                                                                                                           | *string*                                                                                                                                                                       | :heavy_check_mark:                                                                                                                                                             | Payment ID                                                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[models.DtoPaymentResponse](../../sdk/models/dto-payment-response.md)\>**

### Errors

| Error Type                       | Status Code                      | Content Type                     |
| -------------------------------- | -------------------------------- | -------------------------------- |
| models.ErrorsErrorsErrorResponse | 400, 404                         | application/json                 |
| models.ErrorsErrorsErrorResponse | 500                              | application/json                 |
| models.SDKError                  | 4XX, 5XX                         | \*/\*                            |

## updatePayment

Use when updating payment status or metadata (e.g. after reconciliation or adding a reference).

### Example Usage

<!-- UsageSnippet language="typescript" operationID="updatePayment" method="put" path="/payments/{id}" -->
```typescript
import { Flexprice } from "@flexprice/sdk";

const flexprice = new Flexprice({
  serverURL: "https://api.example.com",
  apiKeyAuth: "<YOUR_API_KEY_HERE>",
});

async function run() {
  const result = await flexprice.payments.updatePayment("<id>", {});

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { FlexpriceCore } from "@flexprice/sdk/core.js";
import { paymentsUpdatePayment } from "@flexprice/sdk/funcs/payments-update-payment.js";

// Use `FlexpriceCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const flexprice = new FlexpriceCore({
  serverURL: "https://api.example.com",
  apiKeyAuth: "<YOUR_API_KEY_HERE>",
});

async function run() {
  const res = await paymentsUpdatePayment(flexprice, "<id>", {});
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("paymentsUpdatePayment failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `id`                                                                                                                                                                           | *string*                                                                                                                                                                       | :heavy_check_mark:                                                                                                                                                             | Payment ID                                                                                                                                                                     |
| `body`                                                                                                                                                                         | [models.DtoUpdatePaymentRequest](../../sdk/models/dto-update-payment-request.md)                                                                                               | :heavy_check_mark:                                                                                                                                                             | Payment configuration                                                                                                                                                          |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[models.DtoPaymentResponse](../../sdk/models/dto-payment-response.md)\>**

### Errors

| Error Type                       | Status Code                      | Content Type                     |
| -------------------------------- | -------------------------------- | -------------------------------- |
| models.ErrorsErrorsErrorResponse | 400                              | application/json                 |
| models.ErrorsErrorsErrorResponse | 500                              | application/json                 |
| models.SDKError                  | 4XX, 5XX                         | \*/\*                            |

## deletePayment

Use when removing or voiding a payment record (e.g. correcting erroneous entries). Returns 200 with success message.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="deletePayment" method="delete" path="/payments/{id}" -->
```typescript
import { Flexprice } from "@flexprice/sdk";

const flexprice = new Flexprice({
  serverURL: "https://api.example.com",
  apiKeyAuth: "<YOUR_API_KEY_HERE>",
});

async function run() {
  const result = await flexprice.payments.deletePayment("<id>");

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { FlexpriceCore } from "@flexprice/sdk/core.js";
import { paymentsDeletePayment } from "@flexprice/sdk/funcs/payments-delete-payment.js";

// Use `FlexpriceCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const flexprice = new FlexpriceCore({
  serverURL: "https://api.example.com",
  apiKeyAuth: "<YOUR_API_KEY_HERE>",
});

async function run() {
  const res = await paymentsDeletePayment(flexprice, "<id>");
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("paymentsDeletePayment failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `id`                                                                                                                                                                           | *string*                                                                                                                                                                       | :heavy_check_mark:                                                                                                                                                             | Payment ID                                                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[models.DtoSuccessResponse](../../sdk/models/dto-success-response.md)\>**

### Errors

| Error Type                       | Status Code                      | Content Type                     |
| -------------------------------- | -------------------------------- | -------------------------------- |
| models.ErrorsErrorsErrorResponse | 400, 404                         | application/json                 |
| models.ErrorsErrorsErrorResponse | 500                              | application/json                 |
| models.SDKError                  | 4XX, 5XX                         | \*/\*                            |

## processPayment

Use when you need to charge or process a payment (e.g. trigger the payment provider to capture funds). Returns updated payment with status.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="processPayment" method="post" path="/payments/{id}/process" -->
```typescript
import { Flexprice } from "@flexprice/sdk";

const flexprice = new Flexprice({
  serverURL: "https://api.example.com",
  apiKeyAuth: "<YOUR_API_KEY_HERE>",
});

async function run() {
  const result = await flexprice.payments.processPayment("<id>");

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { FlexpriceCore } from "@flexprice/sdk/core.js";
import { paymentsProcessPayment } from "@flexprice/sdk/funcs/payments-process-payment.js";

// Use `FlexpriceCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const flexprice = new FlexpriceCore({
  serverURL: "https://api.example.com",
  apiKeyAuth: "<YOUR_API_KEY_HERE>",
});

async function run() {
  const res = await paymentsProcessPayment(flexprice, "<id>");
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("paymentsProcessPayment failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `id`                                                                                                                                                                           | *string*                                                                                                                                                                       | :heavy_check_mark:                                                                                                                                                             | Payment ID                                                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[models.DtoPaymentResponse](../../sdk/models/dto-payment-response.md)\>**

### Errors

| Error Type                       | Status Code                      | Content Type                     |
| -------------------------------- | -------------------------------- | -------------------------------- |
| models.ErrorsErrorsErrorResponse | 400, 404                         | application/json                 |
| models.ErrorsErrorsErrorResponse | 500                              | application/json                 |
| models.SDKError                  | 4XX, 5XX                         | \*/\*                            |