# UpdateScheduledTaskRequestRequest

## Example Usage

```typescript
import { UpdateScheduledTaskRequestRequest } from "@flexprice/sdk/sdk/models";

let value: UpdateScheduledTaskRequestRequest = {
  id: "<id>",
  body: {
    enabled: false,
  },
};
```

## Fields

| Field                                                                                  | Type                                                                                   | Required                                                                               | Description                                                                            |
| -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- |
| `id`                                                                                   | *string*                                                                               | :heavy_check_mark:                                                                     | Scheduled Task ID                                                                      |
| `body`                                                                                 | [models.UpdateScheduledTaskRequest](../../sdk/models/update-scheduled-task-request.md) | :heavy_check_mark:                                                                     | Update request (enabled: true/false to pause/resume)                                   |