# ChangedAddonAssociation

## Example Usage

```typescript
import { ChangedAddonAssociation } from "@flexprice/sdk/sdk/models";

let value: ChangedAddonAssociation = {};
```

## Fields

| Field                                                                                         | Type                                                                                          | Required                                                                                      | Description                                                                                   |
| --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| `addonId`                                                                                     | *string*                                                                                      | :heavy_minus_sign:                                                                            | N/A                                                                                           |
| `addonStatus`                                                                                 | [models.AddonStatus](../../sdk/models/addon-status.md)                                        | :heavy_minus_sign:                                                                            | N/A                                                                                           |
| `changeAction`                                                                                | [models.ChangedAddonAssociationAction](../../sdk/models/changed-addon-association-action.md)  | :heavy_minus_sign:                                                                            | created \| ended                                                                              |
| `endDate`                                                                                     | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_minus_sign:                                                                            | N/A                                                                                           |
| `id`                                                                                          | *string*                                                                                      | :heavy_minus_sign:                                                                            | N/A                                                                                           |
| `startDate`                                                                                   | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_minus_sign:                                                                            | N/A                                                                                           |