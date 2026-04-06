# CreateTaskRequest

## Example Usage

```typescript
import { CreateTaskRequest } from "@flexprice/sdk/sdk/models";

let value: CreateTaskRequest = {
  entityType: "PRICES",
  fileType: "JSON",
  fileUrl: "https://miserable-advancement.org/",
  taskType: "EXPORT",
};
```

## Fields

| Field                                                | Type                                                 | Required                                             | Description                                          |
| ---------------------------------------------------- | ---------------------------------------------------- | ---------------------------------------------------- | ---------------------------------------------------- |
| `entityType`                                         | [models.EntityType](../../sdk/models/entity-type.md) | :heavy_check_mark:                                   | N/A                                                  |
| `fileName`                                           | *string*                                             | :heavy_minus_sign:                                   | N/A                                                  |
| `fileType`                                           | [models.FileType](../../sdk/models/file-type.md)     | :heavy_check_mark:                                   | N/A                                                  |
| `fileUrl`                                            | *string*                                             | :heavy_check_mark:                                   | N/A                                                  |
| `metadata`                                           | Record<string, *any*>                                | :heavy_minus_sign:                                   | N/A                                                  |
| `taskType`                                           | [models.TaskType](../../sdk/models/task-type.md)     | :heavy_check_mark:                                   | N/A                                                  |