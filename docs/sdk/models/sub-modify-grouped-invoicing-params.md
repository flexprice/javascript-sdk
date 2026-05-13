# SubModifyGroupedInvoicingParams

## Example Usage

```typescript
import { SubModifyGroupedInvoicingParams } from "@flexprice/sdk/sdk/models";

let value: SubModifyGroupedInvoicingParams = {
  action: "remove",
};
```

## Fields

| Field                                                                         | Type                                                                          | Required                                                                      | Description                                                                   |
| ----------------------------------------------------------------------------- | ----------------------------------------------------------------------------- | ----------------------------------------------------------------------------- | ----------------------------------------------------------------------------- |
| `action`                                                                      | [models.GroupedInvoicingAction](../../sdk/models/grouped-invoicing-action.md) | :heavy_check_mark:                                                            | N/A                                                                           |
| `childSubscriptionIds`                                                        | *string*[]                                                                    | :heavy_minus_sign:                                                            | N/A                                                                           |
| `parentSubscriptionId`                                                        | *string*                                                                      | :heavy_minus_sign:                                                            | ParentSubscriptionID is required for action 'add'.                            |