# IntegrationEntityType

## Example Usage

```typescript
import { IntegrationEntityType } from "@flexprice/sdk/sdk/models";

let value: IntegrationEntityType = "invoice_line_item";

// Open enum: unrecognized values are captured as Unrecognized<string>
```

## Values

```typescript
"customer" | "plan" | "invoice" | "subscription" | "payment" | "credit_note" | "addon" | "item" | "item_price" | "price" | "invoice_line_item" | "subscription_line_item" | Unrecognized<string>
```