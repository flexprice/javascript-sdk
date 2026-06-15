# ExecuteSubscriptionModifyRequest

## Example Usage

```typescript
import { ExecuteSubscriptionModifyRequest } from "@flexprice/sdk/sdk/models";

let value: ExecuteSubscriptionModifyRequest = {
  type: "coupon",
};
```

## Fields

| Field                                                                                             | Type                                                                                              | Required                                                                                          | Description                                                                                       |
| ------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------- |
| `couponParams`                                                                                    | [models.SubModifyCouponParams](../../sdk/models/sub-modify-coupon-params.md)                      | :heavy_minus_sign:                                                                                | N/A                                                                                               |
| `groupedInvoicingParams`                                                                          | [models.SubModifyGroupedInvoicingParams](../../sdk/models/sub-modify-grouped-invoicing-params.md) | :heavy_minus_sign:                                                                                | N/A                                                                                               |
| `inheritanceParams`                                                                               | [models.SubModifyInheritanceRequest](../../sdk/models/sub-modify-inheritance-request.md)          | :heavy_minus_sign:                                                                                | N/A                                                                                               |
| `quantityChangeParams`                                                                            | [models.SubModifyQuantityChangeRequest](../../sdk/models/sub-modify-quantity-change-request.md)   | :heavy_minus_sign:                                                                                | N/A                                                                                               |
| `taxParams`                                                                                       | [models.SubModifyTaxParams](../../sdk/models/sub-modify-tax-params.md)                            | :heavy_minus_sign:                                                                                | N/A                                                                                               |
| `trialEndParams`                                                                                  | [models.SubModifyTrialEndRequest](../../sdk/models/sub-modify-trial-end-request.md)               | :heavy_minus_sign:                                                                                | N/A                                                                                               |
| `type`                                                                                            | [models.SubscriptionModifyType](../../sdk/models/subscription-modify-type.md)                     | :heavy_check_mark:                                                                                | N/A                                                                                               |