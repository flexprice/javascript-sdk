# InvoicePreview

## Example Usage

```typescript
import { InvoicePreview } from "@flexprice/sdk/sdk/models";

let value: InvoicePreview = {};
```

## Fields

| Field                                                                                         | Type                                                                                          | Required                                                                                      | Description                                                                                   |
| --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| `currency`                                                                                    | *string*                                                                                      | :heavy_minus_sign:                                                                            | currency is the currency for all amounts                                                      |
| `dueDate`                                                                                     | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_minus_sign:                                                                            | due_date is when the invoice would be due                                                     |
| `lineItems`                                                                                   | [models.InvoiceLineItemPreview](../../sdk/models/invoice-line-item-preview.md)[]              | :heavy_minus_sign:                                                                            | line_items contains preview of line items                                                     |
| `subtotal`                                                                                    | *string*                                                                                      | :heavy_minus_sign:                                                                            | subtotal is the subtotal amount before taxes                                                  |
| `taxAmount`                                                                                   | *string*                                                                                      | :heavy_minus_sign:                                                                            | tax_amount is the total tax amount                                                            |
| `total`                                                                                       | *string*                                                                                      | :heavy_minus_sign:                                                                            | total is the total amount including taxes                                                     |