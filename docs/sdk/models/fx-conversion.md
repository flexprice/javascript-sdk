# FxConversion

## Example Usage

```typescript
import { FxConversion } from "@flexprice/sdk/sdk/models";

let value: FxConversion = {};
```

## Fields

| Field                                                                                         | Type                                                                                          | Required                                                                                      | Description                                                                                   |
| --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| `billingCurrency`                                                                             | *string*                                                                                      | :heavy_minus_sign:                                                                            | BillingCurrency is the currency the invoice was issued in.                                    |
| `chargeCurrency`                                                                              | *string*                                                                                      | :heavy_minus_sign:                                                                            | ChargeCurrency is the invoice's original (draft) currency.                                    |
| `convertedAt`                                                                                 | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_minus_sign:                                                                            | ConvertedAt is when the conversion ran.                                                       |
| `rate`                                                                                        | *string*                                                                                      | :heavy_minus_sign:                                                                            | Rate is the frozen rate: billing per 1 charge unit.                                           |
| `rateId`                                                                                      | *string*                                                                                      | :heavy_minus_sign:                                                                            | RateID is the fx_rates row used, for reference only; never read again.                        |
| `scope`                                                                                       | [models.FXRateScope](../../sdk/models/fx-rate-scope.md)                                       | :heavy_minus_sign:                                                                            | N/A                                                                                           |
| `source`                                                                                      | [models.FxConversionSource](../../sdk/models/fx-conversion-source.md)                         | :heavy_minus_sign:                                                                            | N/A                                                                                           |