# WebhookDtoInvoiceWebhookPayload

## Example Usage

```typescript
import { WebhookDtoInvoiceWebhookPayload } from "@flexprice/sdk/sdk/models";

let value: WebhookDtoInvoiceWebhookPayload = {
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