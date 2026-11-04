# BillingTermValueType

fixed or remainder; percentage is reserved and rejected as not supported yet

## Example Usage

```typescript
import { BillingTermValueType } from "@flexprice/sdk/sdk/models";

let value: BillingTermValueType = "fixed";

// Open enum: unrecognized values are captured as Unrecognized<string>
```

## Values

```typescript
"fixed" | "percentage" | "remainder" | Unrecognized<string>
```