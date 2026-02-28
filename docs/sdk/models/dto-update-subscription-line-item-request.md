# DtoUpdateSubscriptionLineItemRequest

## Example Usage

```typescript
import { DtoUpdateSubscriptionLineItemRequest } from "@flexprice/sdk/sdk/models";

let value: DtoUpdateSubscriptionLineItemRequest = {};
```

## Fields

| Field                                                                         | Type                                                                          | Required                                                                      | Description                                                                   |
| ----------------------------------------------------------------------------- | ----------------------------------------------------------------------------- | ----------------------------------------------------------------------------- | ----------------------------------------------------------------------------- |
| `amount`                                                                      | *string*                                                                      | :heavy_minus_sign:                                                            | Amount is the new price amount that overrides the original price              |
| `billingModel`                                                                | [models.BillingModel](../../sdk/models/billing-model.md)                      | :heavy_minus_sign:                                                            | N/A                                                                           |
| `commitmentAmount`                                                            | *number*                                                                      | :heavy_minus_sign:                                                            | Commitment fields                                                             |
| `commitmentDuration`                                                          | [models.BillingPeriod](../../sdk/models/billing-period.md)                    | :heavy_minus_sign:                                                            | N/A                                                                           |
| `commitmentOverageFactor`                                                     | *number*                                                                      | :heavy_minus_sign:                                                            | N/A                                                                           |
| `commitmentQuantity`                                                          | *number*                                                                      | :heavy_minus_sign:                                                            | N/A                                                                           |
| `commitmentTrueUpEnabled`                                                     | *boolean*                                                                     | :heavy_minus_sign:                                                            | N/A                                                                           |
| `commitmentType`                                                              | [models.CommitmentType](../../sdk/models/commitment-type.md)                  | :heavy_minus_sign:                                                            | N/A                                                                           |
| `commitmentWindowed`                                                          | *boolean*                                                                     | :heavy_minus_sign:                                                            | N/A                                                                           |
| `effectiveFrom`                                                               | *string*                                                                      | :heavy_minus_sign:                                                            | EffectiveFrom for the existing line item (if not provided, defaults to now)   |
| `metadata`                                                                    | Record<string, *string*>                                                      | :heavy_minus_sign:                                                            | Metadata for the new line item                                                |
| `tierMode`                                                                    | [models.BillingTier](../../sdk/models/billing-tier.md)                        | :heavy_minus_sign:                                                            | N/A                                                                           |
| `tiers`                                                                       | [models.DtoCreatePriceTier](../../sdk/models/dto-create-price-tier.md)[]      | :heavy_minus_sign:                                                            | Tiers determines the pricing tiers for this line item                         |
| `transformQuantity`                                                           | [models.PriceTransformQuantity](../../sdk/models/price-transform-quantity.md) | :heavy_minus_sign:                                                            | N/A                                                                           |