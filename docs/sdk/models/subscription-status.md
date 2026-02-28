# SubscriptionStatus

## Example Usage

```typescript
import { SubscriptionStatus } from "@flexprice/sdk/sdk/models";

let value: SubscriptionStatus = "trialing";
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

```typescript
"active" | "paused" | "cancelled" | "incomplete" | "trialing" | "draft" | Unrecognized<string>
```