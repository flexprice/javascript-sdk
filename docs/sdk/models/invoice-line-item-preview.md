# InvoiceLineItemPreview

## Example Usage

```typescript
import { InvoiceLineItemPreview } from "@flexprice/sdk/sdk/models";

let value: InvoiceLineItemPreview = {};
```

## Fields

| Field                                                                                         | Type                                                                                          | Required                                                                                      | Description                                                                                   |
| --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| `amount`                                                                                      | *string*                                                                                      | :heavy_minus_sign:                                                                            | amount for this line item                                                                     |
| `description`                                                                                 | *string*                                                                                      | :heavy_minus_sign:                                                                            | description of the line item                                                                  |
| `isProration`                                                                                 | *boolean*                                                                                     | :heavy_minus_sign:                                                                            | is_proration indicates if this line item is a proration                                       |
| `periodEnd`                                                                                   | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_minus_sign:                                                                            | period_end for this line item (if applicable)                                                 |
| `periodStart`                                                                                 | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_minus_sign:                                                                            | period_start for this line item (if applicable)                                               |
| `quantity`                                                                                    | *string*                                                                                      | :heavy_minus_sign:                                                                            | quantity for this line item                                                                   |
| `unitPrice`                                                                                   | *string*                                                                                      | :heavy_minus_sign:                                                                            | unit_price for this line item                                                                 |