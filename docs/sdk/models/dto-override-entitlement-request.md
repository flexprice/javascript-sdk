# DtoOverrideEntitlementRequest

## Example Usage

```typescript
import { DtoOverrideEntitlementRequest } from "@flexprice/sdk/sdk/models";

let value: DtoOverrideEntitlementRequest = {
  entitlementId: "<id>",
};
```

## Fields

| Field                                                                                                                     | Type                                                                                                                      | Required                                                                                                                  | Description                                                                                                               |
| ------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------- |
| `entitlementId`                                                                                                           | *string*                                                                                                                  | :heavy_check_mark:                                                                                                        | EntitlementID references the plan/addon entitlement to override                                                           |
| `isEnabled`                                                                                                               | *boolean*                                                                                                                 | :heavy_minus_sign:                                                                                                        | IsEnabled determines if the entitlement is enabled or disabled                                                            |
| `staticValue`                                                                                                             | *string*                                                                                                                  | :heavy_minus_sign:                                                                                                        | StaticValue is the static value for static features                                                                       |
| `usageLimit`                                                                                                              | *number*                                                                                                                  | :heavy_minus_sign:                                                                                                        | UsageLimit is the new usage limit (only these 3 fields can be overridden)<br/>For metered features, nil means unlimited usage |