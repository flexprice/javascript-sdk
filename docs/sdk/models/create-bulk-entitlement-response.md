# CreateBulkEntitlementResponse

## Example Usage

```typescript
import { CreateBulkEntitlementResponse } from "@flexprice/sdk/sdk/models";

let value: CreateBulkEntitlementResponse = {
  items: [
    {
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
      plan: {},
    },
  ],
};
```

## Fields

| Field                                                                    | Type                                                                     | Required                                                                 | Description                                                              |
| ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ |
| `items`                                                                  | [models.EntitlementResponse](../../sdk/models/entitlement-response.md)[] | :heavy_minus_sign:                                                       | N/A                                                                      |