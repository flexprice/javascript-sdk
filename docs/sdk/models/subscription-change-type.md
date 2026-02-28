# SubscriptionChangeType

## Example Usage

```typescript
import { SubscriptionChangeType } from "@flexprice/sdk/sdk/models";

let value: SubscriptionChangeType = "downgrade";
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

```typescript
"upgrade" | "downgrade" | "lateral" | Unrecognized<string>
```