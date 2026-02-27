# DtoTenantBillingUsage

## Example Usage

```typescript
import { DtoTenantBillingUsage } from "@flexprice/sdk/sdk/models";

let value: DtoTenantBillingUsage = {
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
            createdAt: "2024-03-20T15:04:05Z",
            eventName: "api_request",
            id: "550e8400-e29b-41d4-a716-446655440000",
            name: "API Usage Meter",
            status: "published",
            tenantId: "tenant123",
            updatedAt: "2024-03-20T15:04:05Z",
          },
        },
      },
    ],
  },
};
```

## Fields

| Field                                                                                         | Type                                                                                          | Required                                                                                      | Description                                                                                   |
| --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| `subscriptions`                                                                               | [models.DtoSubscriptionResponse](../../sdk/models/dtosubscriptionresponse.md)[]               | :heavy_minus_sign:                                                                            | N/A                                                                                           |
| `usage`                                                                                       | [models.DtoCustomerUsageSummaryResponse](../../sdk/models/dtocustomerusagesummaryresponse.md) | :heavy_minus_sign:                                                                            | N/A                                                                                           |