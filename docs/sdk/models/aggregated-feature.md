# AggregatedFeature

## Example Usage

```typescript
import { AggregatedFeature } from "@flexprice/sdk/sdk/models";

let value: AggregatedFeature = {
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
};
```

## Fields

| Field                                                                      | Type                                                                       | Required                                                                   | Description                                                                |
| -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- |
| `entitlement`                                                              | [models.AggregatedEntitlement](../../sdk/models/aggregated-entitlement.md) | :heavy_minus_sign:                                                         | N/A                                                                        |
| `feature`                                                                  | [models.FeatureResponse](../../sdk/models/feature-response.md)             | :heavy_minus_sign:                                                         | N/A                                                                        |
| `sources`                                                                  | [models.EntitlementSource](../../sdk/models/entitlement-source.md)[]       | :heavy_minus_sign:                                                         | N/A                                                                        |