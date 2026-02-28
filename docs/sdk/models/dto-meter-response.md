# DtoMeterResponse

## Example Usage

```typescript
import { DtoMeterResponse } from "@flexprice/sdk/sdk/models";

let value: DtoMeterResponse = {
  createdAt: "2024-03-20T15:04:05Z",
  eventName: "api_request",
  id: "550e8400-e29b-41d4-a716-446655440000",
  name: "API Usage Meter",
  status: "published",
  tenantId: "tenant123",
  updatedAt: "2024-03-20T15:04:05Z",
};
```

## Fields

| Field                                                            | Type                                                             | Required                                                         | Description                                                      | Example                                                          |
| ---------------------------------------------------------------- | ---------------------------------------------------------------- | ---------------------------------------------------------------- | ---------------------------------------------------------------- | ---------------------------------------------------------------- |
| `aggregation`                                                    | [models.MeterAggregation](../../sdk/models/meter-aggregation.md) | :heavy_minus_sign:                                               | N/A                                                              |                                                                  |
| `createdAt`                                                      | *string*                                                         | :heavy_minus_sign:                                               | N/A                                                              | 2024-03-20T15:04:05Z                                             |
| `eventName`                                                      | *string*                                                         | :heavy_minus_sign:                                               | N/A                                                              | api_request                                                      |
| `filters`                                                        | [models.MeterFilter](../../sdk/models/meter-filter.md)[]         | :heavy_minus_sign:                                               | N/A                                                              |                                                                  |
| `id`                                                             | *string*                                                         | :heavy_minus_sign:                                               | N/A                                                              | 550e8400-e29b-41d4-a716-446655440000                             |
| `name`                                                           | *string*                                                         | :heavy_minus_sign:                                               | N/A                                                              | API Usage Meter                                                  |
| `resetUsage`                                                     | [models.ResetUsage](../../sdk/models/reset-usage.md)             | :heavy_minus_sign:                                               | N/A                                                              |                                                                  |
| `status`                                                         | *string*                                                         | :heavy_minus_sign:                                               | N/A                                                              | published                                                        |
| `tenantId`                                                       | *string*                                                         | :heavy_minus_sign:                                               | N/A                                                              | tenant123                                                        |
| `updatedAt`                                                      | *string*                                                         | :heavy_minus_sign:                                               | N/A                                                              | 2024-03-20T15:04:05Z                                             |