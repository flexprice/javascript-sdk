# WebhookDtoSpendAlertEvent

## Example Usage

```typescript
import { WebhookDtoSpendAlertEvent } from "@flexprice/sdk/sdk/models";

let value: WebhookDtoSpendAlertEvent = {
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
};
```

## Fields

| Field                                                                                              | Type                                                                                               | Required                                                                                           | Description                                                                                        |
| -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- |
| `alertSettings`                                                                                    | [models.AlertSettings](../../sdk/models/alert-settings.md)                                         | :heavy_minus_sign:                                                                                 | N/A                                                                                                |
| `alertStatus`                                                                                      | [models.AlertState](../../sdk/models/alert-state.md)                                               | :heavy_minus_sign:                                                                                 | N/A                                                                                                |
| `alertType`                                                                                        | [models.AlertType](../../sdk/models/alert-type.md)                                                 | :heavy_minus_sign:                                                                                 | N/A                                                                                                |
| `currentSpend`                                                                                     | *string*                                                                                           | :heavy_minus_sign:                                                                                 | N/A                                                                                                |
| `group`                                                                                            | [models.GroupResponse](../../sdk/models/group-response.md)                                         | :heavy_minus_sign:                                                                                 | N/A                                                                                                |
| `subscription`                                                                                     | [models.SubscriptionResponse](../../sdk/models/subscription-response.md)                           | :heavy_minus_sign:                                                                                 | N/A                                                                                                |
| `subscriptionLineItem`                                                                             | [models.SubscriptionSubscriptionLineItem](../../sdk/models/subscription-subscription-line-item.md) | :heavy_minus_sign:                                                                                 | N/A                                                                                                |
| `triggeredAt`                                                                                      | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)      | :heavy_minus_sign:                                                                                 | N/A                                                                                                |