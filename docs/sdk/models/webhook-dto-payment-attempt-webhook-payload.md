# WebhookDtoPaymentAttemptWebhookPayload

## Example Usage

```typescript
import { WebhookDtoPaymentAttemptWebhookPayload } from "@flexprice/sdk/sdk/models";

let value: WebhookDtoPaymentAttemptWebhookPayload = {};
```

## Fields

| Field                                                                                | Type                                                                                 | Required                                                                             | Description                                                                          |
| ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ |
| `attempt`                                                                            | [models.WebhookDtoPaymentAttempt](../../sdk/models/webhook-dto-payment-attempt.md)   | :heavy_minus_sign:                                                                   | N/A                                                                                  |
| `checkoutSession`                                                                    | [models.WebhookDtoCheckoutSession](../../sdk/models/webhook-dto-checkout-session.md) | :heavy_minus_sign:                                                                   | N/A                                                                                  |
| `eventType`                                                                          | [models.WebhookEventName](../../sdk/models/webhook-event-name.md)                    | :heavy_minus_sign:                                                                   | N/A                                                                                  |
| `payment`                                                                            | [models.WebhookDtoPayment](../../sdk/models/webhook-dto-payment.md)                  | :heavy_minus_sign:                                                                   | N/A                                                                                  |