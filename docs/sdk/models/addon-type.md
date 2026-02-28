# AddonType

## Example Usage

```typescript
import { AddonType } from "@flexprice/sdk/sdk/models";

let value: AddonType = "onetime";
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

```typescript
"onetime" | "multiple_instance" | Unrecognized<string>
```