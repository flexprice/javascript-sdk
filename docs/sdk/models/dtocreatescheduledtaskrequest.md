# DtoCreateScheduledTaskRequest

## Example Usage

```typescript
import { DtoCreateScheduledTaskRequest } from "@flexprice/sdk/sdk/models";

let value: DtoCreateScheduledTaskRequest = {
  connectionId: "<id>",
  entityType: "credit_topups",
  interval: "custom",
  jobConfig: {},
};
```

## Fields

| Field                                                                         | Type                                                                          | Required                                                                      | Description                                                                   |
| ----------------------------------------------------------------------------- | ----------------------------------------------------------------------------- | ----------------------------------------------------------------------------- | ----------------------------------------------------------------------------- |
| `connectionId`                                                                | *string*                                                                      | :heavy_check_mark:                                                            | N/A                                                                           |
| `enabled`                                                                     | *boolean*                                                                     | :heavy_minus_sign:                                                            | N/A                                                                           |
| `entityType`                                                                  | [models.ScheduledTaskEntityType](../../sdk/models/scheduledtaskentitytype.md) | :heavy_check_mark:                                                            | N/A                                                                           |
| `interval`                                                                    | [models.ScheduledTaskInterval](../../sdk/models/scheduledtaskinterval.md)     | :heavy_check_mark:                                                            | N/A                                                                           |
| `jobConfig`                                                                   | [models.S3JobConfig](../../sdk/models/s3jobconfig.md)                         | :heavy_check_mark:                                                            | N/A                                                                           |