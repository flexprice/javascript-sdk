# CancelSubscriptionRequest

## Example Usage

```typescript
import { CancelSubscriptionRequest } from "@flexprice/sdk/sdk/models";

let value: CancelSubscriptionRequest = {
  id: "<id>",
  body: {
    cancellationType: "immediate",
  },
};
```

## Fields

| Field                                                                                      | Type                                                                                       | Required                                                                                   | Description                                                                                |
| ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ |
| `id`                                                                                       | *string*                                                                                   | :heavy_check_mark:                                                                         | Subscription ID                                                                            |
| `body`                                                                                     | [models.DtoCancelSubscriptionRequest](../../sdk/models/dto-cancel-subscription-request.md) | :heavy_check_mark:                                                                         | Cancel Subscription Request                                                                |