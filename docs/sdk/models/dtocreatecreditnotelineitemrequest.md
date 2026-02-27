# DtoCreateCreditNoteLineItemRequest

## Example Usage

```typescript
import { DtoCreateCreditNoteLineItemRequest } from "@flexprice/sdk/sdk/models";

let value: DtoCreateCreditNoteLineItemRequest = {
  amount: "601.82",
  invoiceLineItemId: "<id>",
};
```

## Fields

| Field                                                                                 | Type                                                                                  | Required                                                                              | Description                                                                           |
| ------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------- |
| `amount`                                                                              | *string*                                                                              | :heavy_check_mark:                                                                    | amount is the monetary amount to be credited for this line item                       |
| `displayName`                                                                         | *string*                                                                              | :heavy_minus_sign:                                                                    | display_name is an optional human-readable name for this credit note line item        |
| `invoiceLineItemId`                                                                   | *string*                                                                              | :heavy_check_mark:                                                                    | invoice_line_item_id is the unique identifier of the invoice line item being credited |
| `metadata`                                                                            | Record<string, *string*>                                                              | :heavy_minus_sign:                                                                    | N/A                                                                                   |