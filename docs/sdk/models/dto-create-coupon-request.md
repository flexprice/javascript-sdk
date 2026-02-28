# DtoCreateCouponRequest

## Example Usage

```typescript
import { DtoCreateCouponRequest } from "@flexprice/sdk/sdk/models";

let value: DtoCreateCouponRequest = {
  cadence: "repeated",
  name: "<value>",
  type: "fixed",
};
```

## Fields

| Field                                                      | Type                                                       | Required                                                   | Description                                                |
| ---------------------------------------------------------- | ---------------------------------------------------------- | ---------------------------------------------------------- | ---------------------------------------------------------- |
| `amountOff`                                                | *string*                                                   | :heavy_minus_sign:                                         | N/A                                                        |
| `cadence`                                                  | [models.CouponCadence](../../sdk/models/coupon-cadence.md) | :heavy_check_mark:                                         | N/A                                                        |
| `currency`                                                 | *string*                                                   | :heavy_minus_sign:                                         | N/A                                                        |
| `durationInPeriods`                                        | *number*                                                   | :heavy_minus_sign:                                         | N/A                                                        |
| `maxRedemptions`                                           | *number*                                                   | :heavy_minus_sign:                                         | N/A                                                        |
| `metadata`                                                 | Record<string, *string*>                                   | :heavy_minus_sign:                                         | N/A                                                        |
| `name`                                                     | *string*                                                   | :heavy_check_mark:                                         | N/A                                                        |
| `percentageOff`                                            | *string*                                                   | :heavy_minus_sign:                                         | N/A                                                        |
| `redeemAfter`                                              | *string*                                                   | :heavy_minus_sign:                                         | N/A                                                        |
| `redeemBefore`                                             | *string*                                                   | :heavy_minus_sign:                                         | N/A                                                        |
| `rules`                                                    | Record<string, *any*>                                      | :heavy_minus_sign:                                         | N/A                                                        |
| `type`                                                     | [models.CouponType](../../sdk/models/coupon-type.md)       | :heavy_check_mark:                                         | N/A                                                        |