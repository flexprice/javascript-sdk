# TopUpWalletRequestRequest

## Example Usage

```typescript
import { TopUpWalletRequestRequest } from "@flexprice/sdk/sdk/models";

let value: TopUpWalletRequestRequest = {
  id: "<id>",
  body: {
    transactionReason: "INVOICE_PAYMENT",
  },
};
```

## Fields

| Field                                                                  | Type                                                                   | Required                                                               | Description                                                            |
| ---------------------------------------------------------------------- | ---------------------------------------------------------------------- | ---------------------------------------------------------------------- | ---------------------------------------------------------------------- |
| `id`                                                                   | *string*                                                               | :heavy_check_mark:                                                     | Wallet ID                                                              |
| `body`                                                                 | [models.TopUpWalletRequest](../../sdk/models/top-up-wallet-request.md) | :heavy_check_mark:                                                     | Top up request                                                         |