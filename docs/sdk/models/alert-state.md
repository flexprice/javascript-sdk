# AlertState

## Example Usage

```typescript
import { AlertState } from "@flexprice/sdk/sdk/models";

let value: AlertState = "ok";

// Open enum: unrecognized values are captured as Unrecognized<string>
```

## Values

```typescript
"ok" | "info" | "warning" | "in_alarm" | Unrecognized<string>
```