# InvoiceLineItemCoupon

## Example Usage

```typescript
import { InvoiceLineItemCoupon } from "@flexprice/sdk/sdk/models";

let value: InvoiceLineItemCoupon = {
  couponId: "<id>",
  lineItemId: "<id>",
};
```

## Fields

| Field                                | Type                                 | Required                             | Description                          |
| ------------------------------------ | ------------------------------------ | ------------------------------------ | ------------------------------------ |
| `couponAssociationId`                | *string*                             | :heavy_minus_sign:                   | N/A                                  |
| `couponId`                           | *string*                             | :heavy_check_mark:                   | N/A                                  |
| `lineItemId`                         | *string*                             | :heavy_check_mark:                   | price_id used to match the line item |