# EntityType

## Example Usage

```typescript
import { EntityType } from "@flexprice/sdk/sdk/models";

let value: EntityType = "EVENTS";
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

```typescript
"EVENTS" | "PRICES" | "CUSTOMERS" | "FEATURES" | Unrecognized<string>
```