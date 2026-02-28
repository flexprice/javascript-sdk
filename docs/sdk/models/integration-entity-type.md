# IntegrationEntityType

## Example Usage

```typescript
import { IntegrationEntityType } from "@flexprice/sdk/sdk/models";

let value: IntegrationEntityType = "item_price";
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

```typescript
"customer" | "plan" | "invoice" | "subscription" | "payment" | "credit_note" | "addon" | "item" | "item_price" | "price" | Unrecognized<string>
```