# RecalculateInvoiceV2Request

## Example Usage

```typescript
import { RecalculateInvoiceV2Request } from "@flexprice/sdk/sdk/models";

let value: RecalculateInvoiceV2Request = {
  id: "<id>",
};
```

## Fields

| Field                                                               | Type                                                                | Required                                                            | Description                                                         |
| ------------------------------------------------------------------- | ------------------------------------------------------------------- | ------------------------------------------------------------------- | ------------------------------------------------------------------- |
| `id`                                                                | *string*                                                            | :heavy_check_mark:                                                  | Invoice ID                                                          |
| `finalize`                                                          | *boolean*                                                           | :heavy_minus_sign:                                                  | Whether to finalize the invoice after recalculation (default: true) |