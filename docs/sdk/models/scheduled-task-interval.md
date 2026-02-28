# ScheduledTaskInterval

## Example Usage

```typescript
import { ScheduledTaskInterval } from "@flexprice/sdk/sdk/models";

let value: ScheduledTaskInterval = "15MIN";
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

```typescript
"15MIN" | "custom" | "hourly" | "daily" | Unrecognized<string>
```