# RemoveAddonRequest

## Example Usage

```typescript
import { RemoveAddonRequest } from "@flexprice/sdk/sdk/models";

let value: RemoveAddonRequest = {
  addonAssociationId: "<id>",
};
```

## Fields

| Field                                                                                                    | Type                                                                                                     | Required                                                                                                 | Description                                                                                              |
| -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- |
| `addonAssociationId`                                                                                     | *string*                                                                                                 | :heavy_check_mark:                                                                                       | N/A                                                                                                      |
| `effectiveDate`                                                                                          | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)            | :heavy_minus_sign:                                                                                       | EffectiveDate defaults to period end when nil; mid-period with create_prorations issues a wallet credit. |
| `prorationBehavior`                                                                                      | [models.ProrationBehavior](../../sdk/models/proration-behavior.md)                                       | :heavy_minus_sign:                                                                                       | N/A                                                                                                      |
| `reason`                                                                                                 | *string*                                                                                                 | :heavy_minus_sign:                                                                                       | N/A                                                                                                      |