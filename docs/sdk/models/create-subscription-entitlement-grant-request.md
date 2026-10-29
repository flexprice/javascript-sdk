# CreateSubscriptionEntitlementGrantRequest

## Example Usage

```typescript
import { CreateSubscriptionEntitlementGrantRequest } from "@flexprice/sdk/sdk/models";

let value: CreateSubscriptionEntitlementGrantRequest = {
  grantDurationUnit: "hour",
  grantQuota: "<value>",
};
```

## Fields

| Field                                                                                                  | Type                                                                                                   | Required                                                                                               | Description                                                                                            |
| ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ |
| `aggregationMode`                                                                                      | [models.EntitlementAggregationMode](../../sdk/models/entitlement-aggregation-mode.md)                  | :heavy_minus_sign:                                                                                     | N/A                                                                                                    |
| `endDate`                                                                                              | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)          | :heavy_minus_sign:                                                                                     | N/A                                                                                                    |
| `grantAllocationBehavior`                                                                              | [models.EntitlementGrantAllocationBehavior](../../sdk/models/entitlement-grant-allocation-behavior.md) | :heavy_minus_sign:                                                                                     | N/A                                                                                                    |
| `grantDurationUnit`                                                                                    | [models.EntitlementGrantDurationUnit](../../sdk/models/entitlement-grant-duration-unit.md)             | :heavy_check_mark:                                                                                     | N/A                                                                                                    |
| `grantDurationValue`                                                                                   | *number*                                                                                               | :heavy_minus_sign:                                                                                     | N/A                                                                                                    |
| `grantQuota`                                                                                           | *string*                                                                                               | :heavy_check_mark:                                                                                     | N/A                                                                                                    |
| `startDate`                                                                                            | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)          | :heavy_minus_sign:                                                                                     | StartDate defaults to the subscription's start; EndDate leaves the grant open.                         |