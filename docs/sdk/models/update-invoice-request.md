# UpdateInvoiceRequest

## Example Usage

```typescript
import { UpdateInvoiceRequest } from "@flexprice/sdk/sdk/models";

let value: UpdateInvoiceRequest = {};
```

## Fields

| Field                                                                                         | Type                                                                                          | Required                                                                                      | Description                                                                                   |
| --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| `applyDiscount`                                                                               | *boolean*                                                                                     | :heavy_minus_sign:                                                                            | When true, recalculates discount from existing coupon associations (draft invoices only).     |
| `dueDate`                                                                                     | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_minus_sign:                                                                            | N/A                                                                                           |
| `invoicePdfUrl`                                                                               | *string*                                                                                      | :heavy_minus_sign:                                                                            | invoice_pdf_url is the URL where customers can download the PDF version of this invoice       |
| `metadata`                                                                                    | Record<string, *string*>                                                                      | :heavy_minus_sign:                                                                            | N/A                                                                                           |