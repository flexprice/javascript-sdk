# WebhookEventName

## Example Usage

```typescript
import { WebhookEventName } from "@flexprice/sdk/sdk/models";

let value: WebhookEventName = "subscription.draft.created";

// Open enum: unrecognized values are captured as Unrecognized<string>
```

## Values

```typescript
"subscription.created" | "subscription.draft.created" | "subscription.activated" | "subscription.updated" | "subscription.paused" | "subscription.cancelled" | "subscription.resumed" | "subscription.plan_changed" | "subscription.phase.created" | "subscription.phase.updated" | "subscription.phase.deleted" | "feature.created" | "feature.updated" | "feature.deleted" | "feature.wallet_balance.alert" | "entitlement.created" | "entitlement.updated" | "entitlement.deleted" | "wallet.created" | "wallet.updated" | "wallet.terminated" | "wallet.transaction.created" | "wallet.transaction.updated" | "payment.created" | "payment.updated" | "payment.failed" | "payment.success" | "payment.pending" | "customer.created" | "customer.updated" | "customer.deleted" | "invoice.update.finalized" | "invoice.update.payment" | "invoice.update.voided" | "invoice.update" | "invoice.payment.overdue" | "wallet.credit_balance.dropped" | "wallet.credit_balance.recovered" | "wallet.ongoing_balance.dropped" | "wallet.ongoing_balance.recovered" | "wallet.ongoing_balance.updated" | "subscription.spend.threshold_reached" | "subscription.spend.threshold_recovered" | "subscription.line_item_spend.threshold_reached" | "subscription.line_item_spend.threshold_recovered" | "subscription.group_spend.threshold_reached" | "subscription.group_spend.threshold_recovered" | "entitlement.grant.exhausted" | "subscription.renewal.due" | "invoice.communication.triggered" | "credit_note.created" | "credit_note.updated" | "checkout.session.initiated" | "checkout.session.completed" | "checkout.session.failed" | "checkout.session.expired" | "event.rejected" | Unrecognized<string>
```