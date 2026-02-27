# EntitlementFilter

## Example Usage

```typescript
import { EntitlementFilter } from "@flexprice/sdk/sdk/models";

let value: EntitlementFilter = {};
```

## Fields

| Field                                                                       | Type                                                                        | Required                                                                    | Description                                                                 |
| --------------------------------------------------------------------------- | --------------------------------------------------------------------------- | --------------------------------------------------------------------------- | --------------------------------------------------------------------------- |
| `endTime`                                                                   | *string*                                                                    | :heavy_minus_sign:                                                          | N/A                                                                         |
| `entityIds`                                                                 | *string*[]                                                                  | :heavy_minus_sign:                                                          | N/A                                                                         |
| `entityType`                                                                | [models.EntitlementEntityType](../../sdk/models/entitlemententitytype.md)   | :heavy_minus_sign:                                                          | N/A                                                                         |
| `expand`                                                                    | *string*                                                                    | :heavy_minus_sign:                                                          | N/A                                                                         |
| `featureIds`                                                                | *string*[]                                                                  | :heavy_minus_sign:                                                          | N/A                                                                         |
| `featureType`                                                               | [models.FeatureType](../../sdk/models/featuretype.md)                       | :heavy_minus_sign:                                                          | N/A                                                                         |
| `filters`                                                                   | [models.FilterCondition](../../sdk/models/filtercondition.md)[]             | :heavy_minus_sign:                                                          | Specific filters for entitlements                                           |
| `isEnabled`                                                                 | *boolean*                                                                   | :heavy_minus_sign:                                                          | N/A                                                                         |
| `limit`                                                                     | *number*                                                                    | :heavy_minus_sign:                                                          | N/A                                                                         |
| `offset`                                                                    | *number*                                                                    | :heavy_minus_sign:                                                          | N/A                                                                         |
| `order`                                                                     | [models.EntitlementFilterOrder](../../sdk/models/entitlementfilterorder.md) | :heavy_minus_sign:                                                          | N/A                                                                         |
| `planIds`                                                                   | *string*[]                                                                  | :heavy_minus_sign:                                                          | N/A                                                                         |
| `sort`                                                                      | [models.SortCondition](../../sdk/models/sortcondition.md)[]                 | :heavy_minus_sign:                                                          | N/A                                                                         |
| `startTime`                                                                 | *string*                                                                    | :heavy_minus_sign:                                                          | N/A                                                                         |
| `status`                                                                    | [models.Status](../../sdk/models/status.md)                                 | :heavy_minus_sign:                                                          | N/A                                                                         |