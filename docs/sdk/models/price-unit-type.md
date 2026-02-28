# PriceUnitType

## Example Usage

```typescript
import { PriceUnitType } from "@flexprice/sdk/sdk/models";

let value: PriceUnitType = "FIAT";
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

```typescript
"FIAT" | "CUSTOM" | Unrecognized<string>
```