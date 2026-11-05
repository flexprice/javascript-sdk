# WebhookDtoBillingTermsWebhookPayload

## Example Usage

```typescript
import { WebhookDtoBillingTermsWebhookPayload } from "@flexprice/sdk/sdk/models";

let value: WebhookDtoBillingTermsWebhookPayload = {};
```

## Fields

| Field                                                                      | Type                                                                       | Required                                                                   | Description                                                                |
| -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- |
| `billingTerms`                                                             | [models.BillingtermTerm](../../sdk/models/billingterm-term.md)[]           | :heavy_minus_sign:                                                         | N/A                                                                        |
| `eventType`                                                                | [models.WebhookEventName](../../sdk/models/webhook-event-name.md)          | :heavy_minus_sign:                                                         | N/A                                                                        |
| `ownerId`                                                                  | *string*                                                                   | :heavy_minus_sign:                                                         | N/A                                                                        |
| `ownerType`                                                                | [models.BillingTermOwnerType](../../sdk/models/billing-term-owner-type.md) | :heavy_minus_sign:                                                         | N/A                                                                        |