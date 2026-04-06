# CreateCreditNoteRequest

## Example Usage

```typescript
import { CreateCreditNoteRequest } from "@flexprice/sdk/sdk/models";

let value: CreateCreditNoteRequest = {
  invoiceId: "<id>",
  reason: "DUPLICATE",
};
```

## Fields

| Field                                                                                                | Type                                                                                                 | Required                                                                                             | Description                                                                                          |
| ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- |
| `creditNoteNumber`                                                                                   | *string*                                                                                             | :heavy_minus_sign:                                                                                   | credit_note_number is an optional human-readable identifier for the credit note                      |
| `idempotencyKey`                                                                                     | *string*                                                                                             | :heavy_minus_sign:                                                                                   | idempotency_key is an optional key used to prevent duplicate credit note creation                    |
| `invoiceId`                                                                                          | *string*                                                                                             | :heavy_check_mark:                                                                                   | invoice_id is the unique identifier of the invoice this credit note is applied to                    |
| `lineItems`                                                                                          | [models.CreateCreditNoteLineItemRequest](../../sdk/models/create-credit-note-line-item-request.md)[] | :heavy_minus_sign:                                                                                   | line_items contains the individual line items that make up this credit note (minimum 1 required)     |
| `memo`                                                                                               | *string*                                                                                             | :heavy_minus_sign:                                                                                   | memo is an optional free-text field for additional notes about the credit note                       |
| `metadata`                                                                                           | Record<string, *string*>                                                                             | :heavy_minus_sign:                                                                                   | N/A                                                                                                  |
| `processCreditNote`                                                                                  | *boolean*                                                                                            | :heavy_minus_sign:                                                                                   | process_credit_note is a flag to process the credit note after creation                              |
| `reason`                                                                                             | [models.CreditNoteReason](../../sdk/models/credit-note-reason.md)                                    | :heavy_check_mark:                                                                                   | N/A                                                                                                  |