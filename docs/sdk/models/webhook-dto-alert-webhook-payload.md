# WebhookDtoAlertWebhookPayload

## Example Usage

```typescript
import { WebhookDtoAlertWebhookPayload } from "@flexprice/sdk/sdk/models";

let value: WebhookDtoAlertWebhookPayload = {
  feature: {
    meter: {
      createdAt: new Date("2024-03-20T15:04:05Z"),
      eventName: "api_request",
      id: "550e8400-e29b-41d4-a716-446655440000",
      name: "API Usage Meter",
      status: "published",
      tenantId: "tenant123",
      updatedAt: new Date("2024-03-20T15:04:05Z"),
    },
  },
};
```

## Fields

| Field                                                             | Type                                                              | Required                                                          | Description                                                       |
| ----------------------------------------------------------------- | ----------------------------------------------------------------- | ----------------------------------------------------------------- | ----------------------------------------------------------------- |
| `alertStatus`                                                     | *string*                                                          | :heavy_minus_sign:                                                | N/A                                                               |
| `alertType`                                                       | *string*                                                          | :heavy_minus_sign:                                                | N/A                                                               |
| `customer`                                                        | [models.Customer1](../../sdk/models/customer1.md)                 | :heavy_minus_sign:                                                | Customer response object containing all customer information      |
| `eventType`                                                       | [models.WebhookEventName](../../sdk/models/webhook-event-name.md) | :heavy_minus_sign:                                                | N/A                                                               |
| `feature`                                                         | [models.Feature1](../../sdk/models/feature1.md)                   | :heavy_minus_sign:                                                | N/A                                                               |
| `wallet`                                                          | [models.Wallet](../../sdk/models/wallet.md)                       | :heavy_minus_sign:                                                | N/A                                                               |