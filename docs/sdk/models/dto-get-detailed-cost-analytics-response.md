# DtoGetDetailedCostAnalyticsResponse

## Example Usage

```typescript
import { DtoGetDetailedCostAnalyticsResponse } from "@flexprice/sdk/sdk/models";

let value: DtoGetDetailedCostAnalyticsResponse = {};
```

## Fields

| Field                                                                      | Type                                                                       | Required                                                                   | Description                                                                |
| -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- |
| `costAnalytics`                                                            | [models.DtoCostAnalyticItem](../../sdk/models/dto-cost-analytic-item.md)[] | :heavy_minus_sign:                                                         | Cost analytics array (flattened from nested structure)                     |
| `currency`                                                                 | *string*                                                                   | :heavy_minus_sign:                                                         | N/A                                                                        |
| `endTime`                                                                  | *string*                                                                   | :heavy_minus_sign:                                                         | N/A                                                                        |
| `margin`                                                                   | *string*                                                                   | :heavy_minus_sign:                                                         | Revenue - Cost                                                             |
| `marginPercent`                                                            | *string*                                                                   | :heavy_minus_sign:                                                         | (Margin / Revenue) * 100                                                   |
| `roi`                                                                      | *string*                                                                   | :heavy_minus_sign:                                                         | (Revenue - Cost) / Cost                                                    |
| `roiPercent`                                                               | *string*                                                                   | :heavy_minus_sign:                                                         | ROI * 100                                                                  |
| `startTime`                                                                | *string*                                                                   | :heavy_minus_sign:                                                         | N/A                                                                        |
| `totalCost`                                                                | *string*                                                                   | :heavy_minus_sign:                                                         | N/A                                                                        |
| `totalRevenue`                                                             | *string*                                                                   | :heavy_minus_sign:                                                         | Derived metrics                                                            |