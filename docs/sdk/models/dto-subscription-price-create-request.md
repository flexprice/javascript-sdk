# DtoSubscriptionPriceCreateRequest

## Example Usage

```typescript
import { DtoSubscriptionPriceCreateRequest } from "@flexprice/sdk/sdk/models";

let value: DtoSubscriptionPriceCreateRequest = {
  billingCadence: "ONETIME",
  billingModel: "TIERED",
  billingPeriod: "HALF_YEARLY",
  invoiceCadence: "ADVANCE",
  priceUnitType: "CUSTOM",
  type: "FIXED",
};
```

## Fields

| Field                                                                         | Type                                                                          | Required                                                                      | Description                                                                   |
| ----------------------------------------------------------------------------- | ----------------------------------------------------------------------------- | ----------------------------------------------------------------------------- | ----------------------------------------------------------------------------- |
| `amount`                                                                      | *string*                                                                      | :heavy_minus_sign:                                                            | N/A                                                                           |
| `billingCadence`                                                              | [models.BillingCadence](../../sdk/models/billing-cadence.md)                  | :heavy_check_mark:                                                            | N/A                                                                           |
| `billingModel`                                                                | [models.BillingModel](../../sdk/models/billing-model.md)                      | :heavy_check_mark:                                                            | N/A                                                                           |
| `billingPeriod`                                                               | [models.BillingPeriod](../../sdk/models/billing-period.md)                    | :heavy_check_mark:                                                            | N/A                                                                           |
| `billingPeriodCount`                                                          | *number*                                                                      | :heavy_minus_sign:                                                            | N/A                                                                           |
| `description`                                                                 | *string*                                                                      | :heavy_minus_sign:                                                            | N/A                                                                           |
| `displayName`                                                                 | *string*                                                                      | :heavy_minus_sign:                                                            | N/A                                                                           |
| `endDate`                                                                     | *string*                                                                      | :heavy_minus_sign:                                                            | N/A                                                                           |
| `filterValues`                                                                | Record<string, *string*[]>                                                    | :heavy_minus_sign:                                                            | N/A                                                                           |
| `invoiceCadence`                                                              | [models.InvoiceCadence](../../sdk/models/invoice-cadence.md)                  | :heavy_check_mark:                                                            | N/A                                                                           |
| `lookupKey`                                                                   | *string*                                                                      | :heavy_minus_sign:                                                            | N/A                                                                           |
| `metadata`                                                                    | Record<string, *string*>                                                      | :heavy_minus_sign:                                                            | N/A                                                                           |
| `meterId`                                                                     | *string*                                                                      | :heavy_minus_sign:                                                            | N/A                                                                           |
| `minQuantity`                                                                 | *number*                                                                      | :heavy_minus_sign:                                                            | N/A                                                                           |
| `priceUnitConfig`                                                             | [models.DtoPriceUnitConfig](../../sdk/models/dto-price-unit-config.md)        | :heavy_minus_sign:                                                            | N/A                                                                           |
| `priceUnitType`                                                               | [models.PriceUnitType](../../sdk/models/price-unit-type.md)                   | :heavy_check_mark:                                                            | N/A                                                                           |
| `startDate`                                                                   | *string*                                                                      | :heavy_minus_sign:                                                            | N/A                                                                           |
| `tierMode`                                                                    | [models.BillingTier](../../sdk/models/billing-tier.md)                        | :heavy_minus_sign:                                                            | N/A                                                                           |
| `tiers`                                                                       | [models.DtoCreatePriceTier](../../sdk/models/dto-create-price-tier.md)[]      | :heavy_minus_sign:                                                            | N/A                                                                           |
| `transformQuantity`                                                           | [models.PriceTransformQuantity](../../sdk/models/price-transform-quantity.md) | :heavy_minus_sign:                                                            | N/A                                                                           |
| `trialPeriod`                                                                 | *number*                                                                      | :heavy_minus_sign:                                                            | N/A                                                                           |
| `type`                                                                        | [models.PriceType](../../sdk/models/price-type.md)                            | :heavy_check_mark:                                                            | N/A                                                                           |