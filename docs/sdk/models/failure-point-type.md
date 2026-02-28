# FailurePointType

## Example Usage

```typescript
import { FailurePointType } from "@flexprice/sdk/sdk/models";

let value: FailurePointType = "customer_lookup";
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

```typescript
"customer_lookup" | "meter_lookup" | "price_lookup" | "subscription_line_item_lookup" | Unrecognized<string>
```