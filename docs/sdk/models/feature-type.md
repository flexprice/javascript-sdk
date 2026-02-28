# FeatureType

## Example Usage

```typescript
import { FeatureType } from "@flexprice/sdk/sdk/models";

let value: FeatureType = "metered";
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

```typescript
"metered" | "boolean" | "static" | Unrecognized<string>
```