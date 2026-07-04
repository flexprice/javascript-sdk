# ListInvoicesResponse

## Example Usage

```typescript
import { ListInvoicesResponse } from "@flexprice/sdk/sdk/models";

let value: ListInvoicesResponse = {
  items: [
    {
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
  ],
};
```

## Fields

| Field                                                                | Type                                                                 | Required                                                             | Description                                                          |
| -------------------------------------------------------------------- | -------------------------------------------------------------------- | -------------------------------------------------------------------- | -------------------------------------------------------------------- |
| `items`                                                              | [models.InvoiceResponse](../../sdk/models/invoice-response.md)[]     | :heavy_minus_sign:                                                   | N/A                                                                  |
| `pagination`                                                         | [models.PaginationResponse](../../sdk/models/pagination-response.md) | :heavy_minus_sign:                                                   | N/A                                                                  |