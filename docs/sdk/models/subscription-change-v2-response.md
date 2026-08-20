# SubscriptionChangeV2Response

## Example Usage

```typescript
import { SubscriptionChangeV2Response } from "@flexprice/sdk/sdk/models";

let value: SubscriptionChangeV2Response = {
  changedResources: {
    invoices: [
      {
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
      },
    ],
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
};
```

## Fields

| Field                                                                                                    | Type                                                                                                     | Required                                                                                                 | Description                                                                                              |
| -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- |
| `changeType`                                                                                             | [models.SubscriptionChangeType](../../sdk/models/subscription-change-type.md)                            | :heavy_minus_sign:                                                                                       | N/A                                                                                                      |
| `changedResources`                                                                                       | [models.ChangedResources](../../sdk/models/changed-resources.md)                                         | :heavy_minus_sign:                                                                                       | N/A                                                                                                      |
| `effectiveAt`                                                                                            | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)            | :heavy_minus_sign:                                                                                       | N/A                                                                                                      |
| `entityChanges`                                                                                          | [models.EntityChangeResult](../../sdk/models/entity-change-result.md)[]                                  | :heavy_minus_sign:                                                                                       | N/A                                                                                                      |
| `fromPlan`                                                                                               | [models.PlanSummary](../../sdk/models/plan-summary.md)                                                   | :heavy_minus_sign:                                                                                       | N/A                                                                                                      |
| `isScheduled`                                                                                            | *boolean*                                                                                                | :heavy_minus_sign:                                                                                       | IsScheduled is true when the change was deferred to the period end instead<br/>of being applied immediately. |
| `metadata`                                                                                               | Record<string, *string*>                                                                                 | :heavy_minus_sign:                                                                                       | N/A                                                                                                      |
| `scheduleId`                                                                                             | *string*                                                                                                 | :heavy_minus_sign:                                                                                       | N/A                                                                                                      |
| `scheduledAt`                                                                                            | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)            | :heavy_minus_sign:                                                                                       | N/A                                                                                                      |
| `subscription`                                                                                           | [models.SubscriptionResponse](../../sdk/models/subscription-response.md)                                 | :heavy_minus_sign:                                                                                       | N/A                                                                                                      |
| `toPlan`                                                                                                 | [models.PlanSummary](../../sdk/models/plan-summary.md)                                                   | :heavy_minus_sign:                                                                                       | N/A                                                                                                      |
| `warnings`                                                                                               | *string*[]                                                                                               | :heavy_minus_sign:                                                                                       | N/A                                                                                                      |