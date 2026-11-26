# StripePaymentGatewayOptions

## Example Usage

```typescript
import { StripePaymentGatewayOptions } from "@flexprice/sdk/sdk/models";

let value: StripePaymentGatewayOptions = {};
```

## Fields

| Field                                                                          | Type                                                                           | Required                                                                       | Description                                                                    |
| ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ |
| `allowPromotionCodes`                                                          | *boolean*                                                                      | :heavy_minus_sign:                                                             | AllowPromotionCodes lets the customer enter a promotion code; nil keeps it on. |
| `taxIdCollectionEnabled`                                                       | *boolean*                                                                      | :heavy_minus_sign:                                                             | TaxIDCollectionEnabled only applies to PAYMENT_LINK Checkout Sessions.         |