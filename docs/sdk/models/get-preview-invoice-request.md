# GetPreviewInvoiceRequest

## Example Usage

```typescript
import { GetPreviewInvoiceRequest } from "@flexprice/sdk/sdk/models";

let value: GetPreviewInvoiceRequest = {
  subscriptionId: "<id>",
};
```

## Fields

| Field                                                                                         | Type                                                                                          | Required                                                                                      | Description                                                                                   |
| --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| `hideZeroChargesLineItems`                                                                    | *boolean*                                                                                     | :heavy_minus_sign:                                                                            | hide_zero_charges_line_items indicates whether to hide line items with zero cost              |
| `periodEnd`                                                                                   | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_minus_sign:                                                                            | period_end is the optional end date of the period to preview                                  |
| `periodStart`                                                                                 | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_minus_sign:                                                                            | period_start is the optional start date of the period to preview                              |
| `subscriptionId`                                                                              | *string*                                                                                      | :heavy_check_mark:                                                                            | subscription_id is the unique identifier of the subscription to preview invoice for           |