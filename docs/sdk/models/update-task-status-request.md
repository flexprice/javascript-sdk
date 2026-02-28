# UpdateTaskStatusRequest

## Example Usage

```typescript
import { UpdateTaskStatusRequest } from "@flexprice/sdk/sdk/models";

let value: UpdateTaskStatusRequest = {
  id: "<id>",
  body: {
    taskStatus: "PROCESSING",
  },
};
```

## Fields

| Field                                                                                   | Type                                                                                    | Required                                                                                | Description                                                                             |
| --------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------- |
| `id`                                                                                    | *string*                                                                                | :heavy_check_mark:                                                                      | Task ID                                                                                 |
| `body`                                                                                  | [models.DtoUpdateTaskStatusRequest](../../sdk/models/dto-update-task-status-request.md) | :heavy_check_mark:                                                                      | Status update                                                                           |