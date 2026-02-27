# RecalculateInvoiceRequest

## Example Usage

```typescript
import { RecalculateInvoiceRequest } from "@flexprice/sdk/sdk/models";

let value: RecalculateInvoiceRequest = {
  id: "<id>",
};
```

## Fields

| Field                                                               | Type                                                                | Required                                                            | Description                                                         |
| ------------------------------------------------------------------- | ------------------------------------------------------------------- | ------------------------------------------------------------------- | ------------------------------------------------------------------- |
| `id`                                                                | *string*                                                            | :heavy_check_mark:                                                  | Invoice ID                                                          |
| `finalize`                                                          | *boolean*                                                           | :heavy_minus_sign:                                                  | Whether to finalize the invoice after recalculation (default: true) |