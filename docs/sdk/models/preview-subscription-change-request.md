# PreviewSubscriptionChangeRequest

## Example Usage

```typescript
import { PreviewSubscriptionChangeRequest } from "@flexprice/sdk/sdk/models";

let value: PreviewSubscriptionChangeRequest = {
  id: "<id>",
  body: {
    billingCadence: "RECURRING",
    billingCycle: "anniversary",
    billingPeriod: "WEEKLY",
    prorationBehavior: "none",
    targetPlanId: "<id>",
  },
};
```

## Fields

| Field                                                                               | Type                                                                                | Required                                                                            | Description                                                                         |
| ----------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------- |
| `id`                                                                                | *string*                                                                            | :heavy_check_mark:                                                                  | Subscription ID                                                                     |
| `body`                                                                              | [models.SubscriptionChangeRequest](../../sdk/models/subscription-change-request.md) | :heavy_check_mark:                                                                  | Subscription change preview request                                                 |