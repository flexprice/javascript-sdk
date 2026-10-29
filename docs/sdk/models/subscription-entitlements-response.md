# SubscriptionEntitlementsResponse

## Example Usage

```typescript
import { SubscriptionEntitlementsResponse } from "@flexprice/sdk/sdk/models";

let value: SubscriptionEntitlementsResponse = {
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
  subscriptionEntitlementGrants: {
    entitlements: [
      {
        addon: {
          prices: [
            {
              addon: {},
              meter: {
                createdAt: new Date("2024-03-20T15:04:05Z"),
                eventName: "api_request",
                id: "550e8400-e29b-41d4-a716-446655440000",
                name: "API Usage Meter",
                status: "published",
                tenantId: "tenant123",
                updatedAt: new Date("2024-03-20T15:04:05Z"),
              },
              plan: {},
            },
          ],
        },
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
        plan: {},
      },
    ],
  },
};
```

## Fields

| Field                                                                                                        | Type                                                                                                         | Required                                                                                                     | Description                                                                                                  |
| ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ |
| `features`                                                                                                   | [models.AggregatedFeature](../../sdk/models/aggregated-feature.md)[]                                         | :heavy_minus_sign:                                                                                           | N/A                                                                                                          |
| `planId`                                                                                                     | *string*                                                                                                     | :heavy_minus_sign:                                                                                           | N/A                                                                                                          |
| `subscriptionEntitlementGrants`                                                                              | [models.SubscriptionEntitlementGrantsResponse](../../sdk/models/subscription-entitlement-grants-response.md) | :heavy_minus_sign:                                                                                           | N/A                                                                                                          |
| `subscriptionId`                                                                                             | *string*                                                                                                     | :heavy_minus_sign:                                                                                           | N/A                                                                                                          |