# CreditNoteReason

## Example Usage

```typescript
import { CreditNoteReason } from "@flexprice/sdk/sdk/models";

let value: CreditNoteReason = "DUPLICATE";
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

```typescript
"DUPLICATE" | "FRAUDULENT" | "ORDER_CHANGE" | "UNSATISFACTORY" | "SERVICE_ISSUE" | "BILLING_ERROR" | "SUBSCRIPTION_CANCELLATION" | Unrecognized<string>
```