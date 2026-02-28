# PriceEntityType

## Example Usage

```typescript
import { PriceEntityType } from "@flexprice/sdk/sdk/models";

let value: PriceEntityType = "ADDON";
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

```typescript
"PLAN" | "SUBSCRIPTION" | "ADDON" | "PRICE" | "COSTSHEET" | Unrecognized<string>
```