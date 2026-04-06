# FeatureUsageSummary

## Example Usage

```typescript
import { FeatureUsageSummary } from "@flexprice/sdk/sdk/models";

let value: FeatureUsageSummary = {
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

| Field                                                                                         | Type                                                                                          | Required                                                                                      | Description                                                                                   |
| --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| `currentUsage`                                                                                | *string*                                                                                      | :heavy_minus_sign:                                                                            | N/A                                                                                           |
| `feature`                                                                                     | [models.Feature1](../../sdk/models/feature1.md)                                               | :heavy_minus_sign:                                                                            | N/A                                                                                           |
| `isEnabled`                                                                                   | *boolean*                                                                                     | :heavy_minus_sign:                                                                            | N/A                                                                                           |
| `isSoftLimit`                                                                                 | *boolean*                                                                                     | :heavy_minus_sign:                                                                            | N/A                                                                                           |
| `isUnlimited`                                                                                 | *boolean*                                                                                     | :heavy_minus_sign:                                                                            | N/A                                                                                           |
| `nextUsageResetAt`                                                                            | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_minus_sign:                                                                            | N/A                                                                                           |
| `sources`                                                                                     | [models.EntitlementSource](../../sdk/models/entitlement-source.md)[]                          | :heavy_minus_sign:                                                                            | N/A                                                                                           |
| `totalLimit`                                                                                  | *number*                                                                                      | :heavy_minus_sign:                                                                            | N/A                                                                                           |
| `usagePercent`                                                                                | *string*                                                                                      | :heavy_minus_sign:                                                                            | N/A                                                                                           |