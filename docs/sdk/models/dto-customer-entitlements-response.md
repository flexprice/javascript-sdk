# DtoCustomerEntitlementsResponse

## Example Usage

```typescript
import { DtoCustomerEntitlementsResponse } from "@flexprice/sdk/sdk/models";

let value: DtoCustomerEntitlementsResponse = {
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

| Field                                                                       | Type                                                                        | Required                                                                    | Description                                                                 |
| --------------------------------------------------------------------------- | --------------------------------------------------------------------------- | --------------------------------------------------------------------------- | --------------------------------------------------------------------------- |
| `customerId`                                                                | *string*                                                                    | :heavy_minus_sign:                                                          | N/A                                                                         |
| `features`                                                                  | [models.DtoAggregatedFeature](../../sdk/models/dto-aggregated-feature.md)[] | :heavy_minus_sign:                                                          | N/A                                                                         |