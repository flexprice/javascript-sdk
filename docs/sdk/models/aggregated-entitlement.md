# AggregatedEntitlement

## Example Usage

```typescript
import { AggregatedEntitlement } from "@flexprice/sdk/sdk/models";

let value: AggregatedEntitlement = {};
```

## Fields

| Field                                                                                    | Type                                                                                     | Required                                                                                 | Description                                                                              |
| ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- |
| `configValues`                                                                           | Record<string, [models.ConfigValue](../../sdk/models/config-value.md)>[]                 | :heavy_minus_sign:                                                                       | N/A                                                                                      |
| `isEnabled`                                                                              | *boolean*                                                                                | :heavy_minus_sign:                                                                       | N/A                                                                                      |
| `isSoftLimit`                                                                            | *boolean*                                                                                | :heavy_minus_sign:                                                                       | N/A                                                                                      |
| `staticValues`                                                                           | *string*[]                                                                               | :heavy_minus_sign:                                                                       | N/A                                                                                      |
| `usageLimit`                                                                             | *number*                                                                                 | :heavy_minus_sign:                                                                       | N/A                                                                                      |
| `usageResetPeriod`                                                                       | [models.EntitlementUsageResetPeriod](../../sdk/models/entitlement-usage-reset-period.md) | :heavy_minus_sign:                                                                       | N/A                                                                                      |