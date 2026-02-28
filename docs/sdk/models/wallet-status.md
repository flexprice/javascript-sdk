# WalletStatus

## Example Usage

```typescript
import { WalletStatus } from "@flexprice/sdk/sdk/models";

let value: WalletStatus = "frozen";
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

```typescript
"active" | "frozen" | "closed" | Unrecognized<string>
```