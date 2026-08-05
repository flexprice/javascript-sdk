# SubscriptionPhaseCreateRequest

## Example Usage

```typescript
import { SubscriptionPhaseCreateRequest } from "@flexprice/sdk/sdk/models";

let value: SubscriptionPhaseCreateRequest = {
  startDate: new Date("2026-07-11T06:03:26.109Z"),
};
```

## Fields

| Field                                                                                                   | Type                                                                                                    | Required                                                                                                | Description                                                                                             |
| ------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------- |
| `coupons`                                                                                               | *string*[]                                                                                              | :heavy_minus_sign:                                                                                      | Deprecated: use SubscriptionCoupons instead.                                                            |
| `endDate`                                                                                               | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)           | :heavy_minus_sign:                                                                                      | N/A                                                                                                     |
| `lineItemCoupons`                                                                                       | Record<string, *string*[]>                                                                              | :heavy_minus_sign:                                                                                      | Deprecated: use SubscriptionCoupons instead.                                                            |
| `lineItems`                                                                                             | [models.CreateSubscriptionLineItemRequest](../../sdk/models/create-subscription-line-item-request.md)[] | :heavy_minus_sign:                                                                                      | LineItems are extra (non-plan) line items for this phase; start_date defaults to phase start.           |
| `metadata`                                                                                              | Record<string, *string*>                                                                                | :heavy_minus_sign:                                                                                      | N/A                                                                                                     |
| `overrideLineItems`                                                                                     | [models.OverrideLineItemRequest](../../sdk/models/override-line-item-request.md)[]                      | :heavy_minus_sign:                                                                                      | OverrideLineItems overrides specific plan prices for this phase.                                        |
| `startDate`                                                                                             | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)           | :heavy_check_mark:                                                                                      | N/A                                                                                                     |
| `subscriptionCoupons`                                                                                   | [models.SubscriptionCouponInput](../../sdk/models/subscription-coupon-input.md)[]                       | :heavy_minus_sign:                                                                                      | SubscriptionCoupons is the preferred way to attach coupons to this phase.                               |