# DtoCustomerUsageSummaryResponse

## Example Usage

```typescript
import { DtoCustomerUsageSummaryResponse } from "@flexprice/sdk/sdk/models";

let value: DtoCustomerUsageSummaryResponse = {
  features: [
    {
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
    },
  ],
};
```

## Fields

| Field                                                                            | Type                                                                             | Required                                                                         | Description                                                                      |
| -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- |
| `customerId`                                                                     | *string*                                                                         | :heavy_minus_sign:                                                               | N/A                                                                              |
| `features`                                                                       | [models.DtoFeatureUsageSummary](../../sdk/models/dto-feature-usage-summary.md)[] | :heavy_minus_sign:                                                               | N/A                                                                              |
| `pagination`                                                                     | [models.PaginationResponse](../../sdk/models/pagination-response.md)             | :heavy_minus_sign:                                                               | N/A                                                                              |
| `period`                                                                         | [models.DtoBillingPeriodInfo](../../sdk/models/dto-billing-period-info.md)       | :heavy_minus_sign:                                                               | N/A                                                                              |