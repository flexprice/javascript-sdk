# UpdateScheduledTaskRequest

## Example Usage

```typescript
import { UpdateScheduledTaskRequest } from "@flexprice/sdk/sdk/models";

let value: UpdateScheduledTaskRequest = {
  id: "<id>",
  body: {
    enabled: false,
  },
};
```

## Fields

| Field                                                                                         | Type                                                                                          | Required                                                                                      | Description                                                                                   |
| --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| `id`                                                                                          | *string*                                                                                      | :heavy_check_mark:                                                                            | Scheduled Task ID                                                                             |
| `body`                                                                                        | [models.DtoUpdateScheduledTaskRequest](../../sdk/models/dto-update-scheduled-task-request.md) | :heavy_check_mark:                                                                            | Update request (enabled: true/false to pause/resume)                                          |