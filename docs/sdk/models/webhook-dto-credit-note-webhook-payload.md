# WebhookDtoCreditNoteWebhookPayload

## Example Usage

```typescript
import { WebhookDtoCreditNoteWebhookPayload } from "@flexprice/sdk/sdk/models";

let value: WebhookDtoCreditNoteWebhookPayload = {
  creditNote: {
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

| Field                                                                        | Type                                                                         | Required                                                                     | Description                                                                  |
| ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- |
| `creditNote`                                                                 | [models.DtoCreditNoteResponse](../../sdk/models/dto-credit-note-response.md) | :heavy_minus_sign:                                                           | N/A                                                                          |
| `eventType`                                                                  | *string*                                                                     | :heavy_minus_sign:                                                           | N/A                                                                          |