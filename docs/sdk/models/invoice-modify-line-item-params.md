# InvoiceModifyLineItemParams

## Example Usage

```typescript
import { InvoiceModifyLineItemParams } from "@flexprice/sdk/sdk/models";

let value: InvoiceModifyLineItemParams = {
  action: "add",
};
```

## Fields

| Field                                                                                          | Type                                                                                           | Required                                                                                       | Description                                                                                    |
| ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- |
| `action`                                                                                       | [models.InvoiceModifyLineItemAction](../../sdk/models/invoice-modify-line-item-action.md)      | :heavy_check_mark:                                                                             | N/A                                                                                            |
| `items`                                                                                        | [models.AddLineItemRequest](../../sdk/models/add-line-item-request.md)[]                       | :heavy_minus_sign:                                                                             | Required for action 'add'. Must contain at least one line item.                                |
| `lineItemId`                                                                                   | *string*                                                                                       | :heavy_minus_sign:                                                                             | Required for action 'update' (one line item per call; edits are versioned, so the id changes). |
| `lineItemIds`                                                                                  | *string*[]                                                                                     | :heavy_minus_sign:                                                                             | Required for action 'remove'. Must contain at least one line item ID.                          |
| `update`                                                                                       | [models.UpdateLineItemRequest](../../sdk/models/update-line-item-request.md)                   | :heavy_minus_sign:                                                                             | N/A                                                                                            |