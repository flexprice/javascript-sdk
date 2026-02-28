# CreditGrantPeriod

## Example Usage

```typescript
import { CreditGrantPeriod } from "@flexprice/sdk/sdk/models";

let value: CreditGrantPeriod = "ANNUAL";
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

```typescript
"DAILY" | "WEEKLY" | "MONTHLY" | "ANNUAL" | "QUARTERLY" | "HALF_YEARLY" | Unrecognized<string>
```