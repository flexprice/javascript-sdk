# DtoSubscriptionChangeRequest

Request object for changing a subscription plan (upgrade/downgrade)

## Example Usage

```typescript
import { DtoSubscriptionChangeRequest } from "@flexprice/sdk/sdk/models";

let value: DtoSubscriptionChangeRequest = {
  billingCadence: "ONETIME",
  billingCycle: "calendar",
  billingPeriod: "WEEKLY",
  prorationBehavior: "none",
  targetPlanId: "<id>",
};
```

## Fields

| Field                                                                      | Type                                                                       | Required                                                                   | Description                                                                |
| -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- |
| `billingCadence`                                                           | [models.BillingCadence](../../sdk/models/billing-cadence.md)               | :heavy_check_mark:                                                         | N/A                                                                        |
| `billingCycle`                                                             | [models.BillingCycle](../../sdk/models/billing-cycle.md)                   | :heavy_check_mark:                                                         | N/A                                                                        |
| `billingPeriod`                                                            | [models.BillingPeriod](../../sdk/models/billing-period.md)                 | :heavy_check_mark:                                                         | N/A                                                                        |
| `billingPeriodCount`                                                       | *number*                                                                   | :heavy_minus_sign:                                                         | billing_period_count is the billing period count for the new subscription  |
| `changeAt`                                                                 | [models.ScheduleType](../../sdk/models/schedule-type.md)                   | :heavy_minus_sign:                                                         | N/A                                                                        |
| `metadata`                                                                 | Record<string, *string*>                                                   | :heavy_minus_sign:                                                         | metadata contains additional key-value pairs for storing extra information |
| `prorationBehavior`                                                        | [models.ProrationBehavior](../../sdk/models/proration-behavior.md)         | :heavy_check_mark:                                                         | N/A                                                                        |
| `targetPlanId`                                                             | *string*                                                                   | :heavy_check_mark:                                                         | target_plan_id is the ID of the new plan to change to (required)           |