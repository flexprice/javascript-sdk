# GroupFilter

## Example Usage

```typescript
import { GroupFilter } from "@flexprice/sdk/sdk/models";

let value: GroupFilter = {};
```

## Fields

| Field                                                             | Type                                                              | Required                                                          | Description                                                       |
| ----------------------------------------------------------------- | ----------------------------------------------------------------- | ----------------------------------------------------------------- | ----------------------------------------------------------------- |
| `endTime`                                                         | *string*                                                          | :heavy_minus_sign:                                                | N/A                                                               |
| `entityType`                                                      | *string*                                                          | :heavy_minus_sign:                                                | N/A                                                               |
| `expand`                                                          | *string*                                                          | :heavy_minus_sign:                                                | N/A                                                               |
| `filters`                                                         | [models.FilterCondition](../../sdk/models/filter-condition.md)[]  | :heavy_minus_sign:                                                | filters allows complex filtering based on multiple fields         |
| `groupIds`                                                        | *string*[]                                                        | :heavy_minus_sign:                                                | Group specific filters                                            |
| `limit`                                                           | *number*                                                          | :heavy_minus_sign:                                                | N/A                                                               |
| `lookupKey`                                                       | *string*                                                          | :heavy_minus_sign:                                                | N/A                                                               |
| `name`                                                            | *string*                                                          | :heavy_minus_sign:                                                | N/A                                                               |
| `offset`                                                          | *number*                                                          | :heavy_minus_sign:                                                | N/A                                                               |
| `order`                                                           | [models.GroupFilterOrder](../../sdk/models/group-filter-order.md) | :heavy_minus_sign:                                                | N/A                                                               |
| `sort`                                                            | [models.SortCondition](../../sdk/models/sort-condition.md)[]      | :heavy_minus_sign:                                                | N/A                                                               |
| `startTime`                                                       | *string*                                                          | :heavy_minus_sign:                                                | N/A                                                               |
| `status`                                                          | [models.Status](../../sdk/models/status.md)                       | :heavy_minus_sign:                                                | N/A                                                               |