# WebhookDtoEntitlementWebhookPayload

## Example Usage

```typescript
import { WebhookDtoEntitlementWebhookPayload } from "@flexprice/sdk/sdk/models";

let value: WebhookDtoEntitlementWebhookPayload = {
  entitlement: {
    addon: {
      prices: [
        {
          addon: {},
          meter: {
            createdAt: "2024-03-20T15:04:05Z",
            eventName: "api_request",
            id: "550e8400-e29b-41d4-a716-446655440000",
            name: "API Usage Meter",
            status: "published",
            tenantId: "tenant123",
            updatedAt: "2024-03-20T15:04:05Z",
          },
          plan: {},
        },
      ],
    },
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
    plan: {},
  },
};
```

## Fields

| Field                                                                         | Type                                                                          | Required                                                                      | Description                                                                   |
| ----------------------------------------------------------------------------- | ----------------------------------------------------------------------------- | ----------------------------------------------------------------------------- | ----------------------------------------------------------------------------- |
| `entitlement`                                                                 | [models.DtoEntitlementResponse](../../sdk/models/dto-entitlement-response.md) | :heavy_minus_sign:                                                            | N/A                                                                           |
| `eventType`                                                                   | *string*                                                                      | :heavy_minus_sign:                                                            | N/A                                                                           |