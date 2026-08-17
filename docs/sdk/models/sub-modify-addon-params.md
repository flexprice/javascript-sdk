# SubModifyAddonParams

## Example Usage

```typescript
import { SubModifyAddonParams } from "@flexprice/sdk/sdk/models";

let value: SubModifyAddonParams = {
  action: "remove",
};
```

## Fields

| Field                                                                                         | Type                                                                                          | Required                                                                                      | Description                                                                                   |
| --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| `action`                                                                                      | [models.SubscriptionModificationAction](../../sdk/models/subscription-modification-action.md) | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `add`                                                                                         | [models.AddAddonToSubscriptionRequest](../../sdk/models/add-addon-to-subscription-request.md) | :heavy_minus_sign:                                                                            | N/A                                                                                           |
| `remove`                                                                                      | [models.RemoveAddonRequest](../../sdk/models/remove-addon-request.md)                         | :heavy_minus_sign:                                                                            | N/A                                                                                           |