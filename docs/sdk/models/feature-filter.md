# FeatureFilter

## Example Usage

```typescript
import { FeatureFilter } from "@flexprice/sdk/sdk/models";

let value: FeatureFilter = {};
```

## Fields

| Field                                                                 | Type                                                                  | Required                                                              | Description                                                           |
| --------------------------------------------------------------------- | --------------------------------------------------------------------- | --------------------------------------------------------------------- | --------------------------------------------------------------------- |
| `endTime`                                                             | *string*                                                              | :heavy_minus_sign:                                                    | N/A                                                                   |
| `expand`                                                              | *string*                                                              | :heavy_minus_sign:                                                    | N/A                                                                   |
| `featureIds`                                                          | *string*[]                                                            | :heavy_minus_sign:                                                    | Feature specific filters                                              |
| `filters`                                                             | [models.FilterCondition](../../sdk/models/filter-condition.md)[]      | :heavy_minus_sign:                                                    | filters allows complex filtering based on multiple fields             |
| `limit`                                                               | *number*                                                              | :heavy_minus_sign:                                                    | N/A                                                                   |
| `lookupKey`                                                           | *string*                                                              | :heavy_minus_sign:                                                    | N/A                                                                   |
| `lookupKeys`                                                          | *string*[]                                                            | :heavy_minus_sign:                                                    | N/A                                                                   |
| `meterIds`                                                            | *string*[]                                                            | :heavy_minus_sign:                                                    | N/A                                                                   |
| `nameContains`                                                        | *string*                                                              | :heavy_minus_sign:                                                    | N/A                                                                   |
| `offset`                                                              | *number*                                                              | :heavy_minus_sign:                                                    | N/A                                                                   |
| `order`                                                               | [models.FeatureFilterOrder](../../sdk/models/feature-filter-order.md) | :heavy_minus_sign:                                                    | N/A                                                                   |
| `sort`                                                                | [models.SortCondition](../../sdk/models/sort-condition.md)[]          | :heavy_minus_sign:                                                    | N/A                                                                   |
| `startTime`                                                           | *string*                                                              | :heavy_minus_sign:                                                    | N/A                                                                   |
| `status`                                                              | [models.Status](../../sdk/models/status.md)                           | :heavy_minus_sign:                                                    | N/A                                                                   |