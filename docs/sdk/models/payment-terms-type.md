# PaymentTermsType

DAYS (due payment_terms_days after the issue date), DUE_ON_RECEIPT, END_OF_MONTH or END_OF_NEXT_MONTH.

## Example Usage

```typescript
import { PaymentTermsType } from "@flexprice/sdk/sdk/models";

let value: PaymentTermsType = "DAYS";

// Open enum: unrecognized values are captured as Unrecognized<string>
```

## Values

```typescript
"DAYS" | "DUE_ON_RECEIPT" | "END_OF_MONTH" | "END_OF_NEXT_MONTH" | Unrecognized<string>
```