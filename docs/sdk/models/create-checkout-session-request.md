# CreateCheckoutSessionRequest

## Example Usage

```typescript
import { CreateCheckoutSessionRequest } from "@flexprice/sdk/sdk/models";

let value: CreateCheckoutSessionRequest = {
  action: "modify_subscription",
  customerExternalId: "<id>",
  paymentProvider: "razorpay",
};
```

## Fields

| Field                                                                                        | Type                                                                                         | Required                                                                                     | Description                                                                                  |
| -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- |
| `action`                                                                                     | [models.CheckoutAction](../../sdk/models/checkout-action.md)                                 | :heavy_check_mark:                                                                           | N/A                                                                                          |
| `cancelUrl`                                                                                  | *string*                                                                                     | :heavy_minus_sign:                                                                           | N/A                                                                                          |
| `configuration`                                                                              | [models.CheckoutConfiguration](../../sdk/models/checkout-configuration.md)                   | :heavy_minus_sign:                                                                           | N/A                                                                                          |
| `customerExternalId`                                                                         | *string*                                                                                     | :heavy_check_mark:                                                                           | N/A                                                                                          |
| `failureUrl`                                                                                 | *string*                                                                                     | :heavy_minus_sign:                                                                           | N/A                                                                                          |
| `idempotencyKey`                                                                             | *string*                                                                                     | :heavy_minus_sign:                                                                           | N/A                                                                                          |
| `metadata`                                                                                   | Record<string, *string*>                                                                     | :heavy_minus_sign:                                                                           | N/A                                                                                          |
| `paymentProvider`                                                                            | [models.CheckoutPaymentProvider](../../sdk/models/checkout-payment-provider.md)              | :heavy_check_mark:                                                                           | N/A                                                                                          |
| `paymentProviderConfig`                                                                      | [models.CheckoutPaymentProviderConfig](../../sdk/models/checkout-payment-provider-config.md) | :heavy_minus_sign:                                                                           | N/A                                                                                          |
| `successUrl`                                                                                 | *string*                                                                                     | :heavy_minus_sign:                                                                           | N/A                                                                                          |