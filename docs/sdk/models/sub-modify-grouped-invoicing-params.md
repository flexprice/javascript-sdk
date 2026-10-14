# SubModifyGroupedInvoicingParams

## Example Usage

```typescript
import { SubModifyGroupedInvoicingParams } from "@flexprice/sdk/sdk/models";

let value: SubModifyGroupedInvoicingParams = {
  action: "modify",
};
```

## Fields

| Field                                                                           | Type                                                                            | Required                                                                        | Description                                                                     |
| ------------------------------------------------------------------------------- | ------------------------------------------------------------------------------- | ------------------------------------------------------------------------------- | ------------------------------------------------------------------------------- |
| `action`                                                                        | [models.GroupedInvoicingAction](../../sdk/models/grouped-invoicing-action.md)   | :heavy_check_mark:                                                              | N/A                                                                             |
| `changes`                                                                       | [models.GroupedInvoicingChange](../../sdk/models/grouped-invoicing-change.md)[] | :heavy_minus_sign:                                                              | Changes is required for action 'modify'; the path subscription is the parent.   |
| `childSubscriptionIds`                                                          | *string*[]                                                                      | :heavy_minus_sign:                                                              | N/A                                                                             |
| `parentSubscriptionId`                                                          | *string*                                                                        | :heavy_minus_sign:                                                              | ParentSubscriptionID is required for action 'add'.                              |