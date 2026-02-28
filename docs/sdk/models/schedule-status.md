# ScheduleStatus

## Example Usage

```typescript
import { ScheduleStatus } from "@flexprice/sdk/sdk/models";

let value: ScheduleStatus = "executing";
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

```typescript
"pending" | "executing" | "executed" | "cancelled" | "failed" | Unrecognized<string>
```