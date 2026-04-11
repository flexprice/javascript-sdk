# MeterUsageAnalyticsResponse

## Example Usage

```typescript
import { MeterUsageAnalyticsResponse } from "@flexprice/sdk/sdk/models";

let value: MeterUsageAnalyticsResponse = {
  items: [
    {
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
    },
  ],
};
```

## Fields

| Field                                                                              | Type                                                                               | Required                                                                           | Description                                                                        |
| ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- |
| `items`                                                                            | [models.MeterUsageQueryResponse](../../sdk/models/meter-usage-query-response.md)[] | :heavy_minus_sign:                                                                 | N/A                                                                                |