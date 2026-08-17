# ExecuteSubscriptionPlanChangeV2Request

## Example Usage

```typescript
import { ExecuteSubscriptionPlanChangeV2Request } from "@flexprice/sdk/sdk/models";

let value: ExecuteSubscriptionPlanChangeV2Request = {
  id: "<id>",
  body: {
    prorationBehavior: "none",
    targetPlanId: "<id>",
  },
};
```

## Fields

| Field                                                                                    | Type                                                                                     | Required                                                                                 | Description                                                                              |
| ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- |
| `id`                                                                                     | *string*                                                                                 | :heavy_check_mark:                                                                       | Subscription ID                                                                          |
| `body`                                                                                   | [models.SubscriptionChangeV2Request](../../sdk/models/subscription-change-v2-request.md) | :heavy_check_mark:                                                                       | Plan change request                                                                      |