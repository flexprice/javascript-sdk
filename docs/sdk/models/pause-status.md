# PauseStatus

## Example Usage

```typescript
import { PauseStatus } from "@flexprice/sdk/sdk/models";

let value: PauseStatus = "cancelled";

// Open enum: unrecognized values are captured as Unrecognized<string>
```

## Values

```typescript
"none" | "active" | "scheduled" | "completed" | "cancelled" | Unrecognized<string>
```