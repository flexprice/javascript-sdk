# PauseMode

## Example Usage

```typescript
import { PauseMode } from "@flexprice/sdk/sdk/models";

let value: PauseMode = "immediate";
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

```typescript
"immediate" | "scheduled" | "period_end" | Unrecognized<string>
```