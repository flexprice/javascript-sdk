# BillingModel

## Example Usage

```typescript
import { BillingModel } from "@flexprice/sdk/sdk/models";

let value: BillingModel = "FLAT_FEE";
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

```typescript
"FLAT_FEE" | "PACKAGE" | "TIERED" | Unrecognized<string>
```