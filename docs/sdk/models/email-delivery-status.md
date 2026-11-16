# EmailDeliveryStatus

## Example Usage

```typescript
import { EmailDeliveryStatus } from "@flexprice/sdk/sdk/models";

let value: EmailDeliveryStatus = "bounced";

// Open enum: unrecognized values are captured as Unrecognized<string>
```

## Values

```typescript
"queued" | "sent" | "delivery_delayed" | "delivered" | "bounced" | "complained" | "failed" | "suppressed" | "skipped" | Unrecognized<string>
```