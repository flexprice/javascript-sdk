# UpdateWalletRequestRequest

## Example Usage

```typescript
import { UpdateWalletRequestRequest } from "@flexprice/sdk/sdk/models";

let value: UpdateWalletRequestRequest = {
  id: "<id>",
  body: {},
};
```

## Fields

| Field                                                                   | Type                                                                    | Required                                                                | Description                                                             |
| ----------------------------------------------------------------------- | ----------------------------------------------------------------------- | ----------------------------------------------------------------------- | ----------------------------------------------------------------------- |
| `id`                                                                    | *string*                                                                | :heavy_check_mark:                                                      | Wallet ID                                                               |
| `body`                                                                  | [models.UpdateWalletRequest](../../sdk/models/update-wallet-request.md) | :heavy_check_mark:                                                      | Update wallet request                                                   |