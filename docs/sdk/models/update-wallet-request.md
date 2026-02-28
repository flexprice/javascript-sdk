# UpdateWalletRequest

## Example Usage

```typescript
import { UpdateWalletRequest } from "@flexprice/sdk/sdk/models";

let value: UpdateWalletRequest = {
  id: "<id>",
  body: {},
};
```

## Fields

| Field                                                                          | Type                                                                           | Required                                                                       | Description                                                                    |
| ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ |
| `id`                                                                           | *string*                                                                       | :heavy_check_mark:                                                             | Wallet ID                                                                      |
| `body`                                                                         | [models.DtoUpdateWalletRequest](../../sdk/models/dto-update-wallet-request.md) | :heavy_check_mark:                                                             | Update wallet request                                                          |