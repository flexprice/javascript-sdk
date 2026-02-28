# DtoUpdateInvoiceRequest

## Example Usage

```typescript
import { DtoUpdateInvoiceRequest } from "@flexprice/sdk/sdk/models";

let value: DtoUpdateInvoiceRequest = {};
```

## Fields

| Field                                                                                   | Type                                                                                    | Required                                                                                | Description                                                                             |
| --------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------- |
| `dueDate`                                                                               | *string*                                                                                | :heavy_minus_sign:                                                                      | N/A                                                                                     |
| `invoicePdfUrl`                                                                         | *string*                                                                                | :heavy_minus_sign:                                                                      | invoice_pdf_url is the URL where customers can download the PDF version of this invoice |
| `metadata`                                                                              | Record<string, *string*>                                                                | :heavy_minus_sign:                                                                      | N/A                                                                                     |