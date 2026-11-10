# GetUsageAnalyticsResponse

## Example Usage

```typescript
import { GetUsageAnalyticsResponse } from "@flexprice/sdk/sdk/models";

let value: GetUsageAnalyticsResponse = {
  items: [
    {
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
  ],
};
```

## Fields

| Field                                                                                                                                                                                                                      | Type                                                                                                                                                                                                                       | Required                                                                                                                                                                                                                   | Description                                                                                                                                                                                                                |
| -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `currency`                                                                                                                                                                                                                 | *string*                                                                                                                                                                                                                   | :heavy_minus_sign:                                                                                                                                                                                                         | N/A                                                                                                                                                                                                                        |
| `customAnalytics`                                                                                                                                                                                                          | [models.CustomAnalyticItem](../../sdk/models/custom-analytic-item.md)[]                                                                                                                                                    | :heavy_minus_sign:                                                                                                                                                                                                         | N/A                                                                                                                                                                                                                        |
| `instalments`                                                                                                                                                                                                              | [models.UsageAnalyticInstalment](../../sdk/models/usage-analytic-instalment.md)[]                                                                                                                                          | :heavy_minus_sign:                                                                                                                                                                                                         | Instalments lists, with expand "instalments", the instalments invoiced in the range for the v2 commitments covering<br/>a queried meter; it is empty with property or source filters, or when no usage line runs in the range. |
| `items`                                                                                                                                                                                                                    | [models.UsageAnalyticItem](../../sdk/models/usage-analytic-item.md)[]                                                                                                                                                      | :heavy_minus_sign:                                                                                                                                                                                                         | N/A                                                                                                                                                                                                                        |
| `subtotal`                                                                                                                                                                                                                 | *string*                                                                                                                                                                                                                   | :heavy_minus_sign:                                                                                                                                                                                                         | N/A                                                                                                                                                                                                                        |
| `totalCost`                                                                                                                                                                                                                | *string*                                                                                                                                                                                                                   | :heavy_minus_sign:                                                                                                                                                                                                         | TotalCost is the final cost after discount (Subtotal - TotalDiscount)                                                                                                                                                      |
| `totalCostWithInstalments`                                                                                                                                                                                                 | *string*                                                                                                                                                                                                                   | :heavy_minus_sign:                                                                                                                                                                                                         | TotalCostWithInstalments is TotalCost plus the amounts of Instalments, set when expand includes "instalments".                                                                                                             |
| `totalDiscount`                                                                                                                                                                                                            | *string*                                                                                                                                                                                                                   | :heavy_minus_sign:                                                                                                                                                                                                         | N/A                                                                                                                                                                                                                        |