# TransactionStatus

## Example Usage

```typescript
import { TransactionStatus } from "@flexprice/sdk/sdk/models";

let value: TransactionStatus = "failed";

// Open enum: unrecognized values are captured as Unrecognized<string>
```

## Values

```typescript
"pending" | "completed" | "failed" | Unrecognized<string>
```