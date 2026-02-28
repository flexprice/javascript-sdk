# Secrets

## Overview

### Available Operations

* [listApiKeys](#listapikeys) - List API keys
* [createApiKey](#createapikey) - Create a new API key
* [deleteApiKey](#deleteapikey) - Delete an API key

## listApiKeys

Use when listing API keys (e.g. admin view or rotating keys). Returns a paginated list.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="listApiKeys" method="get" path="/secrets/api/keys" -->
```typescript
import { Flexprice } from "@flexprice/sdk";

const flexprice = new Flexprice({
  serverURL: "https://api.example.com",
  apiKeyAuth: "<YOUR_API_KEY_HERE>",
});

async function run() {
  const result = await flexprice.secrets.listApiKeys();

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { FlexpriceCore } from "@flexprice/sdk/core.js";
import { secretsListApiKeys } from "@flexprice/sdk/funcs/secrets-list-api-keys.js";

// Use `FlexpriceCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const flexprice = new FlexpriceCore({
  serverURL: "https://api.example.com",
  apiKeyAuth: "<YOUR_API_KEY_HERE>",
});

async function run() {
  const res = await secretsListApiKeys(flexprice);
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("secretsListApiKeys failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `limit`                                                                                                                                                                        | *number*                                                                                                                                                                       | :heavy_minus_sign:                                                                                                                                                             | Limit                                                                                                                                                                          |
| `offset`                                                                                                                                                                       | *number*                                                                                                                                                                       | :heavy_minus_sign:                                                                                                                                                             | Offset                                                                                                                                                                         |
| `status`                                                                                                                                                                       | *string*                                                                                                                                                                       | :heavy_minus_sign:                                                                                                                                                             | Status (published/archived)                                                                                                                                                    |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[models.DtoListSecretsResponse](../../sdk/models/dto-list-secrets-response.md)\>**

### Errors

| Error Type                       | Status Code                      | Content Type                     |
| -------------------------------- | -------------------------------- | -------------------------------- |
| models.ErrorsErrorsErrorResponse | 400                              | application/json                 |
| models.ErrorsErrorsErrorResponse | 500                              | application/json                 |
| models.SDKError                  | 4XX, 5XX                         | \*/\*                            |

## createApiKey

Use when issuing a new API key (e.g. for a service account or for the current user). Provide service_account_id to create for a service account.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="createApiKey" method="post" path="/secrets/api/keys" -->
```typescript
import { Flexprice } from "@flexprice/sdk";

const flexprice = new Flexprice({
  serverURL: "https://api.example.com",
  apiKeyAuth: "<YOUR_API_KEY_HERE>",
});

async function run() {
  const result = await flexprice.secrets.createApiKey({
    name: "<value>",
    type: "publishable_key",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { FlexpriceCore } from "@flexprice/sdk/core.js";
import { secretsCreateApiKey } from "@flexprice/sdk/funcs/secrets-create-api-key.js";

// Use `FlexpriceCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const flexprice = new FlexpriceCore({
  serverURL: "https://api.example.com",
  apiKeyAuth: "<YOUR_API_KEY_HERE>",
});

async function run() {
  const res = await secretsCreateApiKey(flexprice, {
    name: "<value>",
    type: "publishable_key",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("secretsCreateApiKey failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [models.DtoCreateAPIKeyRequest](../../sdk/models/dto-create-api-key-request.md)                                                                                                | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[models.DtoCreateAPIKeyResponse](../../sdk/models/dto-create-api-key-response.md)\>**

### Errors

| Error Type                       | Status Code                      | Content Type                     |
| -------------------------------- | -------------------------------- | -------------------------------- |
| models.ErrorsErrorsErrorResponse | 400                              | application/json                 |
| models.ErrorsErrorsErrorResponse | 500                              | application/json                 |
| models.SDKError                  | 4XX, 5XX                         | \*/\*                            |

## deleteApiKey

Use when revoking an API key (e.g. rotation or compromise). Permanently invalidates the key.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="deleteApiKey" method="delete" path="/secrets/api/keys/{id}" -->
```typescript
import { Flexprice } from "@flexprice/sdk";

const flexprice = new Flexprice({
  serverURL: "https://api.example.com",
  apiKeyAuth: "<YOUR_API_KEY_HERE>",
});

async function run() {
  await flexprice.secrets.deleteApiKey("<id>");


}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { FlexpriceCore } from "@flexprice/sdk/core.js";
import { secretsDeleteApiKey } from "@flexprice/sdk/funcs/secrets-delete-api-key.js";

// Use `FlexpriceCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const flexprice = new FlexpriceCore({
  serverURL: "https://api.example.com",
  apiKeyAuth: "<YOUR_API_KEY_HERE>",
});

async function run() {
  const res = await secretsDeleteApiKey(flexprice, "<id>");
  if (res.ok) {
    const { value: result } = res;
    
  } else {
    console.log("secretsDeleteApiKey failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `id`                                                                                                                                                                           | *string*                                                                                                                                                                       | :heavy_check_mark:                                                                                                                                                             | API key ID                                                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<void\>**

### Errors

| Error Type                       | Status Code                      | Content Type                     |
| -------------------------------- | -------------------------------- | -------------------------------- |
| models.ErrorsErrorsErrorResponse | 404                              | application/json                 |
| models.ErrorsErrorsErrorResponse | 500                              | application/json                 |
| models.SDKError                  | 4XX, 5XX                         | \*/\*                            |