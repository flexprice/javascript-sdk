# CancelSubscriptionResponse

## Example Usage

```typescript
import { CancelSubscriptionResponse } from "@flexprice/sdk/sdk/models";

let value: CancelSubscriptionResponse = {
  prorationInvoice: {
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
      entitlements: [
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
          entitlements: [
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
          plan: {},
        },
      },
      plan: {},
    },
  },
};
```

## Fields

| Field                                                                                         | Type                                                                                          | Required                                                                                      | Description                                                                                   |
| --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| `cancellationType`                                                                            | [models.CancellationType](../../sdk/models/cancellation-type.md)                              | :heavy_minus_sign:                                                                            | N/A                                                                                           |
| `effectiveDate`                                                                               | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_minus_sign:                                                                            | N/A                                                                                           |
| `message`                                                                                     | *string*                                                                                      | :heavy_minus_sign:                                                                            | Response metadata                                                                             |
| `processedAt`                                                                                 | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_minus_sign:                                                                            | N/A                                                                                           |
| `prorationDetails`                                                                            | [models.ProrationDetail](../../sdk/models/proration-detail.md)[]                              | :heavy_minus_sign:                                                                            | N/A                                                                                           |
| `prorationInvoice`                                                                            | [models.InvoiceResponse](../../sdk/models/invoice-response.md)                                | :heavy_minus_sign:                                                                            | N/A                                                                                           |
| `reason`                                                                                      | *string*                                                                                      | :heavy_minus_sign:                                                                            | N/A                                                                                           |
| `status`                                                                                      | [models.SubscriptionStatus](../../sdk/models/subscription-status.md)                          | :heavy_minus_sign:                                                                            | N/A                                                                                           |
| `subscriptionId`                                                                              | *string*                                                                                      | :heavy_minus_sign:                                                                            | Basic cancellation info                                                                       |
| `totalCreditAmount`                                                                           | *string*                                                                                      | :heavy_minus_sign:                                                                            | N/A                                                                                           |