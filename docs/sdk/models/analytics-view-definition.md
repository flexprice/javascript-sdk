# AnalyticsViewDefinition

## Example Usage

```typescript
import { AnalyticsViewDefinition } from "@flexprice/sdk/sdk/models";

let value: AnalyticsViewDefinition = {
  metrics: [
    "event_count",
  ],
  shape: "breakdown",
};
```

## Fields

| Field                                                                      | Type                                                                       | Required                                                                   | Description                                                                |
| -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- |
| `dimensions`                                                               | *string*[]                                                                 | :heavy_minus_sign:                                                         | N/A                                                                        |
| `filters`                                                                  | [models.AnalyticsFilter](../../sdk/models/analytics-filter.md)[]           | :heavy_minus_sign:                                                         | N/A                                                                        |
| `limit`                                                                    | *number*                                                                   | :heavy_minus_sign:                                                         | N/A                                                                        |
| `metrics`                                                                  | [models.Metric](../../sdk/models/metric.md)[]                              | :heavy_check_mark:                                                         | N/A                                                                        |
| `shape`                                                                    | [models.Shape](../../sdk/models/shape.md)                                  | :heavy_check_mark:                                                         | N/A                                                                        |
| `sort`                                                                     | [models.AnalyticsSortSpec](../../sdk/models/analytics-sort-spec.md)[]      | :heavy_minus_sign:                                                         | N/A                                                                        |
| `time`                                                                     | [models.AnalyticsTimeSpecRaw](../../sdk/models/analytics-time-spec-raw.md) | :heavy_minus_sign:                                                         | N/A                                                                        |
| `variables`                                                                | [models.AnalyticsVariable](../../sdk/models/analytics-variable.md)[]       | :heavy_minus_sign:                                                         | N/A                                                                        |