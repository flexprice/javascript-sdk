# AddonFilter

## Example Usage

```typescript
import { AddonFilter } from "@flexprice/sdk/sdk/models";

let value: AddonFilter = {};
```

## Fields

| Field                                                             | Type                                                              | Required                                                          | Description                                                       |
| ----------------------------------------------------------------- | ----------------------------------------------------------------- | ----------------------------------------------------------------- | ----------------------------------------------------------------- |
| `addonIds`                                                        | *string*[]                                                        | :heavy_minus_sign:                                                | N/A                                                               |
| `addonType`                                                       | [models.AddonType](../../sdk/models/addon-type.md)                | :heavy_minus_sign:                                                | N/A                                                               |
| `endTime`                                                         | *string*                                                          | :heavy_minus_sign:                                                | N/A                                                               |
| `expand`                                                          | *string*                                                          | :heavy_minus_sign:                                                | N/A                                                               |
| `filters`                                                         | [models.FilterCondition](../../sdk/models/filter-condition.md)[]  | :heavy_minus_sign:                                                | filters allows complex filtering based on multiple fields         |
| `limit`                                                           | *number*                                                          | :heavy_minus_sign:                                                | N/A                                                               |
| `lookupKeys`                                                      | *string*[]                                                        | :heavy_minus_sign:                                                | N/A                                                               |
| `offset`                                                          | *number*                                                          | :heavy_minus_sign:                                                | N/A                                                               |
| `order`                                                           | [models.AddonFilterOrder](../../sdk/models/addon-filter-order.md) | :heavy_minus_sign:                                                | N/A                                                               |
| `sort`                                                            | [models.SortCondition](../../sdk/models/sort-condition.md)[]      | :heavy_minus_sign:                                                | N/A                                                               |
| `startTime`                                                       | *string*                                                          | :heavy_minus_sign:                                                | N/A                                                               |
| `status`                                                          | [models.Status](../../sdk/models/status.md)                       | :heavy_minus_sign:                                                | N/A                                                               |