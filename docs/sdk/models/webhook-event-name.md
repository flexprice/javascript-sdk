# WebhookEventName

## Example Usage

```typescript
import { WebhookEventName } from "@flexprice/sdk/sdk/models";

let value: WebhookEventName = "subscription.created";

// Open enum: unrecognized values are captured as Unrecognized<string>
```

## Values

```typescript
"subscription.created" | "subscription.draft.created" | "subscription.activated" | "subscription.updated" | "subscription.paused" | "subscription.cancelled" | "subscription.resumed" | "subscription.phase.created" | "subscription.phase.updated" | "subscription.phase.deleted" | "feature.created" | "feature.updated" | "feature.deleted" | "feature.wallet_balance.alert" | "entitlement.created" | "entitlement.updated" | "entitlement.deleted" | "wallet.created" | "wallet.updated" | "wallet.terminated" | "wallet.transaction.created" | "payment.created" | "payment.updated" | "payment.failed" | "payment.success" | "payment.pending" | "customer.created" | "customer.updated" | "customer.deleted" | "invoice.update.finalized" | "invoice.update.payment" | "invoice.update.voided" | "invoice.update" | "invoice.payment.overdue" | "wallet.credit_balance.dropped" | "wallet.credit_balance.recovered" | "wallet.ongoing_balance.dropped" | "wallet.ongoing_balance.recovered" | "subscription.renewal.due" | "invoice.communication.triggered" | "credit_note.created" | "credit_note.updated" | Unrecognized<string>
```