# DtoCreatePaymentRequest

## Example Usage

```typescript
import { DtoCreatePaymentRequest } from "@flexprice/sdk/sdk/models";

let value: DtoCreatePaymentRequest = {
  amount: "31.14",
  currency: "Moroccan Dirham",
  destinationId: "<id>",
  destinationType: "INVOICE",
  paymentMethodType: "PAYMENT_LINK",
};
```

## Fields

| Field                                                                       | Type                                                                        | Required                                                                    | Description                                                                 |
| --------------------------------------------------------------------------- | --------------------------------------------------------------------------- | --------------------------------------------------------------------------- | --------------------------------------------------------------------------- |
| `amount`                                                                    | *string*                                                                    | :heavy_check_mark:                                                          | N/A                                                                         |
| `cancelUrl`                                                                 | *string*                                                                    | :heavy_minus_sign:                                                          | N/A                                                                         |
| `currency`                                                                  | *string*                                                                    | :heavy_check_mark:                                                          | N/A                                                                         |
| `destinationId`                                                             | *string*                                                                    | :heavy_check_mark:                                                          | N/A                                                                         |
| `destinationType`                                                           | [models.PaymentDestinationType](../../sdk/models/paymentdestinationtype.md) | :heavy_check_mark:                                                          | N/A                                                                         |
| `idempotencyKey`                                                            | *string*                                                                    | :heavy_minus_sign:                                                          | N/A                                                                         |
| `metadata`                                                                  | Record<string, *string*>                                                    | :heavy_minus_sign:                                                          | N/A                                                                         |
| `paymentGateway`                                                            | [models.PaymentGatewayType](../../sdk/models/paymentgatewaytype.md)         | :heavy_minus_sign:                                                          | N/A                                                                         |
| `paymentMethodId`                                                           | *string*                                                                    | :heavy_minus_sign:                                                          | N/A                                                                         |
| `paymentMethodType`                                                         | [models.PaymentMethodType](../../sdk/models/paymentmethodtype.md)           | :heavy_check_mark:                                                          | N/A                                                                         |
| `processPayment`                                                            | *boolean*                                                                   | :heavy_minus_sign:                                                          | N/A                                                                         |
| `saveCardAndMakeDefault`                                                    | *boolean*                                                                   | :heavy_minus_sign:                                                          | N/A                                                                         |
| `successUrl`                                                                | *string*                                                                    | :heavy_minus_sign:                                                          | N/A                                                                         |