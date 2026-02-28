# WalletTxReferenceType

## Example Usage

```typescript
import { WalletTxReferenceType } from "@flexprice/sdk/sdk/models";

let value: WalletTxReferenceType = "PAYMENT";
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

```typescript
"PAYMENT" | "EXTERNAL" | "REQUEST" | "INVOICE" | Unrecognized<string>
```