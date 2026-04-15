# ChangedInvoiceAction

created (proration invoice) | wallet_credit (downgrade credit)

## Example Usage

```typescript
import { ChangedInvoiceAction } from "@flexprice/sdk/sdk/models";

let value: ChangedInvoiceAction = "created";

// Open enum: unrecognized values are captured as Unrecognized<string>
```

## Values

```typescript
"created" | "wallet_credit" | Unrecognized<string>
```