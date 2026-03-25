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
| `customer`                                                                            | [models.DtoCustomerResponse](../../sdk/models/dto-customer-response.md)               | :heavy_minus_sign:                                                                    | Customer response object containing all customer information                          |
| `eventType`                                                                           | *string*                                                                              | :heavy_minus_sign:                                                                    | N/A                                                                                   |
| `wallet`                                                                              | [models.DtoWalletResponse](../../sdk/models/dto-wallet-response.md)                   | :heavy_minus_sign:                                                                    | N/A                                                                                   |