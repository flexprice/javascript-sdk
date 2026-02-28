# AlertCondition

## Example Usage

```typescript
import { AlertCondition } from "@flexprice/sdk/sdk/models";

let value: AlertCondition = "below";
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

```typescript
"above" | "below" | Unrecognized<string>
```