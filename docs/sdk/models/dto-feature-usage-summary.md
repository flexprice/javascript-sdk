# DtoFeatureUsageSummary

## Example Usage

```typescript
import { DtoFeatureUsageSummary } from "@flexprice/sdk/sdk/models";

let value: DtoFeatureUsageSummary = {
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

| Field                                                                       | Type                                                                        | Required                                                                    | Description                                                                 |
| --------------------------------------------------------------------------- | --------------------------------------------------------------------------- | --------------------------------------------------------------------------- | --------------------------------------------------------------------------- |
| `currentUsage`                                                              | *string*                                                                    | :heavy_minus_sign:                                                          | N/A                                                                         |
| `feature`                                                                   | [models.DtoFeatureResponse](../../sdk/models/dto-feature-response.md)       | :heavy_minus_sign:                                                          | N/A                                                                         |
| `isEnabled`                                                                 | *boolean*                                                                   | :heavy_minus_sign:                                                          | N/A                                                                         |
| `isSoftLimit`                                                               | *boolean*                                                                   | :heavy_minus_sign:                                                          | N/A                                                                         |
| `isUnlimited`                                                               | *boolean*                                                                   | :heavy_minus_sign:                                                          | N/A                                                                         |
| `nextUsageResetAt`                                                          | *string*                                                                    | :heavy_minus_sign:                                                          | N/A                                                                         |
| `sources`                                                                   | [models.DtoEntitlementSource](../../sdk/models/dto-entitlement-source.md)[] | :heavy_minus_sign:                                                          | N/A                                                                         |
| `totalLimit`                                                                | *number*                                                                    | :heavy_minus_sign:                                                          | N/A                                                                         |
| `usagePercent`                                                              | *string*                                                                    | :heavy_minus_sign:                                                          | N/A                                                                         |