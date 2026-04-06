# CustomerUsageSummaryResponse

## Example Usage

```typescript
import { CustomerUsageSummaryResponse } from "@flexprice/sdk/sdk/models";

let value: CustomerUsageSummaryResponse = {
  features: [
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
};
```

## Fields

| Field                                                                     | Type                                                                      | Required                                                                  | Description                                                               |
| ------------------------------------------------------------------------- | ------------------------------------------------------------------------- | ------------------------------------------------------------------------- | ------------------------------------------------------------------------- |
| `customerId`                                                              | *string*                                                                  | :heavy_minus_sign:                                                        | N/A                                                                       |
| `features`                                                                | [models.FeatureUsageSummary](../../sdk/models/feature-usage-summary.md)[] | :heavy_minus_sign:                                                        | N/A                                                                       |
| `pagination`                                                              | [models.PaginationResponse](../../sdk/models/pagination-response.md)      | :heavy_minus_sign:                                                        | N/A                                                                       |
| `period`                                                                  | [models.BillingPeriodInfo](../../sdk/models/billing-period-info.md)       | :heavy_minus_sign:                                                        | N/A                                                                       |