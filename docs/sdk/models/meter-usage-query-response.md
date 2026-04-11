# MeterUsageQueryResponse

## Example Usage

```typescript
import { MeterUsageQueryResponse } from "@flexprice/sdk/sdk/models";

let value: MeterUsageQueryResponse = {
  eventCount: 42,
  meterId: "mtr_abc",
  points: [
    {
      eventCount: 10,
      timestamp: "2024-01-01T00:00:00Z",
      value: "100.0000",
    },
  ],
  totalValue: "1234.5678",
};
```

## Fields

| Field                                                             | Type                                                              | Required                                                          | Description                                                       | Example                                                           |
| ----------------------------------------------------------------- | ----------------------------------------------------------------- | ----------------------------------------------------------------- | ----------------------------------------------------------------- | ----------------------------------------------------------------- |
| `aggregationType`                                                 | [models.AggregationType](../../sdk/models/aggregation-type.md)    | :heavy_minus_sign:                                                | N/A                                                               |                                                                   |
| `eventCount`                                                      | *number*                                                          | :heavy_minus_sign:                                                | N/A                                                               | 42                                                                |
| `meterId`                                                         | *string*                                                          | :heavy_minus_sign:                                                | N/A                                                               | mtr_abc                                                           |
| `points`                                                          | [models.MeterUsagePoint](../../sdk/models/meter-usage-point.md)[] | :heavy_minus_sign:                                                | N/A                                                               |                                                                   |
| `totalValue`                                                      | *string*                                                          | :heavy_minus_sign:                                                | N/A                                                               | 1234.5678                                                         |