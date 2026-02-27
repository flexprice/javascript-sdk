# DtoSubscriptionEntitlementsResponse

## Example Usage

```typescript
import { DtoSubscriptionEntitlementsResponse } from "@flexprice/sdk/sdk/models";

let value: DtoSubscriptionEntitlementsResponse = {
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

| Field                                                                     | Type                                                                      | Required                                                                  | Description                                                               |
| ------------------------------------------------------------------------- | ------------------------------------------------------------------------- | ------------------------------------------------------------------------- | ------------------------------------------------------------------------- |
| `features`                                                                | [models.DtoAggregatedFeature](../../sdk/models/dtoaggregatedfeature.md)[] | :heavy_minus_sign:                                                        | N/A                                                                       |
| `planId`                                                                  | *string*                                                                  | :heavy_minus_sign:                                                        | N/A                                                                       |
| `subscriptionId`                                                          | *string*                                                                  | :heavy_minus_sign:                                                        | N/A                                                                       |