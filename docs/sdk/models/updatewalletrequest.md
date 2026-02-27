# UpdateWalletRequest

## Example Usage

```typescript
import { UpdateWalletRequest } from "@flexprice/sdk/sdk/models";

let value: UpdateWalletRequest = {
  id: "<id>",
  dtoUpdateWalletRequest: {},
};
```

## Fields

| Field                                                                       | Type                                                                        | Required                                                                    | Description                                                                 |
| --------------------------------------------------------------------------- | --------------------------------------------------------------------------- | --------------------------------------------------------------------------- | --------------------------------------------------------------------------- |
| `id`                                                                        | *string*                                                                    | :heavy_check_mark:                                                          | Wallet ID                                                                   |
| `dtoUpdateWalletRequest`                                                    | [models.DtoUpdateWalletRequest](../../sdk/models/dtoupdatewalletrequest.md) | :heavy_check_mark:                                                          | Update wallet request                                                       |