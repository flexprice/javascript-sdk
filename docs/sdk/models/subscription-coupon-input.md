# SubscriptionCouponInput

## Example Usage

```typescript
import { SubscriptionCouponInput } from "@flexprice/sdk/sdk/models";

let value: SubscriptionCouponInput = {
  couponCode: "<value>",
};
```

## Fields

| Field                                                                                         | Type                                                                                          | Required                                                                                      | Description                                                                                   |
| --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| `couponCode`                                                                                  | *string*                                                                                      | :heavy_check_mark:                                                                            | CouponCode is the coupon's human-readable code (case-insensitive). Required.                  |
| `endDate`                                                                                     | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_minus_sign:                                                                            | EndDate is when the coupon ends; overrides duration_in_periods calculation.                   |
| `priceId`                                                                                     | *string*                                                                                      | :heavy_minus_sign:                                                                            | PriceID is the price ID of the line item to target; omit for subscription-level.              |
| `startDate`                                                                                   | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_minus_sign:                                                                            | StartDate is when the coupon starts; defaults to subscription/phase StartDate.                |