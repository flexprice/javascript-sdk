# BillingTier

## Example Usage

```typescript
import { BillingTier } from "@flexprice/sdk/sdk/models";

let value: BillingTier = "VOLUME";
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

```typescript
"VOLUME" | "SLAB" | Unrecognized<string>
```