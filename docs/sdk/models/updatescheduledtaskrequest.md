# UpdateScheduledTaskRequest

## Example Usage

```typescript
import { UpdateScheduledTaskRequest } from "@flexprice/sdk/sdk/models";

let value: UpdateScheduledTaskRequest = {
  id: "<id>",
  dtoUpdateScheduledTaskRequest: {
    enabled: false,
  },
};
```

## Fields

| Field                                                                                     | Type                                                                                      | Required                                                                                  | Description                                                                               |
| ----------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------- |
| `id`                                                                                      | *string*                                                                                  | :heavy_check_mark:                                                                        | Scheduled Task ID                                                                         |
| `dtoUpdateScheduledTaskRequest`                                                           | [models.DtoUpdateScheduledTaskRequest](../../sdk/models/dtoupdatescheduledtaskrequest.md) | :heavy_check_mark:                                                                        | Update request (enabled: true/false to pause/resume)                                      |