# DtoCreatePriceRequest

## Example Usage

```typescript
import { DtoCreatePriceRequest } from "@flexprice/sdk/sdk/models";

let value: DtoCreatePriceRequest = {
  billingCadence: "RECURRING",
  billingModel: "TIERED",
  billingPeriod: "ANNUAL",
  currency: "Vatu",
  entityId: "<id>",
  entityType: "ADDON",
  invoiceCadence: "ARREAR",
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
| `currency`                                                                    | *string*                                                                      | :heavy_check_mark:                                                            | N/A                                                                           |
| `description`                                                                 | *string*                                                                      | :heavy_minus_sign:                                                            | N/A                                                                           |
| `displayName`                                                                 | *string*                                                                      | :heavy_minus_sign:                                                            | N/A                                                                           |
| `endDate`                                                                     | *string*                                                                      | :heavy_minus_sign:                                                            | N/A                                                                           |
| `entityId`                                                                    | *string*                                                                      | :heavy_check_mark:                                                            | N/A                                                                           |
| `entityType`                                                                  | [models.PriceEntityType](../../sdk/models/price-entity-type.md)               | :heavy_check_mark:                                                            | N/A                                                                           |
| `filterValues`                                                                | Record<string, *string*[]>                                                    | :heavy_minus_sign:                                                            | N/A                                                                           |
| `groupId`                                                                     | *string*                                                                      | :heavy_minus_sign:                                                            | GroupID is the id of the group to add the price to                            |
| `invoiceCadence`                                                              | [models.InvoiceCadence](../../sdk/models/invoice-cadence.md)                  | :heavy_check_mark:                                                            | N/A                                                                           |
| `lookupKey`                                                                   | *string*                                                                      | :heavy_minus_sign:                                                            | N/A                                                                           |
| `metadata`                                                                    | Record<string, *string*>                                                      | :heavy_minus_sign:                                                            | N/A                                                                           |
| `meterId`                                                                     | *string*                                                                      | :heavy_minus_sign:                                                            | N/A                                                                           |
| `minQuantity`                                                                 | *number*                                                                      | :heavy_minus_sign:                                                            | MinQuantity is the minimum quantity of the price                              |
| `priceUnitConfig`                                                             | [models.DtoPriceUnitConfig](../../sdk/models/dto-price-unit-config.md)        | :heavy_minus_sign:                                                            | N/A                                                                           |
| `priceUnitType`                                                               | [models.PriceUnitType](../../sdk/models/price-unit-type.md)                   | :heavy_check_mark:                                                            | N/A                                                                           |
| `startDate`                                                                   | *string*                                                                      | :heavy_minus_sign:                                                            | N/A                                                                           |
| `tierMode`                                                                    | [models.BillingTier](../../sdk/models/billing-tier.md)                        | :heavy_minus_sign:                                                            | N/A                                                                           |
| `tiers`                                                                       | [models.DtoCreatePriceTier](../../sdk/models/dto-create-price-tier.md)[]      | :heavy_minus_sign:                                                            | N/A                                                                           |
| `transformQuantity`                                                           | [models.PriceTransformQuantity](../../sdk/models/price-transform-quantity.md) | :heavy_minus_sign:                                                            | N/A                                                                           |
| `trialPeriod`                                                                 | *number*                                                                      | :heavy_minus_sign:                                                            | N/A                                                                           |
| `type`                                                                        | [models.PriceType](../../sdk/models/price-type.md)                            | :heavy_check_mark:                                                            | N/A                                                                           |