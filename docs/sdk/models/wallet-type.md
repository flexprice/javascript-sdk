# WalletType

## Example Usage

```typescript
import { WalletType } from "@flexprice/sdk/sdk/models";

let value: WalletType = "PRE_PAID";
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

```typescript
"PRE_PAID" | "POST_PAID" | Unrecognized<string>
```