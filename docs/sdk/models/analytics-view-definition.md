# AnalyticsViewDefinition

## Example Usage

```typescript
import { AnalyticsViewDefinition } from "@flexprice/sdk/sdk/models";

let value: AnalyticsViewDefinition = {
  metrics: [
    "arpu_paid",
  ],
  shape: "breakdown",
};
```

## Fields

| Field                                                                                          | Type                                                                                           | Required                                                                                       | Description                                                                                    |
| ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- |
| `compare`                                                                                      | [models.AnalyticsViewDefinitionCompare](../../sdk/models/analytics-view-definition-compare.md) | :heavy_minus_sign:                                                                             | N/A                                                                                            |
| `currency`                                                                                     | *string*                                                                                       | :heavy_minus_sign:                                                                             | N/A                                                                                            |
| `dimensions`                                                                                   | *string*[]                                                                                     | :heavy_minus_sign:                                                                             | N/A                                                                                            |
| `display`                                                                                      | [models.Display](../../sdk/models/display.md)                                                  | :heavy_minus_sign:                                                                             | N/A                                                                                            |
| `family`                                                                                       | [models.Family](../../sdk/models/family.md)                                                    | :heavy_minus_sign:                                                                             | N/A                                                                                            |
| `filters`                                                                                      | [models.AnalyticsFilter](../../sdk/models/analytics-filter.md)[]                               | :heavy_minus_sign:                                                                             | N/A                                                                                            |
| `limit`                                                                                        | *number*                                                                                       | :heavy_minus_sign:                                                                             | N/A                                                                                            |
| `metrics`                                                                                      | [models.Metric](../../sdk/models/metric.md)[]                                                  | :heavy_check_mark:                                                                             | N/A                                                                                            |
| `shape`                                                                                        | [models.Shape](../../sdk/models/shape.md)                                                      | :heavy_check_mark:                                                                             | N/A                                                                                            |
| `sort`                                                                                         | [models.AnalyticsSortSpec](../../sdk/models/analytics-sort-spec.md)[]                          | :heavy_minus_sign:                                                                             | N/A                                                                                            |
| `time`                                                                                         | [models.AnalyticsTimeSpecRaw](../../sdk/models/analytics-time-spec-raw.md)                     | :heavy_minus_sign:                                                                             | N/A                                                                                            |
| `variables`                                                                                    | [models.AnalyticsVariable](../../sdk/models/analytics-variable.md)[]                           | :heavy_minus_sign:                                                                             | N/A                                                                                            |