# WalletConfig

## Example Usage

```typescript
import { WalletConfig } from "@flexprice/sdk/sdk/models";

let value: WalletConfig = {};
```

## Fields

| Field                                                                                                            | Type                                                                                                             | Required                                                                                                         | Description                                                                                                      |
| ---------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- |
| `allowedPriceTypes`                                                                                              | [models.WalletConfigPriceType](../../sdk/models/wallet-config-price-type.md)[]                                   | :heavy_minus_sign:                                                                                               | AllowedPriceTypes is a list of price types that are allowed for the wallet<br/>nil means all price types are allowed |