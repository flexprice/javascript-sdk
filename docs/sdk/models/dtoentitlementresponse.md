# DtoEntitlementResponse

## Example Usage

```typescript
import { DtoEntitlementResponse } from "@flexprice/sdk/sdk/models";

let value: DtoEntitlementResponse = {
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
};
```

## Fields

| Field                                                                                 | Type                                                                                  | Required                                                                              | Description                                                                           |
| ------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------- |
| `addon`                                                                               | [models.DtoAddonResponse](../../sdk/models/dtoaddonresponse.md)                       | :heavy_minus_sign:                                                                    | N/A                                                                                   |
| `createdAt`                                                                           | *string*                                                                              | :heavy_minus_sign:                                                                    | N/A                                                                                   |
| `createdBy`                                                                           | *string*                                                                              | :heavy_minus_sign:                                                                    | N/A                                                                                   |
| `displayOrder`                                                                        | *number*                                                                              | :heavy_minus_sign:                                                                    | N/A                                                                                   |
| `endDate`                                                                             | *string*                                                                              | :heavy_minus_sign:                                                                    | N/A                                                                                   |
| `entityId`                                                                            | *string*                                                                              | :heavy_minus_sign:                                                                    | N/A                                                                                   |
| `entityType`                                                                          | [models.EntitlementEntityType](../../sdk/models/entitlemententitytype.md)             | :heavy_minus_sign:                                                                    | N/A                                                                                   |
| `environmentId`                                                                       | *string*                                                                              | :heavy_minus_sign:                                                                    | N/A                                                                                   |
| `feature`                                                                             | [models.DtoFeatureResponse](../../sdk/models/dtofeatureresponse.md)                   | :heavy_minus_sign:                                                                    | N/A                                                                                   |
| `featureId`                                                                           | *string*                                                                              | :heavy_minus_sign:                                                                    | N/A                                                                                   |
| `featureType`                                                                         | [models.FeatureType](../../sdk/models/featuretype.md)                                 | :heavy_minus_sign:                                                                    | N/A                                                                                   |
| `id`                                                                                  | *string*                                                                              | :heavy_minus_sign:                                                                    | N/A                                                                                   |
| `isEnabled`                                                                           | *boolean*                                                                             | :heavy_minus_sign:                                                                    | N/A                                                                                   |
| `isSoftLimit`                                                                         | *boolean*                                                                             | :heavy_minus_sign:                                                                    | N/A                                                                                   |
| `parentEntitlementId`                                                                 | *string*                                                                              | :heavy_minus_sign:                                                                    | N/A                                                                                   |
| `plan`                                                                                | [models.DtoPlanResponse](../../sdk/models/dtoplanresponse.md)                         | :heavy_minus_sign:                                                                    | N/A                                                                                   |
| `planId`                                                                              | *string*                                                                              | :heavy_minus_sign:                                                                    | TODO: Remove this once we have a proper entitlement entity type                       |
| `startDate`                                                                           | *string*                                                                              | :heavy_minus_sign:                                                                    | N/A                                                                                   |
| `staticValue`                                                                         | *string*                                                                              | :heavy_minus_sign:                                                                    | N/A                                                                                   |
| `status`                                                                              | [models.Status](../../sdk/models/status.md)                                           | :heavy_minus_sign:                                                                    | N/A                                                                                   |
| `tenantId`                                                                            | *string*                                                                              | :heavy_minus_sign:                                                                    | N/A                                                                                   |
| `updatedAt`                                                                           | *string*                                                                              | :heavy_minus_sign:                                                                    | N/A                                                                                   |
| `updatedBy`                                                                           | *string*                                                                              | :heavy_minus_sign:                                                                    | N/A                                                                                   |
| `usageLimit`                                                                          | *number*                                                                              | :heavy_minus_sign:                                                                    | N/A                                                                                   |
| `usageResetPeriod`                                                                    | [models.EntitlementUsageResetPeriod](../../sdk/models/entitlementusageresetperiod.md) | :heavy_minus_sign:                                                                    | N/A                                                                                   |