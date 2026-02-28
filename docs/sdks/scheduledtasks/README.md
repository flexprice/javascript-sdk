# ScheduledTasks

## Overview

### Available Operations

* [listScheduledTasks](#listscheduledtasks) - List scheduled tasks
* [createScheduledTask](#createscheduledtask) - Create scheduled task
* [scheduleUpdateBillingPeriod](#scheduleupdatebillingperiod) - Schedule update billing period
* [getScheduledTask](#getscheduledtask) - Get scheduled task
* [updateScheduledTask](#updatescheduledtask) - Update a scheduled task
* [deleteScheduledTask](#deletescheduledtask) - Delete a scheduled task
* [triggerScheduledTaskRun](#triggerscheduledtaskrun) - Trigger force run

## listScheduledTasks

Use when listing or managing scheduled tasks in an admin UI. Returns a list; supports filtering by status, type, and pagination.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="listScheduledTasks" method="get" path="/tasks/scheduled" -->
```typescript
import { Flexprice } from "@flexprice/sdk";

const flexprice = new Flexprice({
  serverURL: "https://api.example.com",
  apiKeyAuth: "<YOUR_API_KEY_HERE>",
});

async function run() {
  const result = await flexprice.scheduledTasks.listScheduledTasks();

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { FlexpriceCore } from "@flexprice/sdk/core.js";
import { scheduledTasksListScheduledTasks } from "@flexprice/sdk/funcs/scheduled-tasks-list-scheduled-tasks.js";

// Use `FlexpriceCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const flexprice = new FlexpriceCore({
  serverURL: "https://api.example.com",
  apiKeyAuth: "<YOUR_API_KEY_HERE>",
});

async function run() {
  const res = await scheduledTasksListScheduledTasks(flexprice);
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("scheduledTasksListScheduledTasks failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [models.ListScheduledTasksRequest](../../sdk/models/list-scheduled-tasks-request.md)                                                                                           | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[models.DtoListScheduledTasksResponse](../../sdk/models/dto-list-scheduled-tasks-response.md)\>**

### Errors

| Error Type                       | Status Code                      | Content Type                     |
| -------------------------------- | -------------------------------- | -------------------------------- |
| models.ErrorsErrorsErrorResponse | 400                              | application/json                 |
| models.ErrorsErrorsErrorResponse | 500                              | application/json                 |
| models.SDKError                  | 4XX, 5XX                         | \*/\*                            |

## createScheduledTask

Use when setting up recurring data exports or other scheduled jobs. Ideal for report generation or syncing data on a schedule.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="createScheduledTask" method="post" path="/tasks/scheduled" -->
```typescript
import { Flexprice } from "@flexprice/sdk";

const flexprice = new Flexprice({
  serverURL: "https://api.example.com",
  apiKeyAuth: "<YOUR_API_KEY_HERE>",
});

async function run() {
  const result = await flexprice.scheduledTasks.createScheduledTask({
    connectionId: "<id>",
    entityType: "credit_topups",
    interval: "hourly",
    jobConfig: {},
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { FlexpriceCore } from "@flexprice/sdk/core.js";
import { scheduledTasksCreateScheduledTask } from "@flexprice/sdk/funcs/scheduled-tasks-create-scheduled-task.js";

// Use `FlexpriceCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const flexprice = new FlexpriceCore({
  serverURL: "https://api.example.com",
  apiKeyAuth: "<YOUR_API_KEY_HERE>",
});

async function run() {
  const res = await scheduledTasksCreateScheduledTask(flexprice, {
    connectionId: "<id>",
    entityType: "credit_topups",
    interval: "hourly",
    jobConfig: {},
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("scheduledTasksCreateScheduledTask failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [models.DtoCreateScheduledTaskRequest](../../sdk/models/dto-create-scheduled-task-request.md)                                                                                  | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[models.DtoScheduledTaskResponse](../../sdk/models/dto-scheduled-task-response.md)\>**

### Errors

| Error Type                       | Status Code                      | Content Type                     |
| -------------------------------- | -------------------------------- | -------------------------------- |
| models.ErrorsErrorsErrorResponse | 400                              | application/json                 |
| models.ErrorsErrorsErrorResponse | 500                              | application/json                 |
| models.SDKError                  | 4XX, 5XX                         | \*/\*                            |

## scheduleUpdateBillingPeriod

Use when you need to trigger a billing-period update workflow (e.g. to recalculate or sync billing windows).

### Example Usage

<!-- UsageSnippet language="typescript" operationID="scheduleUpdateBillingPeriod" method="post" path="/tasks/scheduled/schedule-update-billing-period" -->
```typescript
import { Flexprice } from "@flexprice/sdk";

const flexprice = new Flexprice({
  serverURL: "https://api.example.com",
  apiKeyAuth: "<YOUR_API_KEY_HERE>",
});

async function run() {
  const result = await flexprice.scheduledTasks.scheduleUpdateBillingPeriod({});

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { FlexpriceCore } from "@flexprice/sdk/core.js";
import { scheduledTasksScheduleUpdateBillingPeriod } from "@flexprice/sdk/funcs/scheduled-tasks-schedule-update-billing-period.js";

// Use `FlexpriceCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const flexprice = new FlexpriceCore({
  serverURL: "https://api.example.com",
  apiKeyAuth: "<YOUR_API_KEY_HERE>",
});

async function run() {
  const res = await scheduledTasksScheduleUpdateBillingPeriod(flexprice, {});
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("scheduledTasksScheduleUpdateBillingPeriod failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [models.ScheduleUpdateBillingPeriodRequest](../../sdk/models/schedule-update-billing-period-request.md)                                                                        | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[models.ScheduleUpdateBillingPeriodResponse](../../sdk/models/schedule-update-billing-period-response.md)\>**

### Errors

| Error Type                       | Status Code                      | Content Type                     |
| -------------------------------- | -------------------------------- | -------------------------------- |
| models.ErrorsErrorsErrorResponse | 400                              | application/json                 |
| models.ErrorsErrorsErrorResponse | 500                              | application/json                 |
| models.SDKError                  | 4XX, 5XX                         | \*/\*                            |

## getScheduledTask

Use when you need to load a single scheduled task (e.g. to show details in a UI or check its configuration).

### Example Usage

<!-- UsageSnippet language="typescript" operationID="getScheduledTask" method="get" path="/tasks/scheduled/{id}" -->
```typescript
import { Flexprice } from "@flexprice/sdk";

const flexprice = new Flexprice({
  serverURL: "https://api.example.com",
  apiKeyAuth: "<YOUR_API_KEY_HERE>",
});

async function run() {
  const result = await flexprice.scheduledTasks.getScheduledTask("<id>");

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { FlexpriceCore } from "@flexprice/sdk/core.js";
import { scheduledTasksGetScheduledTask } from "@flexprice/sdk/funcs/scheduled-tasks-get-scheduled-task.js";

// Use `FlexpriceCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const flexprice = new FlexpriceCore({
  serverURL: "https://api.example.com",
  apiKeyAuth: "<YOUR_API_KEY_HERE>",
});

async function run() {
  const res = await scheduledTasksGetScheduledTask(flexprice, "<id>");
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("scheduledTasksGetScheduledTask failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `id`                                                                                                                                                                           | *string*                                                                                                                                                                       | :heavy_check_mark:                                                                                                                                                             | Scheduled Task ID                                                                                                                                                              |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[models.DtoScheduledTaskResponse](../../sdk/models/dto-scheduled-task-response.md)\>**

### Errors

| Error Type                       | Status Code                      | Content Type                     |
| -------------------------------- | -------------------------------- | -------------------------------- |
| models.ErrorsErrorsErrorResponse | 400, 404                         | application/json                 |
| models.ErrorsErrorsErrorResponse | 500                              | application/json                 |
| models.SDKError                  | 4XX, 5XX                         | \*/\*                            |

## updateScheduledTask

Use when pausing or resuming a scheduled task. Only the enabled field can be changed.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="updateScheduledTask" method="put" path="/tasks/scheduled/{id}" -->
```typescript
import { Flexprice } from "@flexprice/sdk";

const flexprice = new Flexprice({
  serverURL: "https://api.example.com",
  apiKeyAuth: "<YOUR_API_KEY_HERE>",
});

async function run() {
  const result = await flexprice.scheduledTasks.updateScheduledTask("<id>", {
    enabled: false,
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { FlexpriceCore } from "@flexprice/sdk/core.js";
import { scheduledTasksUpdateScheduledTask } from "@flexprice/sdk/funcs/scheduled-tasks-update-scheduled-task.js";

// Use `FlexpriceCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const flexprice = new FlexpriceCore({
  serverURL: "https://api.example.com",
  apiKeyAuth: "<YOUR_API_KEY_HERE>",
});

async function run() {
  const res = await scheduledTasksUpdateScheduledTask(flexprice, "<id>", {
    enabled: false,
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("scheduledTasksUpdateScheduledTask failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `id`                                                                                                                                                                           | *string*                                                                                                                                                                       | :heavy_check_mark:                                                                                                                                                             | Scheduled Task ID                                                                                                                                                              |
| `body`                                                                                                                                                                         | [models.DtoUpdateScheduledTaskRequest](../../sdk/models/dto-update-scheduled-task-request.md)                                                                                  | :heavy_check_mark:                                                                                                                                                             | Update request (enabled: true/false to pause/resume)                                                                                                                           |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[models.DtoScheduledTaskResponse](../../sdk/models/dto-scheduled-task-response.md)\>**

### Errors

| Error Type                       | Status Code                      | Content Type                     |
| -------------------------------- | -------------------------------- | -------------------------------- |
| models.ErrorsErrorsErrorResponse | 400, 404                         | application/json                 |
| models.ErrorsErrorsErrorResponse | 500                              | application/json                 |
| models.SDKError                  | 4XX, 5XX                         | \*/\*                            |

## deleteScheduledTask

Use when removing a scheduled task from the active roster. Archives the task and removes it from the scheduler (soft delete).

### Example Usage

<!-- UsageSnippet language="typescript" operationID="deleteScheduledTask" method="delete" path="/tasks/scheduled/{id}" -->
```typescript
import { Flexprice } from "@flexprice/sdk";

const flexprice = new Flexprice({
  serverURL: "https://api.example.com",
  apiKeyAuth: "<YOUR_API_KEY_HERE>",
});

async function run() {
  await flexprice.scheduledTasks.deleteScheduledTask("<id>");


}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { FlexpriceCore } from "@flexprice/sdk/core.js";
import { scheduledTasksDeleteScheduledTask } from "@flexprice/sdk/funcs/scheduled-tasks-delete-scheduled-task.js";

// Use `FlexpriceCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const flexprice = new FlexpriceCore({
  serverURL: "https://api.example.com",
  apiKeyAuth: "<YOUR_API_KEY_HERE>",
});

async function run() {
  const res = await scheduledTasksDeleteScheduledTask(flexprice, "<id>");
  if (res.ok) {
    const { value: result } = res;
    
  } else {
    console.log("scheduledTasksDeleteScheduledTask failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `id`                                                                                                                                                                           | *string*                                                                                                                                                                       | :heavy_check_mark:                                                                                                                                                             | Scheduled Task ID                                                                                                                                                              |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<void\>**

### Errors

| Error Type                       | Status Code                      | Content Type                     |
| -------------------------------- | -------------------------------- | -------------------------------- |
| models.ErrorsErrorsErrorResponse | 400, 404                         | application/json                 |
| models.ErrorsErrorsErrorResponse | 500                              | application/json                 |
| models.SDKError                  | 4XX, 5XX                         | \*/\*                            |

## triggerScheduledTaskRun

Use when you need to run a scheduled export immediately (e.g. on-demand report or catch-up). Supports optional custom time range.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="triggerScheduledTaskRun" method="post" path="/tasks/scheduled/{id}/run" -->
```typescript
import { Flexprice } from "@flexprice/sdk";

const flexprice = new Flexprice({
  serverURL: "https://api.example.com",
  apiKeyAuth: "<YOUR_API_KEY_HERE>",
});

async function run() {
  const result = await flexprice.scheduledTasks.triggerScheduledTaskRun("<id>");

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { FlexpriceCore } from "@flexprice/sdk/core.js";
import { scheduledTasksTriggerScheduledTaskRun } from "@flexprice/sdk/funcs/scheduled-tasks-trigger-scheduled-task-run.js";

// Use `FlexpriceCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const flexprice = new FlexpriceCore({
  serverURL: "https://api.example.com",
  apiKeyAuth: "<YOUR_API_KEY_HERE>",
});

async function run() {
  const res = await scheduledTasksTriggerScheduledTaskRun(flexprice, "<id>");
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("scheduledTasksTriggerScheduledTaskRun failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `id`                                                                                                                                                                           | *string*                                                                                                                                                                       | :heavy_check_mark:                                                                                                                                                             | Scheduled Task ID                                                                                                                                                              |
| `body`                                                                                                                                                                         | [models.DtoTriggerForceRunRequest](../../sdk/models/dto-trigger-force-run-request.md)                                                                                          | :heavy_minus_sign:                                                                                                                                                             | Optional start and end time for custom range                                                                                                                                   |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[models.DtoTriggerForceRunResponse](../../sdk/models/dto-trigger-force-run-response.md)\>**

### Errors

| Error Type                       | Status Code                      | Content Type                     |
| -------------------------------- | -------------------------------- | -------------------------------- |
| models.ErrorsErrorsErrorResponse | 400, 404                         | application/json                 |
| models.ErrorsErrorsErrorResponse | 500                              | application/json                 |
| models.SDKError                  | 4XX, 5XX                         | \*/\*                            |