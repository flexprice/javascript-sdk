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

| Field                                                                       | Type                                                                        | Required                                                                    | Description                                                                 |
| --------------------------------------------------------------------------- | --------------------------------------------------------------------------- | --------------------------------------------------------------------------- | --------------------------------------------------------------------------- |
| `amount`                                                                    | *string*                                                                    | :heavy_minus_sign:                                                          | N/A                                                                         |
| `billingCadence`                                                            | [models.BillingCadence](../../sdk/models/billingcadence.md)                 | :heavy_check_mark:                                                          | N/A                                                                         |
| `billingModel`                                                              | [models.BillingModel](../../sdk/models/billingmodel.md)                     | :heavy_check_mark:                                                          | N/A                                                                         |
| `billingPeriod`                                                             | [models.BillingPeriod](../../sdk/models/billingperiod.md)                   | :heavy_check_mark:                                                          | N/A                                                                         |
| `billingPeriodCount`                                                        | *number*                                                                    | :heavy_minus_sign:                                                          | N/A                                                                         |
| `description`                                                               | *string*                                                                    | :heavy_minus_sign:                                                          | N/A                                                                         |
| `displayName`                                                               | *string*                                                                    | :heavy_minus_sign:                                                          | N/A                                                                         |
| `endDate`                                                                   | *string*                                                                    | :heavy_minus_sign:                                                          | N/A                                                                         |
| `filterValues`                                                              | Record<string, *string*[]>                                                  | :heavy_minus_sign:                                                          | N/A                                                                         |
| `invoiceCadence`                                                            | [models.InvoiceCadence](../../sdk/models/invoicecadence.md)                 | :heavy_check_mark:                                                          | N/A                                                                         |
| `lookupKey`                                                                 | *string*                                                                    | :heavy_minus_sign:                                                          | N/A                                                                         |
| `metadata`                                                                  | Record<string, *string*>                                                    | :heavy_minus_sign:                                                          | N/A                                                                         |
| `meterId`                                                                   | *string*                                                                    | :heavy_minus_sign:                                                          | N/A                                                                         |
| `minQuantity`                                                               | *number*                                                                    | :heavy_minus_sign:                                                          | N/A                                                                         |
| `priceUnitConfig`                                                           | [models.DtoPriceUnitConfig](../../sdk/models/dtopriceunitconfig.md)         | :heavy_minus_sign:                                                          | N/A                                                                         |
| `priceUnitType`                                                             | [models.PriceUnitType](../../sdk/models/priceunittype.md)                   | :heavy_check_mark:                                                          | N/A                                                                         |
| `startDate`                                                                 | *string*                                                                    | :heavy_minus_sign:                                                          | N/A                                                                         |
| `tierMode`                                                                  | [models.BillingTier](../../sdk/models/billingtier.md)                       | :heavy_minus_sign:                                                          | N/A                                                                         |
| `tiers`                                                                     | [models.DtoCreatePriceTier](../../sdk/models/dtocreatepricetier.md)[]       | :heavy_minus_sign:                                                          | N/A                                                                         |
| `transformQuantity`                                                         | [models.PriceTransformQuantity](../../sdk/models/pricetransformquantity.md) | :heavy_minus_sign:                                                          | N/A                                                                         |
| `trialPeriod`                                                               | *number*                                                                    | :heavy_minus_sign:                                                          | N/A                                                                         |
| `type`                                                                      | [models.PriceType](../../sdk/models/pricetype.md)                           | :heavy_check_mark:                                                          | N/A                                                                         |