# PaymentMethodType

## Example Usage

```typescript
import { PaymentMethodType } from "@flexprice/sdk/sdk/models";

let value: PaymentMethodType = "OFFLINE";
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

```typescript
"CARD" | "ACH" | "OFFLINE" | "CREDITS" | "PAYMENT_LINK" | Unrecognized<string>
```