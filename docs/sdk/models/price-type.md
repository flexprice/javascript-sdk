# PriceType

## Example Usage

```typescript
import { PriceType } from "@flexprice/sdk/sdk/models";

let value: PriceType = "USAGE";
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

```typescript
"USAGE" | "FIXED" | Unrecognized<string>
```