# WebhookDtoCustomerWebhookPayload

## Example Usage

```typescript
import { WebhookDtoCustomerWebhookPayload } from "@flexprice/sdk/sdk/models";

let value: WebhookDtoCustomerWebhookPayload = {};
```

## Fields

| Field                                                                   | Type                                                                    | Required                                                                | Description                                                             |
| ----------------------------------------------------------------------- | ----------------------------------------------------------------------- | ----------------------------------------------------------------------- | ----------------------------------------------------------------------- |
| `customer`                                                              | [models.DtoCustomerResponse](../../sdk/models/dto-customer-response.md) | :heavy_minus_sign:                                                      | Customer response object containing all customer information            |
| `eventType`                                                             | [models.WebhookEventName](../../sdk/models/webhook-event-name.md)       | :heavy_minus_sign:                                                      | N/A                                                                     |