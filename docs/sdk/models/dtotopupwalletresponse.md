# DtoTopUpWalletResponse

## Example Usage

```typescript
import { DtoTopUpWalletResponse } from "@flexprice/sdk/sdk/models";

let value: DtoTopUpWalletResponse = {};
```

## Fields

| Field                                                                                   | Type                                                                                    | Required                                                                                | Description                                                                             |
| --------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------- |
| `invoiceId`                                                                             | *string*                                                                                | :heavy_minus_sign:                                                                      | Invoice ID if an invoice was created (only for PURCHASED_CREDIT_INVOICED)               |
| `wallet`                                                                                | [models.DtoWalletResponse](../../sdk/models/dtowalletresponse.md)                       | :heavy_minus_sign:                                                                      | N/A                                                                                     |
| `walletTransaction`                                                                     | [models.DtoWalletTransactionResponse](../../sdk/models/dtowallettransactionresponse.md) | :heavy_minus_sign:                                                                      | N/A                                                                                     |