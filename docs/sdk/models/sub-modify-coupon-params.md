# SubModifyCouponParams

## Example Usage

```typescript
import { SubModifyCouponParams } from "@flexprice/sdk/sdk/models";

let value: SubModifyCouponParams = {
  action: "add",
};
```

## Fields

| Field                                                                                         | Type                                                                                          | Required                                                                                      | Description                                                                                   |
| --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| `action`                                                                                      | [models.SubModifyCouponAction](../../sdk/models/sub-modify-coupon-action.md)                  | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `couponAssociationId`                                                                         | *string*                                                                                      | :heavy_minus_sign:                                                                            | Required when action="remove". ID of the CouponAssociation to soft-delete.                    |
| `couponCode`                                                                                  | *string*                                                                                      | :heavy_minus_sign:                                                                            | Required for action="add". Coupon code of the coupon to attach.                               |
| `endDate`                                                                                     | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_minus_sign:                                                                            | Optional. When the coupon association ends.                                                   |
| `startDate`                                                                                   | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_minus_sign:                                                                            | Optional. When the coupon association starts; defaults to now.                                |
| `subscriptionId`                                                                              | *string*                                                                                      | :heavy_minus_sign:                                                                            | Optional. Apply at subscription level. Mutually exclusive with SubscriptionLineItemID.        |
| `subscriptionLineItemId`                                                                      | *string*                                                                                      | :heavy_minus_sign:                                                                            | Optional. Apply at a specific line item. Mutually exclusive with SubscriptionID.              |