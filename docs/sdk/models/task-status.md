# TaskStatus

## Example Usage

```typescript
import { TaskStatus } from "@flexprice/sdk/sdk/models";

let value: TaskStatus = "PROCESSING";
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

```typescript
"PENDING" | "PROCESSING" | "COMPLETED" | "FAILED" | Unrecognized<string>
```