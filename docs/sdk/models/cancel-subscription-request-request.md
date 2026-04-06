# CancelSubscriptionRequestRequest

## Example Usage

```typescript
import { CancelSubscriptionRequestRequest } from "@flexprice/sdk/sdk/models";

let value: CancelSubscriptionRequestRequest = {
  id: "<id>",
  body: {
    cancellationType: "scheduled_date",
  },
};
```

## Fields

| Field                                                                               | Type                                                                                | Required                                                                            | Description                                                                         |
| ----------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------- |
| `id`                                                                                | *string*                                                                            | :heavy_check_mark:                                                                  | Subscription ID                                                                     |
| `body`                                                                              | [models.CancelSubscriptionRequest](../../sdk/models/cancel-subscription-request.md) | :heavy_check_mark:                                                                  | Cancel Subscription Request                                                         |