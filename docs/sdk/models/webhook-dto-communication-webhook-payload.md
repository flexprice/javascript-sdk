# WebhookDtoCommunicationWebhookPayload

## Example Usage

```typescript
import { WebhookDtoCommunicationWebhookPayload } from "@flexprice/sdk/sdk/models";

let value: WebhookDtoCommunicationWebhookPayload = {
  invoice: {
    subscription: {
      latestInvoice: {
        subscription: {
          plan: {},
        },
      },
      plan: {},
    },
  },
};
```

## Fields

| Field                                                                 | Type                                                                  | Required                                                              | Description                                                           |
| --------------------------------------------------------------------- | --------------------------------------------------------------------- | --------------------------------------------------------------------- | --------------------------------------------------------------------- |
| `eventType`                                                           | [models.WebhookEventName](../../sdk/models/webhook-event-name.md)     | :heavy_minus_sign:                                                    | N/A                                                                   |
| `invoice`                                                             | [models.DtoInvoiceResponse](../../sdk/models/dto-invoice-response.md) | :heavy_minus_sign:                                                    | N/A                                                                   |