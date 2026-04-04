# GetInvoicePdfRequest

## Example Usage

```typescript
import { GetInvoicePdfRequest } from "@flexprice/sdk/sdk/models";

let value: GetInvoicePdfRequest = {
  id: "<id>",
};
```

## Fields

| Field                                                                                                                                                                 | Type                                                                                                                                                                  | Required                                                                                                                                                              | Description                                                                                                                                                           |
| --------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `id`                                                                                                                                                                  | *string*                                                                                                                                                              | :heavy_check_mark:                                                                                                                                                    | Invoice ID                                                                                                                                                            |
| `url`                                                                                                                                                                 | *boolean*                                                                                                                                                             | :heavy_minus_sign:                                                                                                                                                    | Return presigned URL from s3 instead of PDF                                                                                                                           |
| `forceGenerate`                                                                                                                                                       | *boolean*                                                                                                                                                             | :heavy_minus_sign:                                                                                                                                                    | Force regeneration of the PDF even if one already exists in S3 (default: false). Note: force_generate has no effect if invoice_pdf_url is already set on the invoice. |