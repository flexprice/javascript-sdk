# DtoListAddonsResponse

## Example Usage

```typescript
import { DtoListAddonsResponse } from "@flexprice/sdk/sdk/models";

let value: DtoListAddonsResponse = {
  items: [
    {
      entitlements: [
        {
          addon: {
            prices: [
              {
                addon: {},
                meter: {
                  createdAt: "2024-03-20T15:04:05Z",
                  eventName: "api_request",
                  id: "550e8400-e29b-41d4-a716-446655440000",
                  name: "API Usage Meter",
                  status: "published",
                  tenantId: "tenant123",
                  updatedAt: "2024-03-20T15:04:05Z",
                },
                plan: {},
              },
            ],
          },
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
          plan: {},
        },
      ],
      prices: [
        {
          addon: {},
          meter: {
            createdAt: "2024-03-20T15:04:05Z",
            eventName: "api_request",
            id: "550e8400-e29b-41d4-a716-446655440000",
            name: "API Usage Meter",
            status: "published",
            tenantId: "tenant123",
            updatedAt: "2024-03-20T15:04:05Z",
          },
          plan: {},
        },
      ],
    },
  ],
};
```

## Fields

| Field                                                               | Type                                                                | Required                                                            | Description                                                         |
| ------------------------------------------------------------------- | ------------------------------------------------------------------- | ------------------------------------------------------------------- | ------------------------------------------------------------------- |
| `items`                                                             | [models.DtoAddonResponse](../../sdk/models/dtoaddonresponse.md)[]   | :heavy_minus_sign:                                                  | N/A                                                                 |
| `pagination`                                                        | [models.PaginationResponse](../../sdk/models/paginationresponse.md) | :heavy_minus_sign:                                                  | N/A                                                                 |