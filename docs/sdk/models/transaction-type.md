# TransactionType

## Example Usage

```typescript
import { TransactionType } from "@flexprice/sdk/sdk/models";

let value: TransactionType = "credit";
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

```typescript
"credit" | "debit" | Unrecognized<string>
```