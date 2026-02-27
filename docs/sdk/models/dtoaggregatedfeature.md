# DtoAggregatedFeature

## Example Usage

```typescript
import { DtoAggregatedFeature } from "@flexprice/sdk/sdk/models";

let value: DtoAggregatedFeature = {
  feature: {
    meter: {
      createdAt: "2024-03-20T15:04:05Z",
      eventName: "api_request",
      id: "550e8400-e29b-41d4-a716-446655440000",
      name: "API Usage Meter",
      status: "published",
      tenantId: "tenant123",
      updatedAt: "2024-03-20T15:04:05Z",
    },
  },
};
```

## Fields

| Field                                                                           | Type                                                                            | Required                                                                        | Description                                                                     |
| ------------------------------------------------------------------------------- | ------------------------------------------------------------------------------- | ------------------------------------------------------------------------------- | ------------------------------------------------------------------------------- |
| `entitlement`                                                                   | [models.DtoAggregatedEntitlement](../../sdk/models/dtoaggregatedentitlement.md) | :heavy_minus_sign:                                                              | N/A                                                                             |
| `feature`                                                                       | [models.DtoFeatureResponse](../../sdk/models/dtofeatureresponse.md)             | :heavy_minus_sign:                                                              | N/A                                                                             |
| `sources`                                                                       | [models.DtoEntitlementSource](../../sdk/models/dtoentitlementsource.md)[]       | :heavy_minus_sign:                                                              | N/A                                                                             |