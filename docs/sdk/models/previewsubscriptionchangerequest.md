# PreviewSubscriptionChangeRequest

## Example Usage

```typescript
import { PreviewSubscriptionChangeRequest } from "@flexprice/sdk/sdk/models";

let value: PreviewSubscriptionChangeRequest = {
  id: "<id>",
  dtoSubscriptionChangeRequest: {
    billingCadence: "RECURRING",
    billingCycle: "anniversary",
    billingPeriod: "QUARTERLY",
    prorationBehavior: "create_prorations",
    targetPlanId: "<id>",
  },
};
```

## Fields

| Field                                                                                   | Type                                                                                    | Required                                                                                | Description                                                                             |
| --------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------- |
| `id`                                                                                    | *string*                                                                                | :heavy_check_mark:                                                                      | Subscription ID                                                                         |
| `dtoSubscriptionChangeRequest`                                                          | [models.DtoSubscriptionChangeRequest](../../sdk/models/dtosubscriptionchangerequest.md) | :heavy_check_mark:                                                                      | Subscription change preview request                                                     |