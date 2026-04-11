# MeterUsage

## Overview

### Available Operations

* [getMeterUsageAnalytics](#getmeterusageanalytics) - Get meter usage analytics
* [queryMeterUsage](#querymeterusage) - Query meter usage

## getMeterUsageAnalytics

Query aggregated usage from meter_usage table for multiple meters

### Example Usage

<!-- UsageSnippet language="typescript" operationID="getMeterUsageAnalytics" method="post" path="/meter-usage/analytics" -->
```typescript
import { Flexprice } from "@flexprice/sdk";

const flexprice = new Flexprice({
  apiKeyAuth: "<YOUR_API_KEY_HERE>",
});

async function run() {
  const result = await flexprice.meterUsage.getMeterUsageAnalytics({
    aggregationType: "COUNT",
    endTime: new Date("2024-02-01T00:00:00Z"),
    externalCustomerId: "cust_123",
    meterIds: [
      "mtr_abc",
      "mtr_def",
    ],
    startTime: new Date("2024-01-01T00:00:00Z"),
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { FlexpriceCore } from "@flexprice/sdk/core.js";
import { meterUsageGetMeterUsageAnalytics } from "@flexprice/sdk/funcs/meter-usage-get-meter-usage-analytics.js";

// Use `FlexpriceCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const flexprice = new FlexpriceCore({
  apiKeyAuth: "<YOUR_API_KEY_HERE>",
});

async function run() {
  const res = await meterUsageGetMeterUsageAnalytics(flexprice, {
    aggregationType: "COUNT",
    endTime: new Date("2024-02-01T00:00:00Z"),
    externalCustomerId: "cust_123",
    meterIds: [
      "mtr_abc",
      "mtr_def",
    ],
    startTime: new Date("2024-01-01T00:00:00Z"),
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("meterUsageGetMeterUsageAnalytics failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [models.MeterUsageAnalyticsRequest](../../sdk/models/meter-usage-analytics-request.md)                                                                                         | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[models.MeterUsageAnalyticsResponse](../../sdk/models/meter-usage-analytics-response.md)\>**

### Errors

| Error Type                 | Status Code                | Content Type               |
| -------------------------- | -------------------------- | -------------------------- |
| models.ErrorsErrorResponse | 400                        | application/json           |
| models.ErrorsErrorResponse | 500                        | application/json           |
| models.SDKError            | 4XX, 5XX                   | \*/\*                      |

## queryMeterUsage

Query aggregated usage from meter_usage table for a single meter with optional time-window bucketing

### Example Usage

<!-- UsageSnippet language="typescript" operationID="queryMeterUsage" method="post" path="/meter-usage/query" -->
```typescript
import { Flexprice } from "@flexprice/sdk";

const flexprice = new Flexprice({
  apiKeyAuth: "<YOUR_API_KEY_HERE>",
});

async function run() {
  const result = await flexprice.meterUsage.queryMeterUsage({
    aggregationType: "WEIGHTED_SUM",
    billingAnchor: new Date("2024-01-15T00:00:00Z"),
    endTime: new Date("2024-02-01T00:00:00Z"),
    externalCustomerId: "cust_123",
    meterId: "mtr_abc",
    startTime: new Date("2024-01-01T00:00:00Z"),
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { FlexpriceCore } from "@flexprice/sdk/core.js";
import { meterUsageQueryMeterUsage } from "@flexprice/sdk/funcs/meter-usage-query-meter-usage.js";

// Use `FlexpriceCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const flexprice = new FlexpriceCore({
  apiKeyAuth: "<YOUR_API_KEY_HERE>",
});

async function run() {
  const res = await meterUsageQueryMeterUsage(flexprice, {
    aggregationType: "WEIGHTED_SUM",
    billingAnchor: new Date("2024-01-15T00:00:00Z"),
    endTime: new Date("2024-02-01T00:00:00Z"),
    externalCustomerId: "cust_123",
    meterId: "mtr_abc",
    startTime: new Date("2024-01-01T00:00:00Z"),
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("meterUsageQueryMeterUsage failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [models.MeterUsageQueryRequest](../../sdk/models/meter-usage-query-request.md)                                                                                                 | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[models.MeterUsageQueryResponse](../../sdk/models/meter-usage-query-response.md)\>**

### Errors

| Error Type                 | Status Code                | Content Type               |
| -------------------------- | -------------------------- | -------------------------- |
| models.ErrorsErrorResponse | 400                        | application/json           |
| models.ErrorsErrorResponse | 500                        | application/json           |
| models.SDKError            | 4XX, 5XX                   | \*/\*                      |