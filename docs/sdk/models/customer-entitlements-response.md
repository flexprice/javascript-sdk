# CustomerEntitlementsResponse

## Example Usage

```typescript
import { CustomerEntitlementsResponse } from "@flexprice/sdk/sdk/models";

let value: CustomerEntitlementsResponse = {
  features: [
    {
      feature: {
        meter: {
          createdAt: new Date("2024-03-20T15:04:05Z"),
          eventName: "api_request",
          id: "550e8400-e29b-41d4-a716-446655440000",
          name: "API Usage Meter",
          status: "published",
          tenantId: "tenant123",
          updatedAt: new Date("2024-03-20T15:04:05Z"),
        },
      },
    },
  ],
};
```

## Fields

| Field                                                                | Type                                                                 | Required                                                             | Description                                                          |
| -------------------------------------------------------------------- | -------------------------------------------------------------------- | -------------------------------------------------------------------- | -------------------------------------------------------------------- |
| `customerId`                                                         | *string*                                                             | :heavy_minus_sign:                                                   | N/A                                                                  |
| `features`                                                           | [models.AggregatedFeature](../../sdk/models/aggregated-feature.md)[] | :heavy_minus_sign:                                                   | N/A                                                                  |