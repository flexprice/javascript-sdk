# TaskType

## Example Usage

```typescript
import { TaskType } from "@flexprice/sdk/sdk/models";

let value: TaskType = "EXPORT";
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

```typescript
"IMPORT" | "EXPORT" | Unrecognized<string>
```