# UpdateTaskStatusRequest

## Example Usage

```typescript
import { UpdateTaskStatusRequest } from "@flexprice/sdk/sdk/models";

let value: UpdateTaskStatusRequest = {
  id: "<id>",
  dtoUpdateTaskStatusRequest: {
    taskStatus: "PROCESSING",
  },
};
```

## Fields

| Field                                                                               | Type                                                                                | Required                                                                            | Description                                                                         |
| ----------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------- |
| `id`                                                                                | *string*                                                                            | :heavy_check_mark:                                                                  | Task ID                                                                             |
| `dtoUpdateTaskStatusRequest`                                                        | [models.DtoUpdateTaskStatusRequest](../../sdk/models/dtoupdatetaskstatusrequest.md) | :heavy_check_mark:                                                                  | Status update                                                                       |