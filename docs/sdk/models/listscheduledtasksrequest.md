# ListScheduledTasksRequest

## Example Usage

```typescript
import { ListScheduledTasksRequest } from "@flexprice/sdk/sdk/models";

let value: ListScheduledTasksRequest = {};
```

## Fields

| Field                    | Type                     | Required                 | Description              |
| ------------------------ | ------------------------ | ------------------------ | ------------------------ |
| `limit`                  | *number*                 | :heavy_minus_sign:       | Limit                    |
| `offset`                 | *number*                 | :heavy_minus_sign:       | Offset                   |
| `connectionId`           | *string*                 | :heavy_minus_sign:       | Filter by connection ID  |
| `entityType`             | *string*                 | :heavy_minus_sign:       | Filter by entity type    |
| `interval`               | *string*                 | :heavy_minus_sign:       | Filter by interval       |
| `enabled`                | *boolean*                | :heavy_minus_sign:       | Filter by enabled status |