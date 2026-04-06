# CostAnalyticItem

## Example Usage

```typescript
import { CostAnalyticItem } from "@flexprice/sdk/sdk/models";

let value: CostAnalyticItem = {};
```

## Fields

| Field                                                | Type                                                 | Required                                             | Description                                          |
| ---------------------------------------------------- | ---------------------------------------------------- | ---------------------------------------------------- | ---------------------------------------------------- |
| `costByPeriod`                                       | [models.CostPoint](../../sdk/models/cost-point.md)[] | :heavy_minus_sign:                                   | Breakdown                                            |
| `costsheetId`                                        | *string*                                             | :heavy_minus_sign:                                   | N/A                                                  |
| `currency`                                           | *string*                                             | :heavy_minus_sign:                                   | Metadata                                             |
| `customerId`                                         | *string*                                             | :heavy_minus_sign:                                   | N/A                                                  |
| `externalCustomerId`                                 | *string*                                             | :heavy_minus_sign:                                   | N/A                                                  |
| `meter`                                              | [models.MeterMeter](../../sdk/models/meter-meter.md) | :heavy_minus_sign:                                   | N/A                                                  |
| `meterId`                                            | *string*                                             | :heavy_minus_sign:                                   | N/A                                                  |
| `meterName`                                          | *string*                                             | :heavy_minus_sign:                                   | N/A                                                  |
| `price`                                              | [models.PricePrice](../../sdk/models/price-price.md) | :heavy_minus_sign:                                   | N/A                                                  |
| `priceId`                                            | *string*                                             | :heavy_minus_sign:                                   | N/A                                                  |
| `properties`                                         | Record<string, *string*>                             | :heavy_minus_sign:                                   | N/A                                                  |
| `source`                                             | *string*                                             | :heavy_minus_sign:                                   | N/A                                                  |
| `totalCost`                                          | *string*                                             | :heavy_minus_sign:                                   | Aggregated metrics                                   |
| `totalEvents`                                        | *number*                                             | :heavy_minus_sign:                                   | N/A                                                  |
| `totalQuantity`                                      | *string*                                             | :heavy_minus_sign:                                   | N/A                                                  |