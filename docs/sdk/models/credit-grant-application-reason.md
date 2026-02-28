# CreditGrantApplicationReason

## Example Usage

```typescript
import { CreditGrantApplicationReason } from "@flexprice/sdk/sdk/models";

let value: CreditGrantApplicationReason = "onetime_credit_grant";
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

```typescript
"first_time_recurring_credit_grant" | "recurring_credit_grant" | "onetime_credit_grant" | Unrecognized<string>
```