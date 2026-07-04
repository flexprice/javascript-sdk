# ChangedInvoice

## Example Usage

```typescript
import { ChangedInvoice } from "@flexprice/sdk/sdk/models";

let value: ChangedInvoice = {
  invoice: {
    subscription: {
      couponAssociations: [
        {
          subscriptionLineItem: {
            price: {
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
          },
        },
      ],
      latestInvoice: {
        subscription: {
          couponAssociations: [
            {
              subscriptionLineItem: {
                price: {
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
              },
            },
          ],
          plan: {},
        },
      },
      plan: {},
    },
  },
};
```

## Fields

| Field                                                                                                               | Type                                                                                                                | Required                                                                                                            | Description                                                                                                         |
| ------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------- |
| `action`                                                                                                            | [models.ChangedInvoiceAction](../../sdk/models/changed-invoice-action.md)                                           | :heavy_minus_sign:                                                                                                  | created (proration invoice) \| wallet_credit (downgrade credit)                                                     |
| `id`                                                                                                                | *string*                                                                                                            | :heavy_minus_sign:                                                                                                  | N/A                                                                                                                 |
| `invoice`                                                                                                           | [models.InvoiceResponse](../../sdk/models/invoice-response.md)                                                      | :heavy_minus_sign:                                                                                                  | N/A                                                                                                                 |
| `status`                                                                                                            | [models.ChangedInvoiceStatus](../../sdk/models/changed-invoice-status.md)                                           | :heavy_minus_sign:                                                                                                  | preview \| issued \| INITIATED \| PENDING \| PROCESSING \| SUCCEEDED \| OVERPAID \| FAILED \| REFUNDED \| PARTIALLY_REFUNDED |
| `walletTransaction`                                                                                                 | [models.WalletTransactionResponse](../../sdk/models/wallet-transaction-response.md)                                 | :heavy_minus_sign:                                                                                                  | N/A                                                                                                                 |