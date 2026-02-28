# DebugTrackerStatus

## Example Usage

```typescript
import { DebugTrackerStatus } from "@flexprice/sdk/sdk/models";

let value: DebugTrackerStatus = "error";
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

```typescript
"unprocessed" | "not_found" | "found" | "error" | Unrecognized<string>
```