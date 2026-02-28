# Addons

## Overview

### Available Operations

* [createAddon](#createaddon) - Create addon
* [getAddonByLookupKey](#getaddonbylookupkey) - Get addon by lookup key
* [queryAddon](#queryaddon) - Query addons
* [getAddon](#getaddon) - Get addon
* [updateAddon](#updateaddon) - Update addon
* [deleteAddon](#deleteaddon) - Delete addon

## createAddon

Use when defining an optional purchasable item (e.g. extra storage or support tier). Ideal for add-ons that customers can attach to a subscription.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="createAddon" method="post" path="/addons" -->
```typescript
import { Flexprice } from "@flexprice/sdk";

const flexprice = new Flexprice({
  serverURL: "https://api.example.com",
  apiKeyAuth: "<YOUR_API_KEY_HERE>",
});

async function run() {
  const result = await flexprice.addons.createAddon({
    lookupKey: "<value>",
    name: "<value>",
    type: "multiple_instance",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { FlexpriceCore } from "@flexprice/sdk/core.js";
import { addonsCreateAddon } from "@flexprice/sdk/funcs/addons-create-addon.js";

// Use `FlexpriceCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const flexprice = new FlexpriceCore({
  serverURL: "https://api.example.com",
  apiKeyAuth: "<YOUR_API_KEY_HERE>",
});

async function run() {
  const res = await addonsCreateAddon(flexprice, {
    lookupKey: "<value>",
    name: "<value>",
    type: "multiple_instance",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("addonsCreateAddon failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [models.DtoCreateAddonRequest](../../sdk/models/dto-create-addon-request.md)                                                                                                   | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[models.DtoCreateAddonResponse](../../sdk/models/dto-create-addon-response.md)\>**

### Errors

| Error Type                       | Status Code                      | Content Type                     |
| -------------------------------- | -------------------------------- | -------------------------------- |
| models.ErrorsErrorsErrorResponse | 400                              | application/json                 |
| models.ErrorsErrorsErrorResponse | 500                              | application/json                 |
| models.SDKError                  | 4XX, 5XX                         | \*/\*                            |

## getAddonByLookupKey

Use when resolving an addon by external id (e.g. from your product catalog). Ideal for integrations.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="getAddonByLookupKey" method="get" path="/addons/lookup/{lookup_key}" -->
```typescript
import { Flexprice } from "@flexprice/sdk";

const flexprice = new Flexprice({
  serverURL: "https://api.example.com",
  apiKeyAuth: "<YOUR_API_KEY_HERE>",
});

async function run() {
  const result = await flexprice.addons.getAddonByLookupKey("<value>");

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { FlexpriceCore } from "@flexprice/sdk/core.js";
import { addonsGetAddonByLookupKey } from "@flexprice/sdk/funcs/addons-get-addon-by-lookup-key.js";

// Use `FlexpriceCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const flexprice = new FlexpriceCore({
  serverURL: "https://api.example.com",
  apiKeyAuth: "<YOUR_API_KEY_HERE>",
});

async function run() {
  const res = await addonsGetAddonByLookupKey(flexprice, "<value>");
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("addonsGetAddonByLookupKey failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `lookupKey`                                                                                                                                                                    | *string*                                                                                                                                                                       | :heavy_check_mark:                                                                                                                                                             | Addon Lookup Key                                                                                                                                                               |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[models.DtoAddonResponse](../../sdk/models/dto-addon-response.md)\>**

### Errors

| Error Type                       | Status Code                      | Content Type                     |
| -------------------------------- | -------------------------------- | -------------------------------- |
| models.ErrorsErrorsErrorResponse | 400                              | application/json                 |
| models.ErrorsErrorsErrorResponse | 500                              | application/json                 |
| models.SDKError                  | 4XX, 5XX                         | \*/\*                            |

## queryAddon

Use when listing or searching addons (e.g. catalog or subscription builder). Returns a paginated list; supports filtering and sorting.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="queryAddon" method="post" path="/addons/search" -->
```typescript
import { Flexprice } from "@flexprice/sdk";

const flexprice = new Flexprice({
  serverURL: "https://api.example.com",
  apiKeyAuth: "<YOUR_API_KEY_HERE>",
});

async function run() {
  const result = await flexprice.addons.queryAddon({});

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { FlexpriceCore } from "@flexprice/sdk/core.js";
import { addonsQueryAddon } from "@flexprice/sdk/funcs/addons-query-addon.js";

// Use `FlexpriceCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const flexprice = new FlexpriceCore({
  serverURL: "https://api.example.com",
  apiKeyAuth: "<YOUR_API_KEY_HERE>",
});

async function run() {
  const res = await addonsQueryAddon(flexprice, {});
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("addonsQueryAddon failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [models.AddonFilter](../../sdk/models/addon-filter.md)                                                                                                                         | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[models.DtoListAddonsResponse](../../sdk/models/dto-list-addons-response.md)\>**

### Errors

| Error Type                       | Status Code                      | Content Type                     |
| -------------------------------- | -------------------------------- | -------------------------------- |
| models.ErrorsErrorsErrorResponse | 400                              | application/json                 |
| models.ErrorsErrorsErrorResponse | 500                              | application/json                 |
| models.SDKError                  | 4XX, 5XX                         | \*/\*                            |

## getAddon

Use when you need to load a single addon (e.g. for display or to attach to a subscription).

### Example Usage

<!-- UsageSnippet language="typescript" operationID="getAddon" method="get" path="/addons/{id}" -->
```typescript
import { Flexprice } from "@flexprice/sdk";

const flexprice = new Flexprice({
  serverURL: "https://api.example.com",
  apiKeyAuth: "<YOUR_API_KEY_HERE>",
});

async function run() {
  const result = await flexprice.addons.getAddon("<id>");

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { FlexpriceCore } from "@flexprice/sdk/core.js";
import { addonsGetAddon } from "@flexprice/sdk/funcs/addons-get-addon.js";

// Use `FlexpriceCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const flexprice = new FlexpriceCore({
  serverURL: "https://api.example.com",
  apiKeyAuth: "<YOUR_API_KEY_HERE>",
});

async function run() {
  const res = await addonsGetAddon(flexprice, "<id>");
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("addonsGetAddon failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `id`                                                                                                                                                                           | *string*                                                                                                                                                                       | :heavy_check_mark:                                                                                                                                                             | Addon ID                                                                                                                                                                       |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[models.DtoAddonResponse](../../sdk/models/dto-addon-response.md)\>**

### Errors

| Error Type                       | Status Code                      | Content Type                     |
| -------------------------------- | -------------------------------- | -------------------------------- |
| models.ErrorsErrorsErrorResponse | 400                              | application/json                 |
| models.ErrorsErrorsErrorResponse | 500                              | application/json                 |
| models.SDKError                  | 4XX, 5XX                         | \*/\*                            |

## updateAddon

Use when changing addon details (e.g. name, pricing, or metadata).

### Example Usage

<!-- UsageSnippet language="typescript" operationID="updateAddon" method="put" path="/addons/{id}" -->
```typescript
import { Flexprice } from "@flexprice/sdk";

const flexprice = new Flexprice({
  serverURL: "https://api.example.com",
  apiKeyAuth: "<YOUR_API_KEY_HERE>",
});

async function run() {
  const result = await flexprice.addons.updateAddon("<id>", {});

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { FlexpriceCore } from "@flexprice/sdk/core.js";
import { addonsUpdateAddon } from "@flexprice/sdk/funcs/addons-update-addon.js";

// Use `FlexpriceCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const flexprice = new FlexpriceCore({
  serverURL: "https://api.example.com",
  apiKeyAuth: "<YOUR_API_KEY_HERE>",
});

async function run() {
  const res = await addonsUpdateAddon(flexprice, "<id>", {});
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("addonsUpdateAddon failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `id`                                                                                                                                                                           | *string*                                                                                                                                                                       | :heavy_check_mark:                                                                                                                                                             | Addon ID                                                                                                                                                                       |
| `body`                                                                                                                                                                         | [models.DtoUpdateAddonRequest](../../sdk/models/dto-update-addon-request.md)                                                                                                   | :heavy_check_mark:                                                                                                                                                             | Update Addon Request                                                                                                                                                           |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[models.DtoAddonResponse](../../sdk/models/dto-addon-response.md)\>**

### Errors

| Error Type                       | Status Code                      | Content Type                     |
| -------------------------------- | -------------------------------- | -------------------------------- |
| models.ErrorsErrorsErrorResponse | 400                              | application/json                 |
| models.ErrorsErrorsErrorResponse | 500                              | application/json                 |
| models.SDKError                  | 4XX, 5XX                         | \*/\*                            |

## deleteAddon

Use when retiring an addon (e.g. end-of-life). Returns 200 with success message.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="deleteAddon" method="delete" path="/addons/{id}" -->
```typescript
import { Flexprice } from "@flexprice/sdk";

const flexprice = new Flexprice({
  serverURL: "https://api.example.com",
  apiKeyAuth: "<YOUR_API_KEY_HERE>",
});

async function run() {
  const result = await flexprice.addons.deleteAddon("<id>");

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { FlexpriceCore } from "@flexprice/sdk/core.js";
import { addonsDeleteAddon } from "@flexprice/sdk/funcs/addons-delete-addon.js";

// Use `FlexpriceCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const flexprice = new FlexpriceCore({
  serverURL: "https://api.example.com",
  apiKeyAuth: "<YOUR_API_KEY_HERE>",
});

async function run() {
  const res = await addonsDeleteAddon(flexprice, "<id>");
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("addonsDeleteAddon failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `id`                                                                                                                                                                           | *string*                                                                                                                                                                       | :heavy_check_mark:                                                                                                                                                             | Addon ID                                                                                                                                                                       |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[models.DtoSuccessResponse](../../sdk/models/dto-success-response.md)\>**

### Errors

| Error Type                       | Status Code                      | Content Type                     |
| -------------------------------- | -------------------------------- | -------------------------------- |
| models.ErrorsErrorsErrorResponse | 400                              | application/json                 |
| models.ErrorsErrorsErrorResponse | 500                              | application/json                 |
| models.SDKError                  | 4XX, 5XX                         | \*/\*                            |