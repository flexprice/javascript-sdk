# SelfBillingSummaryResponse

## Example Usage

```typescript
import { SelfBillingSummaryResponse } from "@flexprice/sdk/sdk/models";

let value: SelfBillingSummaryResponse = {
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

| Field                                                                                         | Type                                                                                          | Required                                                                                      | Description                                                                                   |
| --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| `invoices`                                                                                    | [models.SelfBillingInvoice](../../sdk/models/self-billing-invoice.md)[]                       | :heavy_minus_sign:                                                                            | N/A                                                                                           |
| `plan`                                                                                        | [models.SelfBillingPlanResponse](../../sdk/models/self-billing-plan-response.md)              | :heavy_minus_sign:                                                                            | N/A                                                                                           |
| `status`                                                                                      | [models.TenantInternalStatus](../../sdk/models/tenant-internal-status.md)                     | :heavy_minus_sign:                                                                            | N/A                                                                                           |
| `subscriptionStatus`                                                                          | [models.SubscriptionStatus](../../sdk/models/subscription-status.md)                          | :heavy_minus_sign:                                                                            | N/A                                                                                           |
| `trialEndsAt`                                                                                 | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_minus_sign:                                                                            | N/A                                                                                           |
| `usage`                                                                                       | [models.CustomerUsageSummaryResponse](../../sdk/models/customer-usage-summary-response.md)    | :heavy_minus_sign:                                                                            | N/A                                                                                           |