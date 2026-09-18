# UsageRecords

## Overview

### Available Operations

* [postUsageRecordsSearch](#postusagerecordssearch) - List usage records

## postUsageRecordsSearch

Lists usage records. Also accepts filters/sort for a filtered query.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="post_/usage-records/search" method="post" path="/usage-records/search" -->
```typescript
import { Flexprice } from "@flexprice/sdk";

const flexprice = new Flexprice();

async function run() {
  const result = await flexprice.usageRecords.postUsageRecordsSearch({
    option1: {
      apiKeyAuth: "<YOUR_API_KEY_HERE>",
    },
  }, {});

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { FlexpriceCore } from "@flexprice/sdk/core.js";
import { usageRecordsPostUsageRecordsSearch } from "@flexprice/sdk/funcs/usage-records-post-usage-records-search.js";

// Use `FlexpriceCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const flexprice = new FlexpriceCore();

async function run() {
  const res = await usageRecordsPostUsageRecordsSearch(flexprice, {
    option1: {
      apiKeyAuth: "<YOUR_API_KEY_HERE>",
    },
  }, {});
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("usageRecordsPostUsageRecordsSearch failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [models.UsageRecordFilter](../../sdk/models/usage-record-filter.md)                                                                                                            | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `security`                                                                                                                                                                     | [models.PostUsageRecordsSearchSecurity](../../sdk/models/post-usage-records-search-security.md)                                                                                | :heavy_check_mark:                                                                                                                                                             | The security requirements to use for the request.                                                                                                                              |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[models.ListUsageRecordsResponse](../../sdk/models/list-usage-records-response.md)\>**

### Errors

| Error Type                 | Status Code                | Content Type               |
| -------------------------- | -------------------------- | -------------------------- |
| models.ErrorsErrorResponse | 400                        | application/json           |
| models.ErrorsErrorResponse | 500                        | application/json           |
| models.SDKError            | 4XX, 5XX                   | \*/\*                      |