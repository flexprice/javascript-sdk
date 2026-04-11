# ExecuteSubscriptionChangeRequest

## Example Usage

```typescript
import { ExecuteSubscriptionChangeRequest } from "@flexprice/sdk/sdk/models";

let value: ExecuteSubscriptionChangeRequest = {
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
| `body`                                                                              | [models.SubscriptionChangeRequest](../../sdk/models/subscription-change-request.md) | :heavy_check_mark:                                                                  | Subscription change request                                                         |