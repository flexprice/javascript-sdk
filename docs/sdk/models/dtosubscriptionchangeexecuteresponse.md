# DtoSubscriptionChangeExecuteResponse

Response after successfully executing a subscription plan change

## Example Usage

```typescript
import { DtoSubscriptionChangeExecuteResponse } from "@flexprice/sdk/sdk/models";

let value: DtoSubscriptionChangeExecuteResponse = {
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

| Field                                                                         | Type                                                                          | Required                                                                      | Description                                                                   |
| ----------------------------------------------------------------------------- | ----------------------------------------------------------------------------- | ----------------------------------------------------------------------------- | ----------------------------------------------------------------------------- |
| `changeType`                                                                  | [models.SubscriptionChangeType](../../sdk/models/subscriptionchangetype.md)   | :heavy_minus_sign:                                                            | N/A                                                                           |
| `creditGrants`                                                                | [models.DtoCreditGrantResponse](../../sdk/models/dtocreditgrantresponse.md)[] | :heavy_minus_sign:                                                            | credit_grants contains any credit grants created for proration credits        |
| `effectiveDate`                                                               | *string*                                                                      | :heavy_minus_sign:                                                            | effective_date is when the change took effect                                 |
| `invoice`                                                                     | [models.DtoInvoiceResponse](../../sdk/models/dtoinvoiceresponse.md)           | :heavy_minus_sign:                                                            | N/A                                                                           |
| `isScheduled`                                                                 | *boolean*                                                                     | :heavy_minus_sign:                                                            | is_scheduled indicates if the change was scheduled or executed immediately    |
| `metadata`                                                                    | Record<string, *string*>                                                      | :heavy_minus_sign:                                                            | metadata from the request                                                     |
| `newSubscription`                                                             | [models.DtoSubscriptionSummary](../../sdk/models/dtosubscriptionsummary.md)   | :heavy_minus_sign:                                                            | N/A                                                                           |
| `oldSubscription`                                                             | [models.DtoSubscriptionSummary](../../sdk/models/dtosubscriptionsummary.md)   | :heavy_minus_sign:                                                            | N/A                                                                           |
| `prorationApplied`                                                            | [models.DtoProrationDetails](../../sdk/models/dtoprorationdetails.md)         | :heavy_minus_sign:                                                            | N/A                                                                           |
| `scheduleId`                                                                  | *string*                                                                      | :heavy_minus_sign:                                                            | schedule_id is the ID of the created schedule (only if is_scheduled=true)     |
| `scheduledAt`                                                                 | *string*                                                                      | :heavy_minus_sign:                                                            | scheduled_at is when the change will execute (only if is_scheduled=true)      |