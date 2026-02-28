# AlertState

## Example Usage

```typescript
import { AlertState } from "@flexprice/sdk/sdk/models";

let value: AlertState = "ok";
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

```typescript
"ok" | "info" | "warning" | "in_alarm" | Unrecognized<string>
```