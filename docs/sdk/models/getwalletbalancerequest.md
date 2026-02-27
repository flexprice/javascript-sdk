# GetWalletBalanceRequest

## Example Usage

```typescript
import { GetWalletBalanceRequest } from "@flexprice/sdk/sdk/models";

let value: GetWalletBalanceRequest = {
  id: "<id>",
};
```

## Fields

| Field                                             | Type                                              | Required                                          | Description                                       |
| ------------------------------------------------- | ------------------------------------------------- | ------------------------------------------------- | ------------------------------------------------- |
| `id`                                              | *string*                                          | :heavy_check_mark:                                | Wallet ID                                         |
| `expand`                                          | *string*                                          | :heavy_minus_sign:                                | Expand fields (e.g., credits_available_breakdown) |