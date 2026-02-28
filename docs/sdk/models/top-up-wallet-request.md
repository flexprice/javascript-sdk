# TopUpWalletRequest

## Example Usage

```typescript
import { TopUpWalletRequest } from "@flexprice/sdk/sdk/models";

let value: TopUpWalletRequest = {
  id: "<id>",
  body: {
    transactionReason: "INVOICE_PAYMENT",
  },
};
```

## Fields

| Field                                                                         | Type                                                                          | Required                                                                      | Description                                                                   |
| ----------------------------------------------------------------------------- | ----------------------------------------------------------------------------- | ----------------------------------------------------------------------------- | ----------------------------------------------------------------------------- |
| `id`                                                                          | *string*                                                                      | :heavy_check_mark:                                                            | Wallet ID                                                                     |
| `body`                                                                        | [models.DtoTopUpWalletRequest](../../sdk/models/dto-top-up-wallet-request.md) | :heavy_check_mark:                                                            | Top up request                                                                |