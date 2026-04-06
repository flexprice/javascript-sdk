# WebhookDtoSubscriptionWebhookPayload

## Example Usage

```typescript
import { WebhookDtoSubscriptionWebhookPayload } from "@flexprice/sdk/sdk/models";

let value: WebhookDtoSubscriptionWebhookPayload = {
  subscription: {
    latestInvoice: {
      subscription: {
        plan: {},
      },
    },
    plan: {},
  },
};
```

## Fields

| Field                                                                    | Type                                                                     | Required                                                                 | Description                                                              |
| ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ |
| `eventType`                                                              | [models.WebhookEventName](../../sdk/models/webhook-event-name.md)        | :heavy_minus_sign:                                                       | N/A                                                                      |
| `subscription`                                                           | [models.SubscriptionResponse](../../sdk/models/subscription-response.md) | :heavy_minus_sign:                                                       | N/A                                                                      |