# BillingPeriod

## Example Usage

```typescript
import { BillingPeriod } from "@flexprice/sdk/sdk/models";

let value: BillingPeriod = "MONTHLY";
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

```typescript
"MONTHLY" | "ANNUAL" | "WEEKLY" | "DAILY" | "QUARTERLY" | "HALF_YEARLY" | Unrecognized<string>
```