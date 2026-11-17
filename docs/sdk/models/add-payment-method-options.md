# AddPaymentMethodOptions

## Example Usage

```typescript
import { AddPaymentMethodOptions } from "@flexprice/sdk/sdk/models";

let value: AddPaymentMethodOptions = {};
```

## Fields

| Field                                                                               | Type                                                                                | Required                                                                            | Description                                                                         |
| ----------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------- |
| `paymentMethodTypes`                                                                | *string*[]                                                                          | :heavy_minus_sign:                                                                  | PaymentMethodTypes are the methods it sets up, e.g. ["enach"] for Razorpay.         |
| `setsDefault`                                                                       | *boolean*                                                                           | :heavy_minus_sign:                                                                  | SetsDefault reports whether it can make the saved method the default (Stripe only). |