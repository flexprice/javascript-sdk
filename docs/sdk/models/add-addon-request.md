# AddAddonRequest

## Example Usage

```typescript
import { AddAddonRequest } from "@flexprice/sdk/sdk/models";

let value: AddAddonRequest = {
  addonId: "<id>",
  subscriptionId: "<id>",
};
```

## Fields

| Field                                                                                               | Type                                                                                                | Required                                                                                            | Description                                                                                         |
| --------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------- |
| `addonId`                                                                                           | *string*                                                                                            | :heavy_check_mark:                                                                                  | N/A                                                                                                 |
| `cadence`                                                                                           | [models.AddonCadence](../../sdk/models/addon-cadence.md)                                            | :heavy_minus_sign:                                                                                  | N/A                                                                                                 |
| `lineItemCommitments`                                                                               | Record<string, [models.LineItemCommitmentConfig](../../sdk/models/line-item-commitment-config.md)>  | :heavy_minus_sign:                                                                                  | LineItemCommitments allows setting commitment configuration per addon line item (keyed by price_id) |
| `metadata`                                                                                          | Record<string, *any*>                                                                               | :heavy_minus_sign:                                                                                  | N/A                                                                                                 |
| `prorationBehavior`                                                                                 | [models.ProrationBehavior](../../sdk/models/proration-behavior.md)                                  | :heavy_minus_sign:                                                                                  | N/A                                                                                                 |
| `startDate`                                                                                         | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)       | :heavy_minus_sign:                                                                                  | N/A                                                                                                 |
| `subscriptionId`                                                                                    | *string*                                                                                            | :heavy_check_mark:                                                                                  | N/A                                                                                                 |