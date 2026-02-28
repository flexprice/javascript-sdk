# PriceUnitFilter

## Example Usage

```typescript
import { PriceUnitFilter } from "@flexprice/sdk/sdk/models";

let value: PriceUnitFilter = {};
```

## Fields

| Field                                                                      | Type                                                                       | Required                                                                   | Description                                                                |
| -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- |
| `endTime`                                                                  | *string*                                                                   | :heavy_minus_sign:                                                         | N/A                                                                        |
| `expand`                                                                   | *string*                                                                   | :heavy_minus_sign:                                                         | N/A                                                                        |
| `filters`                                                                  | [models.FilterCondition](../../sdk/models/filter-condition.md)[]           | :heavy_minus_sign:                                                         | filters allows complex filtering based on multiple fields                  |
| `limit`                                                                    | *number*                                                                   | :heavy_minus_sign:                                                         | N/A                                                                        |
| `offset`                                                                   | *number*                                                                   | :heavy_minus_sign:                                                         | N/A                                                                        |
| `order`                                                                    | [models.PriceUnitFilterOrder](../../sdk/models/price-unit-filter-order.md) | :heavy_minus_sign:                                                         | N/A                                                                        |
| `priceUnitIds`                                                             | *string*[]                                                                 | :heavy_minus_sign:                                                         | N/A                                                                        |
| `sort`                                                                     | [models.SortCondition](../../sdk/models/sort-condition.md)[]               | :heavy_minus_sign:                                                         | N/A                                                                        |
| `startTime`                                                                | *string*                                                                   | :heavy_minus_sign:                                                         | N/A                                                                        |
| `status`                                                                   | [models.Status](../../sdk/models/status.md)                                | :heavy_minus_sign:                                                         | N/A                                                                        |