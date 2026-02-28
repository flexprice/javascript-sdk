# InvoiceType

## Example Usage

```typescript
import { InvoiceType } from "@flexprice/sdk/sdk/models";

let value: InvoiceType = "CREDIT";
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

```typescript
"SUBSCRIPTION" | "ONE_OFF" | "CREDIT" | Unrecognized<string>
```