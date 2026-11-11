# WebhookDtoInvoicePaymentFailedWebhookPayload

## Example Usage

```typescript
import { WebhookDtoInvoicePaymentFailedWebhookPayload } from "@flexprice/sdk/sdk/models";

let value: WebhookDtoInvoicePaymentFailedWebhookPayload = {};
```

## Fields

| Field                                                                                    | Type                                                                                     | Required                                                                                 | Description                                                                              |
| ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- |
| `error`                                                                                  | *string*                                                                                 | :heavy_minus_sign:                                                                       | N/A                                                                                      |
| `eventType`                                                                              | [models.WebhookEventName](../../sdk/models/webhook-event-name.md)                        | :heavy_minus_sign:                                                                       | N/A                                                                                      |
| `invoice`                                                                                | [models.WebhookDtoInvoice](../../sdk/models/webhook-dto-invoice.md)                      | :heavy_minus_sign:                                                                       | N/A                                                                                      |
| `isAutoChargeAttempt`                                                                    | *boolean*                                                                                | :heavy_minus_sign:                                                                       | N/A                                                                                      |
| `paymentId`                                                                              | *string*                                                                                 | :heavy_minus_sign:                                                                       | N/A                                                                                      |
| `provider`                                                                               | [models.SecretProvider](../../sdk/models/secret-provider.md)                             | :heavy_minus_sign:                                                                       | N/A                                                                                      |
| `reason`                                                                                 | [models.InvoicePaymentFailureReason](../../sdk/models/invoice-payment-failure-reason.md) | :heavy_minus_sign:                                                                       | N/A                                                                                      |