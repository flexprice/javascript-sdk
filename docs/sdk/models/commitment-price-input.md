# CommitmentPriceInput

## Example Usage

```typescript
import { CommitmentPriceInput } from "@flexprice/sdk/sdk/models";

let value: CommitmentPriceInput = {};
```

## Fields

| Field                                                                         | Type                                                                          | Required                                                                      | Description                                                                   |
| ----------------------------------------------------------------------------- | ----------------------------------------------------------------------------- | ----------------------------------------------------------------------------- | ----------------------------------------------------------------------------- |
| `amount`                                                                      | *string*                                                                      | :heavy_minus_sign:                                                            | N/A                                                                           |
| `billingModel`                                                                | [models.BillingModel](../../sdk/models/billing-model.md)                      | :heavy_minus_sign:                                                            | N/A                                                                           |
| `tierMode`                                                                    | [models.BillingTier](../../sdk/models/billing-tier.md)                        | :heavy_minus_sign:                                                            | N/A                                                                           |
| `tiers`                                                                       | [models.CreatePriceTier](../../sdk/models/create-price-tier.md)[]             | :heavy_minus_sign:                                                            | N/A                                                                           |
| `transformQuantity`                                                           | [models.PriceTransformQuantity](../../sdk/models/price-transform-quantity.md) | :heavy_minus_sign:                                                            | N/A                                                                           |