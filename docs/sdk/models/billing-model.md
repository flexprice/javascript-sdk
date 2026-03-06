# BillingModel

## Example Usage

```typescript
import { BillingModel } from "@flexprice/sdk/sdk/models";

let value: BillingModel = "FLAT_FEE";

// Open enum: unrecognized values are captured as Unrecognized<string>
```

## Values

```typescript
"FLAT_FEE" | "PACKAGE" | "TIERED" | Unrecognized<string>
```