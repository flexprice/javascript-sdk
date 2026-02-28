# PaymentTerms

## Example Usage

```typescript
import { PaymentTerms } from "@flexprice/sdk/sdk/models";

let value: PaymentTerms = "30 NET";
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

```typescript
"15 NET" | "30 NET" | "45 NET" | "60 NET" | "75 NET" | "90 NET" | Unrecognized<string>
```