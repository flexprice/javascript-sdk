# SubModifyInheritanceRequest

## Example Usage

```typescript
import { SubModifyInheritanceRequest } from "@flexprice/sdk/sdk/models";

let value: SubModifyInheritanceRequest = {};
```

## Fields

| Field                                                              | Type                                                               | Required                                                           | Description                                                        |
| ------------------------------------------------------------------ | ------------------------------------------------------------------ | ------------------------------------------------------------------ | ------------------------------------------------------------------ |
| `action`                                                           | [models.InheritanceAction](../../sdk/models/inheritance-action.md) | :heavy_minus_sign:                                                 | N/A                                                                |
| `externalCustomerIdsToInheritSubscription`                         | *string*[]                                                         | :heavy_minus_sign:                                                 | ExternalCustomerIDsToInheritSubscription is used for action="add". |
| `externalCustomerIdsToRemove`                                      | *string*[]                                                         | :heavy_minus_sign:                                                 | ExternalCustomerIDsToRemove is used for action="remove".           |