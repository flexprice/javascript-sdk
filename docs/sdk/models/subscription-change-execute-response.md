# SubscriptionChangeExecuteResponse

Response after successfully executing a subscription plan change

## Example Usage

```typescript
import { SubscriptionChangeExecuteResponse } from "@flexprice/sdk/sdk/models";

let value: SubscriptionChangeExecuteResponse = {
  invoice: {
    subscription: {
      latestInvoice: {
        subscription: {
          plan: {},
        },
      },
      plan: {},
    },
  },
};
```

## Fields

| Field                                                                                         | Type                                                                                          | Required                                                                                      | Description                                                                                   |
| --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| `changeType`                                                                                  | [models.SubscriptionChangeType](../../sdk/models/subscription-change-type.md)                 | :heavy_minus_sign:                                                                            | N/A                                                                                           |
| `creditGrants`                                                                                | [models.CreditGrantResponse](../../sdk/models/credit-grant-response.md)[]                     | :heavy_minus_sign:                                                                            | credit_grants contains any credit grants created for proration credits                        |
| `effectiveDate`                                                                               | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_minus_sign:                                                                            | effective_date is when the change took effect                                                 |
| `invoice`                                                                                     | [models.InvoiceResponse](../../sdk/models/invoice-response.md)                                | :heavy_minus_sign:                                                                            | N/A                                                                                           |
| `isScheduled`                                                                                 | *boolean*                                                                                     | :heavy_minus_sign:                                                                            | is_scheduled indicates if the change was scheduled or executed immediately                    |
| `metadata`                                                                                    | Record<string, *string*>                                                                      | :heavy_minus_sign:                                                                            | metadata from the request                                                                     |
| `newSubscription`                                                                             | [models.SubscriptionSummary](../../sdk/models/subscription-summary.md)                        | :heavy_minus_sign:                                                                            | N/A                                                                                           |
| `oldSubscription`                                                                             | [models.SubscriptionSummary](../../sdk/models/subscription-summary.md)                        | :heavy_minus_sign:                                                                            | N/A                                                                                           |
| `prorationApplied`                                                                            | [models.ProrationDetails](../../sdk/models/proration-details.md)                              | :heavy_minus_sign:                                                                            | N/A                                                                                           |
| `scheduleId`                                                                                  | *string*                                                                                      | :heavy_minus_sign:                                                                            | schedule_id is the ID of the created schedule (only if is_scheduled=true)                     |
| `scheduledAt`                                                                                 | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_minus_sign:                                                                            | scheduled_at is when the change will execute (only if is_scheduled=true)                      |