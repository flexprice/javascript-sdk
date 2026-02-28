# PaymentStatus

## Example Usage

```typescript
import { PaymentStatus } from "@flexprice/sdk/sdk/models";

let value: PaymentStatus = "OVERPAID";
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

```typescript
"INITIATED" | "PENDING" | "PROCESSING" | "SUCCEEDED" | "OVERPAID" | "FAILED" | "REFUNDED" | "PARTIALLY_REFUNDED" | Unrecognized<string>
```