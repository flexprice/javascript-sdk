# TaxRateScope

## Example Usage

```typescript
import { TaxRateScope } from "@flexprice/sdk/sdk/models";

let value: TaxRateScope = "INTERNAL";
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

```typescript
"INTERNAL" | "EXTERNAL" | "ONETIME" | Unrecognized<string>
```