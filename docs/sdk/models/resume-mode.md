# ResumeMode

## Example Usage

```typescript
import { ResumeMode } from "@flexprice/sdk/sdk/models";

let value: ResumeMode = "immediate";
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

```typescript
"immediate" | "scheduled" | "auto" | Unrecognized<string>
```