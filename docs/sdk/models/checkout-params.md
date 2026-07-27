# CheckoutParams

## Example Usage

```typescript
import { CheckoutParams } from "@flexprice/sdk/sdk/models";

let value: CheckoutParams = {
  paymentProvider: "razorpay",
};
```

## Fields

| Field                                                                                        | Type                                                                                         | Required                                                                                     | Description                                                                                  |
| -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- |
| `cancelUrl`                                                                                  | *string*                                                                                     | :heavy_minus_sign:                                                                           | N/A                                                                                          |
| `failureUrl`                                                                                 | *string*                                                                                     | :heavy_minus_sign:                                                                           | N/A                                                                                          |
| `idempotencyKey`                                                                             | *string*                                                                                     | :heavy_minus_sign:                                                                           | N/A                                                                                          |
| `metadata`                                                                                   | Record<string, *string*>                                                                     | :heavy_minus_sign:                                                                           | N/A                                                                                          |
| `paymentProvider`                                                                            | [models.CheckoutPaymentProvider](../../sdk/models/checkout-payment-provider.md)              | :heavy_check_mark:                                                                           | N/A                                                                                          |
| `paymentProviderConfig`                                                                      | [models.CheckoutPaymentProviderConfig](../../sdk/models/checkout-payment-provider-config.md) | :heavy_minus_sign:                                                                           | N/A                                                                                          |
| `successUrl`                                                                                 | *string*                                                                                     | :heavy_minus_sign:                                                                           | N/A                                                                                          |