# LedgerAccountKey

## Example Usage

```typescript
import { LedgerAccountKey } from "@flexprice/sdk/sdk/models";

let value: LedgerAccountKey = "customer_credit";

// Open enum: unrecognized values are captured as Unrecognized<string>
```

## Values

```typescript
"cash" | "accounts_receivable" | "unbilled_receivable" | "deferred_revenue" | "customer_credit" | "tax_payable" | "revenue" | "contra_revenue" | Unrecognized<string>
```