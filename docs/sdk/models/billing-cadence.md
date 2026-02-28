# BillingCadence

## Example Usage

```typescript
import { BillingCadence } from "@flexprice/sdk/sdk/models";

let value: BillingCadence = "RECURRING";
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

```typescript
"RECURRING" | "ONETIME" | Unrecognized<string>
```