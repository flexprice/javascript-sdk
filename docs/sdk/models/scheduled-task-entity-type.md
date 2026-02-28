# ScheduledTaskEntityType

## Example Usage

```typescript
import { ScheduledTaskEntityType } from "@flexprice/sdk/sdk/models";

let value: ScheduledTaskEntityType = "invoice";
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

```typescript
"events" | "invoice" | "credit_topups" | "credit_usage" | Unrecognized<string>
```