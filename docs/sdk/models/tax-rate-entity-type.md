# TaxRateEntityType

## Example Usage

```typescript
import { TaxRateEntityType } from "@flexprice/sdk/sdk/models";

let value: TaxRateEntityType = "subscription";
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

```typescript
"customer" | "subscription" | "invoice" | "tenant" | Unrecognized<string>
```