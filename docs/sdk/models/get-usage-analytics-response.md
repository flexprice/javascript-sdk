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

| Field                                                                                                                                                                                       | Type                                                                                                                                                                                        | Required                                                                                                                                                                                    | Description                                                                                                                                                                                 |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `currency`                                                                                                                                                                                  | *string*                                                                                                                                                                                    | :heavy_minus_sign:                                                                                                                                                                          | N/A                                                                                                                                                                                         |
| `customAnalytics`                                                                                                                                                                           | [models.CustomAnalyticItem](../../sdk/models/custom-analytic-item.md)[]                                                                                                                     | :heavy_minus_sign:                                                                                                                                                                          | N/A                                                                                                                                                                                         |
| `instalments`                                                                                                                                                                               | [models.UsageAnalyticInstalment](../../sdk/models/usage-analytic-instalment.md)[]                                                                                                           | :heavy_minus_sign:                                                                                                                                                                          | Instalments lists the commitment instalments in the range with expand "instalments": start <= bill_on < end,<br/>or start < bill_on <= end for an ARREAR one.                               |
| `items`                                                                                                                                                                                     | [models.UsageAnalyticItem](../../sdk/models/usage-analytic-item.md)[]                                                                                                                       | :heavy_minus_sign:                                                                                                                                                                          | N/A                                                                                                                                                                                         |
| `subtotal`                                                                                                                                                                                  | *string*                                                                                                                                                                                    | :heavy_minus_sign:                                                                                                                                                                          | N/A                                                                                                                                                                                         |
| `totalCost`                                                                                                                                                                                 | *string*                                                                                                                                                                                    | :heavy_minus_sign:                                                                                                                                                                          | TotalCost is the final cost after discount (Subtotal - TotalDiscount)                                                                                                                       |
| `totalCostWithInstalments`                                                                                                                                                                  | *string*                                                                                                                                                                                    | :heavy_minus_sign:                                                                                                                                                                          | TotalCostWithInstalments is TotalCost plus the amounts of the invoiced Instalments, set when expand includes<br/>"instalments". Scheduled instalments are not billed yet, so they are left out. |
| `totalDiscount`                                                                                                                                                                             | *string*                                                                                                                                                                                    | :heavy_minus_sign:                                                                                                                                                                          | N/A                                                                                                                                                                                         |