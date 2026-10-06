# WebhookDtoInvoiceSyncWebhookPayload

## Example Usage

```typescript
import { WebhookDtoInvoiceSyncWebhookPayload } from "@flexprice/sdk/sdk/models";

let value: WebhookDtoInvoiceSyncWebhookPayload = {};
```

## Fields

| Field                                                                                | Type                                                                                 | Required                                                                             | Description                                                                          |
| ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ |
| `error`                                                                              | *string*                                                                             | :heavy_minus_sign:                                                                   | N/A                                                                                  |
| `eventType`                                                                          | [models.WebhookEventName](../../sdk/models/webhook-event-name.md)                    | :heavy_minus_sign:                                                                   | N/A                                                                                  |
| `invoice`                                                                            | [models.WebhookDtoInvoice](../../sdk/models/webhook-dto-invoice.md)                  | :heavy_minus_sign:                                                                   | N/A                                                                                  |
| `providerDetails`                                                                    | [models.WebhookDtoProviderDetails](../../sdk/models/webhook-dto-provider-details.md) | :heavy_minus_sign:                                                                   | N/A                                                                                  |