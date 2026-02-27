# DtoAddonAssociationResponse

## Example Usage

```typescript
import { DtoAddonAssociationResponse } from "@flexprice/sdk/sdk/models";

let value: DtoAddonAssociationResponse = {
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
  subscription: {
    latestInvoice: {
      subscription: {
        plan: {},
      },
    },
    plan: {},
  },
};
```

## Fields

| Field                                                                               | Type                                                                                | Required                                                                            | Description                                                                         |
| ----------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------- |
| `addon`                                                                             | [models.DtoAddonResponse](../../sdk/models/dtoaddonresponse.md)                     | :heavy_minus_sign:                                                                  | N/A                                                                                 |
| `addonId`                                                                           | *string*                                                                            | :heavy_minus_sign:                                                                  | N/A                                                                                 |
| `addonStatus`                                                                       | [models.AddonStatus](../../sdk/models/addonstatus.md)                               | :heavy_minus_sign:                                                                  | N/A                                                                                 |
| `cancellationReason`                                                                | *string*                                                                            | :heavy_minus_sign:                                                                  | N/A                                                                                 |
| `cancelledAt`                                                                       | *string*                                                                            | :heavy_minus_sign:                                                                  | N/A                                                                                 |
| `createdAt`                                                                         | *string*                                                                            | :heavy_minus_sign:                                                                  | N/A                                                                                 |
| `createdBy`                                                                         | *string*                                                                            | :heavy_minus_sign:                                                                  | N/A                                                                                 |
| `endDate`                                                                           | *string*                                                                            | :heavy_minus_sign:                                                                  | N/A                                                                                 |
| `entityId`                                                                          | *string*                                                                            | :heavy_minus_sign:                                                                  | N/A                                                                                 |
| `entityType`                                                                        | [models.AddonAssociationEntityType](../../sdk/models/addonassociationentitytype.md) | :heavy_minus_sign:                                                                  | N/A                                                                                 |
| `environmentId`                                                                     | *string*                                                                            | :heavy_minus_sign:                                                                  | N/A                                                                                 |
| `id`                                                                                | *string*                                                                            | :heavy_minus_sign:                                                                  | N/A                                                                                 |
| `metadata`                                                                          | Record<string, *any*>                                                               | :heavy_minus_sign:                                                                  | N/A                                                                                 |
| `startDate`                                                                         | *string*                                                                            | :heavy_minus_sign:                                                                  | N/A                                                                                 |
| `status`                                                                            | [models.Status](../../sdk/models/status.md)                                         | :heavy_minus_sign:                                                                  | N/A                                                                                 |
| `subscription`                                                                      | [models.DtoSubscriptionResponse](../../sdk/models/dtosubscriptionresponse.md)       | :heavy_minus_sign:                                                                  | N/A                                                                                 |
| `tenantId`                                                                          | *string*                                                                            | :heavy_minus_sign:                                                                  | N/A                                                                                 |
| `updatedAt`                                                                         | *string*                                                                            | :heavy_minus_sign:                                                                  | N/A                                                                                 |
| `updatedBy`                                                                         | *string*                                                                            | :heavy_minus_sign:                                                                  | N/A                                                                                 |