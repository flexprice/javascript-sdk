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

| Field                                                                           | Type                                                                            | Required                                                                        | Description                                                                     |
| ------------------------------------------------------------------------------- | ------------------------------------------------------------------------------- | ------------------------------------------------------------------------------- | ------------------------------------------------------------------------------- |
| `eventType`                                                                     | *string*                                                                        | :heavy_minus_sign:                                                              | N/A                                                                             |
| `subscription`                                                                  | [models.DtoSubscriptionResponse](../../sdk/models/dto-subscription-response.md) | :heavy_minus_sign:                                                              | N/A                                                                             |