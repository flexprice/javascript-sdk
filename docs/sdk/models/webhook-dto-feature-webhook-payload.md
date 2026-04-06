# WebhookDtoFeatureWebhookPayload

## Example Usage

```typescript
import { WebhookDtoFeatureWebhookPayload } from "@flexprice/sdk/sdk/models";

let value: WebhookDtoFeatureWebhookPayload = {
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
| `eventType`                                                       | [models.WebhookEventName](../../sdk/models/webhook-event-name.md) | :heavy_minus_sign:                                                | N/A                                                               |
| `feature`                                                         | [models.Feature1](../../sdk/models/feature1.md)                   | :heavy_minus_sign:                                                | N/A                                                               |