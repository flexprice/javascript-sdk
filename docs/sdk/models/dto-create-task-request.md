# DtoCreateTaskRequest

## Example Usage

```typescript
import { DtoCreateTaskRequest } from "@flexprice/sdk/sdk/models";

let value: DtoCreateTaskRequest = {
  entityType: "FEATURES",
  fileType: "JSON",
  fileUrl: "https://necessary-wombat.net/",
  taskType: "IMPORT",
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