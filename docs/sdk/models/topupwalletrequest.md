# TopUpWalletRequest

## Example Usage

```typescript
import { TopUpWalletRequest } from "@flexprice/sdk/sdk/models";

let value: TopUpWalletRequest = {
  id: "<id>",
  dtoTopUpWalletRequest: {
    transactionReason: "INVOICE_PAYMENT",
  },
};
```

## Fields

| Field                                                                     | Type                                                                      | Required                                                                  | Description                                                               |
| ------------------------------------------------------------------------- | ------------------------------------------------------------------------- | ------------------------------------------------------------------------- | ------------------------------------------------------------------------- |
| `id`                                                                      | *string*                                                                  | :heavy_check_mark:                                                        | Wallet ID                                                                 |
| `dtoTopUpWalletRequest`                                                   | [models.DtoTopUpWalletRequest](../../sdk/models/dtotopupwalletrequest.md) | :heavy_check_mark:                                                        | Top up request                                                            |