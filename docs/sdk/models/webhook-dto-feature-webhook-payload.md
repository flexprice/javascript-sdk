# WebhookDtoFeatureWebhookPayload

## Example Usage

```typescript
import { WebhookDtoFeatureWebhookPayload } from "@flexprice/sdk/sdk/models";

let value: WebhookDtoFeatureWebhookPayload = {
  feature: {
    meter: {
      createdAt: "2024-03-20T15:04:05Z",
      eventName: "api_request",
      id: "550e8400-e29b-41d4-a716-446655440000",
      name: "API Usage Meter",
      status: "published",
      tenantId: "tenant123",
      updatedAt: "2024-03-20T15:04:05Z",
    },
  },
};
```

## Fields

| Field                                                                 | Type                                                                  | Required                                                              | Description                                                           |
| --------------------------------------------------------------------- | --------------------------------------------------------------------- | --------------------------------------------------------------------- | --------------------------------------------------------------------- |
| `eventType`                                                           | [models.WebhookEventName](../../sdk/models/webhook-event-name.md)     | :heavy_minus_sign:                                                    | N/A                                                                   |
| `feature`                                                             | [models.DtoFeatureResponse](../../sdk/models/dto-feature-response.md) | :heavy_minus_sign:                                                    | N/A                                                                   |