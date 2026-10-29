# JournalEventType

## Example Usage

```typescript
import { JournalEventType } from "@flexprice/sdk/sdk/models";

let value: JournalEventType = "invoice_voided";

// Open enum: unrecognized values are captured as Unrecognized<string>
```

## Values

```typescript
"invoice_finalized" | "invoice_voided" | "credit_note_finalized" | "credit_note_voided" | "payment_succeeded" | "payment_reversed" | "refund_succeeded" | "revenue_earned" | "revenue_offset" | Unrecognized<string>
```