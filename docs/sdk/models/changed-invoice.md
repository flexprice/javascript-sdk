# ChangedInvoice

## Example Usage

```typescript
import { ChangedInvoice } from "@flexprice/sdk/sdk/models";

let value: ChangedInvoice = {
  invoice: {
    subscription: {
      latestInvoice: {
        subscription: {
          plan: {},
        },
      },
      plan: {},
    },
  },
};
```

## Fields

| Field                                                                                                               | Type                                                                                                                | Required                                                                                                            | Description                                                                                                         |
| ------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------- |
| `action`                                                                                                            | [models.ChangedInvoiceAction](../../sdk/models/changed-invoice-action.md)                                           | :heavy_minus_sign:                                                                                                  | created (proration invoice) \| wallet_credit (downgrade credit)                                                     |
| `id`                                                                                                                | *string*                                                                                                            | :heavy_minus_sign:                                                                                                  | N/A                                                                                                                 |
| `invoice`                                                                                                           | [models.InvoiceResponse](../../sdk/models/invoice-response.md)                                                      | :heavy_minus_sign:                                                                                                  | N/A                                                                                                                 |
| `status`                                                                                                            | [models.ChangedInvoiceStatus](../../sdk/models/changed-invoice-status.md)                                           | :heavy_minus_sign:                                                                                                  | preview \| issued \| INITIATED \| PENDING \| PROCESSING \| SUCCEEDED \| OVERPAID \| FAILED \| REFUNDED \| PARTIALLY_REFUNDED |
| `walletTransaction`                                                                                                 | [models.WalletTransactionResponse](../../sdk/models/wallet-transaction-response.md)                                 | :heavy_minus_sign:                                                                                                  | N/A                                                                                                                 |