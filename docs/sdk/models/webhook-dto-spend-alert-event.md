# WebhookDtoSpendAlertEvent

## Example Usage

```typescript
import { WebhookDtoSpendAlertEvent } from "@flexprice/sdk/sdk/models";

let value: WebhookDtoSpendAlertEvent = {};
```

## Fields

| Field                                                                                         | Type                                                                                          | Required                                                                                      | Description                                                                                   |
| --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| `alertStatus`                                                                                 | [models.AlertState](../../sdk/models/alert-state.md)                                          | :heavy_minus_sign:                                                                            | N/A                                                                                           |
| `alertType`                                                                                   | [models.AlertType](../../sdk/models/alert-type.md)                                            | :heavy_minus_sign:                                                                            | N/A                                                                                           |
| `currentSpend`                                                                                | *string*                                                                                      | :heavy_minus_sign:                                                                            | N/A                                                                                           |
| `groupId`                                                                                     | *string*                                                                                      | :heavy_minus_sign:                                                                            | N/A                                                                                           |
| `subscription`                                                                                | [models.WebhookDtoSubscription](../../sdk/models/webhook-dto-subscription.md)                 | :heavy_minus_sign:                                                                            | N/A                                                                                           |
| `subscriptionLineItemId`                                                                      | *string*                                                                                      | :heavy_minus_sign:                                                                            | N/A                                                                                           |
| `threshold`                                                                                   | *string*                                                                                      | :heavy_minus_sign:                                                                            | N/A                                                                                           |
| `triggeredAt`                                                                                 | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_minus_sign:                                                                            | N/A                                                                                           |