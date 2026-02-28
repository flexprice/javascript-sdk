# DtoSubscriptionSummary

## Example Usage

```typescript
import { DtoSubscriptionSummary } from "@flexprice/sdk/sdk/models";

let value: DtoSubscriptionSummary = {};
```

## Fields

| Field                                                                | Type                                                                 | Required                                                             | Description                                                          |
| -------------------------------------------------------------------- | -------------------------------------------------------------------- | -------------------------------------------------------------------- | -------------------------------------------------------------------- |
| `archivedAt`                                                         | *string*                                                             | :heavy_minus_sign:                                                   | archived_at timestamp (for old subscriptions)                        |
| `billingAnchor`                                                      | *string*                                                             | :heavy_minus_sign:                                                   | billing_anchor of the subscription                                   |
| `createdAt`                                                          | *string*                                                             | :heavy_minus_sign:                                                   | created_at timestamp                                                 |
| `currentPeriodEnd`                                                   | *string*                                                             | :heavy_minus_sign:                                                   | current_period_end of the subscription                               |
| `currentPeriodStart`                                                 | *string*                                                             | :heavy_minus_sign:                                                   | current_period_start of the subscription                             |
| `id`                                                                 | *string*                                                             | :heavy_minus_sign:                                                   | id of the subscription                                               |
| `planId`                                                             | *string*                                                             | :heavy_minus_sign:                                                   | plan_id of the subscription                                          |
| `status`                                                             | [models.SubscriptionStatus](../../sdk/models/subscription-status.md) | :heavy_minus_sign:                                                   | N/A                                                                  |