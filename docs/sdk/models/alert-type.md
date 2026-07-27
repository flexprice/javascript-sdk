# AlertType

## Example Usage

```typescript
import { AlertType } from "@flexprice/sdk/sdk/models";

let value: AlertType = "feature_wallet_balance";

// Open enum: unrecognized values are captured as Unrecognized<string>
```

## Values

```typescript
"low_ongoing_balance" | "low_credit_balance" | "feature_wallet_balance" | "subscription_spend" | "subscription_line_item_spend" | "subscription_group_spend" | "entitlement_grant_threshold" | "entitlement_grant_exhausted" | Unrecognized<string>
```