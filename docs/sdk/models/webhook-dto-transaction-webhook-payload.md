# WebhookDtoTransactionWebhookPayload

## Example Usage

```typescript
import { WebhookDtoTransactionWebhookPayload } from "@flexprice/sdk/sdk/models";

let value: WebhookDtoTransactionWebhookPayload = {};
```

## Fields

| Field                                                                               | Type                                                                                | Required                                                                            | Description                                                                         |
| ----------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------- |
| `eventType`                                                                         | [models.WebhookEventName](../../sdk/models/webhook-event-name.md)                   | :heavy_minus_sign:                                                                  | N/A                                                                                 |
| `transaction`                                                                       | [models.WalletTransactionResponse](../../sdk/models/wallet-transaction-response.md) | :heavy_minus_sign:                                                                  | N/A                                                                                 |
| `wallet`                                                                            | [models.Wallet](../../sdk/models/wallet.md)                                         | :heavy_minus_sign:                                                                  | N/A                                                                                 |