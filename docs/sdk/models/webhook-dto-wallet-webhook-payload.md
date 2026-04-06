# WebhookDtoWalletWebhookPayload

## Example Usage

```typescript
import { WebhookDtoWalletWebhookPayload } from "@flexprice/sdk/sdk/models";

let value: WebhookDtoWalletWebhookPayload = {};
```

## Fields

| Field                                                                                 | Type                                                                                  | Required                                                                              | Description                                                                           |
| ------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------- |
| `alert`                                                                               | [models.WebhookDtoWalletAlertInfo](../../sdk/models/webhook-dto-wallet-alert-info.md) | :heavy_minus_sign:                                                                    | N/A                                                                                   |
| `customer`                                                                            | [models.Customer1](../../sdk/models/customer1.md)                                     | :heavy_minus_sign:                                                                    | Customer response object containing all customer information                          |
| `eventType`                                                                           | [models.WebhookEventName](../../sdk/models/webhook-event-name.md)                     | :heavy_minus_sign:                                                                    | N/A                                                                                   |
| `wallet`                                                                              | [models.Wallet](../../sdk/models/wallet.md)                                           | :heavy_minus_sign:                                                                    | N/A                                                                                   |