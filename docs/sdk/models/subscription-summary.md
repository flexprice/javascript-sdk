# SubscriptionSummary

## Example Usage

```typescript
import { SubscriptionSummary } from "@flexprice/sdk/sdk/models";

let value: SubscriptionSummary = {};
```

## Fields

| Field                                                                                         | Type                                                                                          | Required                                                                                      | Description                                                                                   |
| --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| `archivedAt`                                                                                  | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_minus_sign:                                                                            | archived_at timestamp (for old subscriptions)                                                 |
| `billingAnchor`                                                                               | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_minus_sign:                                                                            | billing_anchor of the subscription                                                            |
| `createdAt`                                                                                   | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_minus_sign:                                                                            | created_at timestamp                                                                          |
| `currentPeriodEnd`                                                                            | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_minus_sign:                                                                            | current_period_end of the subscription                                                        |
| `currentPeriodStart`                                                                          | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_minus_sign:                                                                            | current_period_start of the subscription                                                      |
| `id`                                                                                          | *string*                                                                                      | :heavy_minus_sign:                                                                            | id of the subscription                                                                        |
| `planId`                                                                                      | *string*                                                                                      | :heavy_minus_sign:                                                                            | plan_id of the subscription                                                                   |
| `status`                                                                                      | [models.SubscriptionStatus](../../sdk/models/subscription-status.md)                          | :heavy_minus_sign:                                                                            | N/A                                                                                           |