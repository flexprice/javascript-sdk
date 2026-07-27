# WebhookDtoCreditNoteWebhookPayload

## Example Usage

```typescript
import { WebhookDtoCreditNoteWebhookPayload } from "@flexprice/sdk/sdk/models";

let value: WebhookDtoCreditNoteWebhookPayload = {
  creditNote: {
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

| Field                                                                 | Type                                                                  | Required                                                              | Description                                                           |
| --------------------------------------------------------------------- | --------------------------------------------------------------------- | --------------------------------------------------------------------- | --------------------------------------------------------------------- |
| `creditNote`                                                          | [models.CreditNoteResponse](../../sdk/models/credit-note-response.md) | :heavy_minus_sign:                                                    | N/A                                                                   |
| `eventType`                                                           | [models.WebhookEventName](../../sdk/models/webhook-event-name.md)     | :heavy_minus_sign:                                                    | N/A                                                                   |