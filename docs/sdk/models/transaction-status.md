# TransactionStatus

## Example Usage

```typescript
import { TransactionStatus } from "@flexprice/sdk/sdk/models";

let value: TransactionStatus = "failed";
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

```typescript
"pending" | "completed" | "failed" | Unrecognized<string>
```