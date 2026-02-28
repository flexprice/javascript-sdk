# CreditNoteStatus

## Example Usage

```typescript
import { CreditNoteStatus } from "@flexprice/sdk/sdk/models";

let value: CreditNoteStatus = "DRAFT";
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

```typescript
"DRAFT" | "FINALIZED" | "VOIDED" | Unrecognized<string>
```