# UpdateTaskStatusRequestRequest

## Example Usage

```typescript
import { UpdateTaskStatusRequestRequest } from "@flexprice/sdk/sdk/models";

let value: UpdateTaskStatusRequestRequest = {
  id: "<id>",
  body: {
    taskStatus: "PROCESSING",
  },
};
```

## Fields

| Field                                                                            | Type                                                                             | Required                                                                         | Description                                                                      |
| -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- |
| `id`                                                                             | *string*                                                                         | :heavy_check_mark:                                                               | Task ID                                                                          |
| `body`                                                                           | [models.UpdateTaskStatusRequest](../../sdk/models/update-task-status-request.md) | :heavy_check_mark:                                                               | Status update                                                                    |