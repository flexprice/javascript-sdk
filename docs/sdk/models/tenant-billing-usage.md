# TenantBillingUsage

## Example Usage

```typescript
import { TenantBillingUsage } from "@flexprice/sdk/sdk/models";

let value: TenantBillingUsage = {
  subscriptions: [
    {
      latestInvoice: {
        subscription: {
          plan: {},
        },
      },
      plan: {},
    },
  ],
  usage: {
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
  },
};
```

## Fields

| Field                                                                                      | Type                                                                                       | Required                                                                                   | Description                                                                                |
| ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ |
| `subscriptions`                                                                            | [models.SubscriptionResponse](../../sdk/models/subscription-response.md)[]                 | :heavy_minus_sign:                                                                         | N/A                                                                                        |
| `usage`                                                                                    | [models.CustomerUsageSummaryResponse](../../sdk/models/customer-usage-summary-response.md) | :heavy_minus_sign:                                                                         | N/A                                                                                        |