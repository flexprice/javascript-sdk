# InvoiceStatus

## Example Usage

```typescript
import { InvoiceStatus } from "@flexprice/sdk/sdk/models";

let value: InvoiceStatus = "FINALIZED";
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

```typescript
"DRAFT" | "FINALIZED" | "VOIDED" | Unrecognized<string>
```