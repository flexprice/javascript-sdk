# DtoCreateEntitlementRequest

## Example Usage

```typescript
import { DtoCreateEntitlementRequest } from "@flexprice/sdk/sdk/models";

let value: DtoCreateEntitlementRequest = {
  featureId: "<id>",
  featureType: "metered",
};
```

## Fields

| Field                                                                                 | Type                                                                                  | Required                                                                              | Description                                                                           |
| ------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------- |
| `endDate`                                                                             | *string*                                                                              | :heavy_minus_sign:                                                                    | N/A                                                                                   |
| `entityId`                                                                            | *string*                                                                              | :heavy_minus_sign:                                                                    | N/A                                                                                   |
| `entityType`                                                                          | [models.EntitlementEntityType](../../sdk/models/entitlemententitytype.md)             | :heavy_minus_sign:                                                                    | N/A                                                                                   |
| `featureId`                                                                           | *string*                                                                              | :heavy_check_mark:                                                                    | N/A                                                                                   |
| `featureType`                                                                         | [models.FeatureType](../../sdk/models/featuretype.md)                                 | :heavy_check_mark:                                                                    | N/A                                                                                   |
| `isEnabled`                                                                           | *boolean*                                                                             | :heavy_minus_sign:                                                                    | N/A                                                                                   |
| `isSoftLimit`                                                                         | *boolean*                                                                             | :heavy_minus_sign:                                                                    | N/A                                                                                   |
| `parentEntitlementId`                                                                 | *string*                                                                              | :heavy_minus_sign:                                                                    | N/A                                                                                   |
| `planId`                                                                              | *string*                                                                              | :heavy_minus_sign:                                                                    | N/A                                                                                   |
| `startDate`                                                                           | *string*                                                                              | :heavy_minus_sign:                                                                    | N/A                                                                                   |
| `staticValue`                                                                         | *string*                                                                              | :heavy_minus_sign:                                                                    | N/A                                                                                   |
| `usageLimit`                                                                          | *number*                                                                              | :heavy_minus_sign:                                                                    | N/A                                                                                   |
| `usageResetPeriod`                                                                    | [models.EntitlementUsageResetPeriod](../../sdk/models/entitlementusageresetperiod.md) | :heavy_minus_sign:                                                                    | N/A                                                                                   |