# DtoTopUpWalletResponse

## Example Usage

```typescript
import { DtoTopUpWalletResponse } from "@flexprice/sdk/sdk/models";

let value: DtoTopUpWalletResponse = {};
```

## Fields

| Field                                                                                      | Type                                                                                       | Required                                                                                   | Description                                                                                |
| ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ |
| `invoiceId`                                                                                | *string*                                                                                   | :heavy_minus_sign:                                                                         | Invoice ID if an invoice was created (only for PURCHASED_CREDIT_INVOICED)                  |
| `wallet`                                                                                   | [models.DtoWalletResponse](../../sdk/models/dto-wallet-response.md)                        | :heavy_minus_sign:                                                                         | N/A                                                                                        |
| `walletTransaction`                                                                        | [models.DtoWalletTransactionResponse](../../sdk/models/dto-wallet-transaction-response.md) | :heavy_minus_sign:                                                                         | N/A                                                                                        |