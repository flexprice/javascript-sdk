# DtoGetPreviewInvoiceRequest

## Example Usage

```typescript
import { DtoGetPreviewInvoiceRequest } from "@flexprice/sdk/sdk/models";

let value: DtoGetPreviewInvoiceRequest = {
  subscriptionId: "<id>",
};
```

## Fields

| Field                                                                               | Type                                                                                | Required                                                                            | Description                                                                         |
| ----------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------- |
| `periodEnd`                                                                         | *string*                                                                            | :heavy_minus_sign:                                                                  | period_end is the optional end date of the period to preview                        |
| `periodStart`                                                                       | *string*                                                                            | :heavy_minus_sign:                                                                  | period_start is the optional start date of the period to preview                    |
| `subscriptionId`                                                                    | *string*                                                                            | :heavy_check_mark:                                                                  | subscription_id is the unique identifier of the subscription to preview invoice for |