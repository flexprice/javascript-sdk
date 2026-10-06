# ProviderSavedPaymentMethods

## Example Usage

```typescript
import { ProviderSavedPaymentMethods } from "@flexprice/sdk/sdk/models";

let value: ProviderSavedPaymentMethods = {};
```

## Fields

| Field                                                                   | Type                                                                    | Required                                                                | Description                                                             |
| ----------------------------------------------------------------------- | ----------------------------------------------------------------------- | ----------------------------------------------------------------------- | ----------------------------------------------------------------------- |
| `error`                                                                 | [models.ProviderError](../../sdk/models/provider-error.md)              | :heavy_minus_sign:                                                      | N/A                                                                     |
| `items`                                                                 | [models.SavedPaymentMethod](../../sdk/models/saved-payment-method.md)[] | :heavy_minus_sign:                                                      | N/A                                                                     |
| `provider`                                                              | [models.PaymentGatewayType](../../sdk/models/payment-gateway-type.md)   | :heavy_minus_sign:                                                      | N/A                                                                     |