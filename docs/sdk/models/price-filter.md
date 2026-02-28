# PriceFilter

## Example Usage

```typescript
import { PriceFilter } from "@flexprice/sdk/sdk/models";

let value: PriceFilter = {};
```

## Fields

| Field                                                             | Type                                                              | Required                                                          | Description                                                       |
| ----------------------------------------------------------------- | ----------------------------------------------------------------- | ----------------------------------------------------------------- | ----------------------------------------------------------------- |
| `allowExpiredPrices`                                              | *boolean*                                                         | :heavy_minus_sign:                                                | N/A                                                               |
| `endTime`                                                         | *string*                                                          | :heavy_minus_sign:                                                | N/A                                                               |
| `entityIds`                                                       | *string*[]                                                        | :heavy_minus_sign:                                                | N/A                                                               |
| `entityType`                                                      | [models.PriceEntityType](../../sdk/models/price-entity-type.md)   | :heavy_minus_sign:                                                | N/A                                                               |
| `expand`                                                          | *string*                                                          | :heavy_minus_sign:                                                | N/A                                                               |
| `filters`                                                         | [models.FilterCondition](../../sdk/models/filter-condition.md)[]  | :heavy_minus_sign:                                                | DSL filters                                                       |
| `limit`                                                           | *number*                                                          | :heavy_minus_sign:                                                | N/A                                                               |
| `meterIds`                                                        | *string*[]                                                        | :heavy_minus_sign:                                                | N/A                                                               |
| `offset`                                                          | *number*                                                          | :heavy_minus_sign:                                                | N/A                                                               |
| `order`                                                           | [models.PriceFilterOrder](../../sdk/models/price-filter-order.md) | :heavy_minus_sign:                                                | N/A                                                               |
| `parentPriceId`                                                   | *string*                                                          | :heavy_minus_sign:                                                | N/A                                                               |
| `planIds`                                                         | *string*[]                                                        | :heavy_minus_sign:                                                | Price override filtering fields                                   |
| `priceIds`                                                        | *string*[]                                                        | :heavy_minus_sign:                                                | N/A                                                               |
| `sort`                                                            | *string*                                                          | :heavy_minus_sign:                                                | N/A                                                               |
| `startDateLt`                                                     | *string*                                                          | :heavy_minus_sign:                                                | N/A                                                               |
| `startTime`                                                       | *string*                                                          | :heavy_minus_sign:                                                | N/A                                                               |
| `status`                                                          | [models.Status](../../sdk/models/status.md)                       | :heavy_minus_sign:                                                | N/A                                                               |
| `subscriptionId`                                                  | *string*                                                          | :heavy_minus_sign:                                                | N/A                                                               |