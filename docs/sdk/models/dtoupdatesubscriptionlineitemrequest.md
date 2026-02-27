# DtoUpdateSubscriptionLineItemRequest

## Example Usage

```typescript
import { DtoUpdateSubscriptionLineItemRequest } from "@flexprice/sdk/sdk/models";

let value: DtoUpdateSubscriptionLineItemRequest = {};
```

## Fields

| Field                                                                       | Type                                                                        | Required                                                                    | Description                                                                 |
| --------------------------------------------------------------------------- | --------------------------------------------------------------------------- | --------------------------------------------------------------------------- | --------------------------------------------------------------------------- |
| `amount`                                                                    | *string*                                                                    | :heavy_minus_sign:                                                          | Amount is the new price amount that overrides the original price            |
| `billingModel`                                                              | [models.BillingModel](../../sdk/models/billingmodel.md)                     | :heavy_minus_sign:                                                          | N/A                                                                         |
| `commitmentAmount`                                                          | *number*                                                                    | :heavy_minus_sign:                                                          | Commitment fields                                                           |
| `commitmentDuration`                                                        | [models.BillingPeriod](../../sdk/models/billingperiod.md)                   | :heavy_minus_sign:                                                          | N/A                                                                         |
| `commitmentOverageFactor`                                                   | *number*                                                                    | :heavy_minus_sign:                                                          | N/A                                                                         |
| `commitmentQuantity`                                                        | *number*                                                                    | :heavy_minus_sign:                                                          | N/A                                                                         |
| `commitmentTrueUpEnabled`                                                   | *boolean*                                                                   | :heavy_minus_sign:                                                          | N/A                                                                         |
| `commitmentType`                                                            | [models.CommitmentType](../../sdk/models/commitmenttype.md)                 | :heavy_minus_sign:                                                          | N/A                                                                         |
| `commitmentWindowed`                                                        | *boolean*                                                                   | :heavy_minus_sign:                                                          | N/A                                                                         |
| `effectiveFrom`                                                             | *string*                                                                    | :heavy_minus_sign:                                                          | EffectiveFrom for the existing line item (if not provided, defaults to now) |
| `metadata`                                                                  | Record<string, *string*>                                                    | :heavy_minus_sign:                                                          | Metadata for the new line item                                              |
| `tierMode`                                                                  | [models.BillingTier](../../sdk/models/billingtier.md)                       | :heavy_minus_sign:                                                          | N/A                                                                         |
| `tiers`                                                                     | [models.DtoCreatePriceTier](../../sdk/models/dtocreatepricetier.md)[]       | :heavy_minus_sign:                                                          | Tiers determines the pricing tiers for this line item                       |
| `transformQuantity`                                                         | [models.PriceTransformQuantity](../../sdk/models/pricetransformquantity.md) | :heavy_minus_sign:                                                          | N/A                                                                         |