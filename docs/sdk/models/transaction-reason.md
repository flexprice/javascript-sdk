# TransactionReason

## Example Usage

```typescript
import { TransactionReason } from "@flexprice/sdk/sdk/models";

let value: TransactionReason = "SUBSCRIPTION_CREDIT_GRANT";

// Open enum: unrecognized values are captured as Unrecognized<string>
```

## Values

```typescript
"INVOICE_PAYMENT" | "FREE_CREDIT_GRANT" | "SUBSCRIPTION_CREDIT_GRANT" | "PURCHASED_CREDIT_INVOICED" | "PURCHASED_CREDIT_DIRECT" | "CREDIT_NOTE" | "CREDIT_EXPIRED" | "WALLET_TERMINATION" | "MANUAL_BALANCE_DEBIT" | "CREDIT_ADJUSTMENT" | Unrecognized<string>
```