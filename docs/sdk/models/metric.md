# Metric

## Example Usage

```typescript
import { Metric } from "@flexprice/sdk/sdk/models";

let value: Metric = "invoice_total_issued";

// Open enum: unrecognized values are captured as Unrecognized<string>
```

## Values

```typescript
"usage_quantity" | "event_count" | "events_volume" | "invoice_total" | "total_receivables" | "receivables_aging" | "days_to_pay" | "arpu" | "arpu_paid" | "credit_consumption" | "credit_topups" | "net_billing" | "invoice_total_issued" | "net_billing_issued" | "active_customers" | Unrecognized<string>
```