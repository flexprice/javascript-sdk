# Analytics

## Overview

### Available Operations

* [queryAnalytics](#queryanalytics) - Run an ad-hoc analytics query
* [createAnalyticsView](#createanalyticsview) - Create an analytics view
* [queryAnalyticsView](#queryanalyticsview) - Query an analytics view

## queryAnalytics

Resolves the given view definition against the supplied variables and executes it.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="queryAnalytics" method="post" path="/analytics/query" -->
```typescript
import { Flexprice } from "@flexprice/sdk";

const flexprice = new Flexprice();

async function run() {
  const result = await flexprice.analytics.queryAnalytics({
    option1: {
      apiKeyAuth: "<YOUR_API_KEY_HERE>",
    },
  }, {
    definition: {
      metrics: [
        "usage_quantity",
      ],
      shape: "breakdown",
    },
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { FlexpriceCore } from "@flexprice/sdk/core.js";
import { analyticsQueryAnalytics } from "@flexprice/sdk/funcs/analytics-query-analytics.js";

// Use `FlexpriceCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const flexprice = new FlexpriceCore();

async function run() {
  const res = await analyticsQueryAnalytics(flexprice, {
    option1: {
      apiKeyAuth: "<YOUR_API_KEY_HERE>",
    },
  }, {
    definition: {
      metrics: [
        "usage_quantity",
      ],
      shape: "breakdown",
    },
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("analyticsQueryAnalytics failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [models.AnalyticsQueryRequest](../../sdk/models/analytics-query-request.md)                                                                                                    | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `security`                                                                                                                                                                     | [models.QueryAnalyticsSecurity](../../sdk/models/query-analytics-security.md)                                                                                                  | :heavy_check_mark:                                                                                                                                                             | The security requirements to use for the request.                                                                                                                              |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[models.AnalyticsQueryResult](../../sdk/models/analytics-query-result.md)\>**

### Errors

| Error Type                 | Status Code                | Content Type               |
| -------------------------- | -------------------------- | -------------------------- |
| models.ErrorsErrorResponse | 400                        | application/json           |
| models.ErrorsErrorResponse | 500                        | application/json           |
| models.SDKError            | 4XX, 5XX                   | \*/\*                      |

## createAnalyticsView

Persists a named view definition that can later be queried by ID.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="createAnalyticsView" method="post" path="/analytics/views" -->
```typescript
import { Flexprice } from "@flexprice/sdk";

const flexprice = new Flexprice();

async function run() {
  const result = await flexprice.analytics.createAnalyticsView({
    option1: {
      apiKeyAuth: "<YOUR_API_KEY_HERE>",
    },
  }, {
    definition: {
      metrics: [
        "event_count",
      ],
      shape: "breakdown",
    },
    name: "<value>",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { FlexpriceCore } from "@flexprice/sdk/core.js";
import { analyticsCreateAnalyticsView } from "@flexprice/sdk/funcs/analytics-create-analytics-view.js";

// Use `FlexpriceCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const flexprice = new FlexpriceCore();

async function run() {
  const res = await analyticsCreateAnalyticsView(flexprice, {
    option1: {
      apiKeyAuth: "<YOUR_API_KEY_HERE>",
    },
  }, {
    definition: {
      metrics: [
        "event_count",
      ],
      shape: "breakdown",
    },
    name: "<value>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("analyticsCreateAnalyticsView failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [models.CreateViewRequest](../../sdk/models/create-view-request.md)                                                                                                            | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `security`                                                                                                                                                                     | [models.CreateAnalyticsViewSecurity](../../sdk/models/create-analytics-view-security.md)                                                                                       | :heavy_check_mark:                                                                                                                                                             | The security requirements to use for the request.                                                                                                                              |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[models.ViewResponse](../../sdk/models/view-response.md)\>**

### Errors

| Error Type                 | Status Code                | Content Type               |
| -------------------------- | -------------------------- | -------------------------- |
| models.ErrorsErrorResponse | 400                        | application/json           |
| models.ErrorsErrorResponse | 500                        | application/json           |
| models.SDKError            | 4XX, 5XX                   | \*/\*                      |

## queryAnalyticsView

Resolves the view's definition against the supplied variables and executes it.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="queryAnalyticsView" method="post" path="/analytics/views/{id}/query" -->
```typescript
import { Flexprice } from "@flexprice/sdk";

const flexprice = new Flexprice();

async function run() {
  const result = await flexprice.analytics.queryAnalyticsView({
    option1: {
      apiKeyAuth: "<YOUR_API_KEY_HERE>",
    },
  }, "<id>", {});

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { FlexpriceCore } from "@flexprice/sdk/core.js";
import { analyticsQueryAnalyticsView } from "@flexprice/sdk/funcs/analytics-query-analytics-view.js";

// Use `FlexpriceCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const flexprice = new FlexpriceCore();

async function run() {
  const res = await analyticsQueryAnalyticsView(flexprice, {
    option1: {
      apiKeyAuth: "<YOUR_API_KEY_HERE>",
    },
  }, "<id>", {});
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("analyticsQueryAnalyticsView failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `security`                                                                                                                                                                     | [models.QueryAnalyticsViewSecurity](../../sdk/models/query-analytics-view-security.md)                                                                                         | :heavy_check_mark:                                                                                                                                                             | The security requirements to use for the request.                                                                                                                              |
| `id`                                                                                                                                                                           | *string*                                                                                                                                                                       | :heavy_check_mark:                                                                                                                                                             | View ID                                                                                                                                                                        |
| `body`                                                                                                                                                                         | [models.ViewQueryRequest](../../sdk/models/view-query-request.md)                                                                                                              | :heavy_check_mark:                                                                                                                                                             | View query request                                                                                                                                                             |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[models.AnalyticsQueryResult](../../sdk/models/analytics-query-result.md)\>**

### Errors

| Error Type                 | Status Code                | Content Type               |
| -------------------------- | -------------------------- | -------------------------- |
| models.ErrorsErrorResponse | 400, 404                   | application/json           |
| models.ErrorsErrorResponse | 500                        | application/json           |
| models.SDKError            | 4XX, 5XX                   | \*/\*                      |