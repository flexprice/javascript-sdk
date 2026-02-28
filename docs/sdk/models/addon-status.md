# AddonStatus

## Example Usage

```typescript
import { AddonStatus } from "@flexprice/sdk/sdk/models";

let value: AddonStatus = "cancelled";
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

```typescript
"active" | "cancelled" | "paused" | Unrecognized<string>
```