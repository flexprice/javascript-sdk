# PauseStatus

## Example Usage

```typescript
import { PauseStatus } from "@flexprice/sdk/sdk/models";

let value: PauseStatus = "cancelled";
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

```typescript
"none" | "active" | "scheduled" | "completed" | "cancelled" | Unrecognized<string>
```