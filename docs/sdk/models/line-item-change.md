# LineItemChange

## Example Usage

```typescript
import { LineItemChange } from "@flexprice/sdk/sdk/models";

let value: LineItemChange = {
  id: "<id>",
};
```

## Fields

| Field                                                                                         | Type                                                                                          | Required                                                                                      | Description                                                                                   |
| --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| `amount`                                                                                      | *string*                                                                                      | :heavy_minus_sign:                                                                            | Amount reprices the charge. Flat fee only for now.                                            |
| `coupons`                                                                                     | [models.SubscriptionCouponInput](../../sdk/models/subscription-coupon-input.md)[]             | :heavy_minus_sign:                                                                            | Coupons apply to the new line item created by this change.                                    |
| `effectiveDate`                                                                               | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_minus_sign:                                                                            | N/A                                                                                           |
| `id`                                                                                          | *string*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `quantity`                                                                                    | *string*                                                                                      | :heavy_minus_sign:                                                                            | N/A                                                                                           |