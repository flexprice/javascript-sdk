# SubscriptionChangeV2Request

## Example Usage

```typescript
import { SubscriptionChangeV2Request } from "@flexprice/sdk/sdk/models";

let value: SubscriptionChangeV2Request = {
  prorationBehavior: "none",
  targetPlanId: "<id>",
};
```

## Fields

| Field                                                                                              | Type                                                                                               | Required                                                                                           | Description                                                                                        |
| -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- |
| `changeAt`                                                                                         | [models.ScheduleType](../../sdk/models/schedule-type.md)                                           | :heavy_minus_sign:                                                                                 | N/A                                                                                                |
| `entityPolicies`                                                                                   | [models.SubscriptionChangeEntityPolicies](../../sdk/models/subscription-change-entity-policies.md) | :heavy_minus_sign:                                                                                 | N/A                                                                                                |
| `idempotencyKey`                                                                                   | *string*                                                                                           | :heavy_minus_sign:                                                                                 | N/A                                                                                                |
| `metadata`                                                                                         | Record<string, *string*>                                                                           | :heavy_minus_sign:                                                                                 | N/A                                                                                                |
| `prorationBehavior`                                                                                | [models.ProrationBehavior](../../sdk/models/proration-behavior.md)                                 | :heavy_check_mark:                                                                                 | N/A                                                                                                |
| `targetPlanId`                                                                                     | *string*                                                                                           | :heavy_check_mark:                                                                                 | N/A                                                                                                |