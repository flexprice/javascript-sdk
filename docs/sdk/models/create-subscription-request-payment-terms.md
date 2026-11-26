# ~~CreateSubscriptionRequestPaymentTerms~~

Deprecated: use payment_terms_type and payment_terms_days. "<days> NET" (days 1–365), DUE_ON_RECEIPT, END_OF_MONTH or END_OF_NEXT_MONTH.

> :warning: **DEPRECATED**: This will be removed in a future release, please migrate away from it as soon as possible.

## Example Usage

```typescript
import { CreateSubscriptionRequestPaymentTerms } from "@flexprice/sdk/sdk/models";

let value: CreateSubscriptionRequestPaymentTerms = "60 NET";
```

## Values

```typescript
"15 NET" | "30 NET" | "45 NET" | "60 NET" | "75 NET" | "90 NET" | "DUE_ON_RECEIPT" | "END_OF_MONTH" | "END_OF_NEXT_MONTH"
```