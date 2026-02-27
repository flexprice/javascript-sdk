# CancelSubscriptionRequest

## Example Usage

```typescript
import { CancelSubscriptionRequest } from "@flexprice/sdk/sdk/models";

let value: CancelSubscriptionRequest = {
  id: "<id>",
  dtoCancelSubscriptionRequest: {
    cancellationType: "immediate",
  },
};
```

## Fields

| Field                                                                                   | Type                                                                                    | Required                                                                                | Description                                                                             |
| --------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------- |
| `id`                                                                                    | *string*                                                                                | :heavy_check_mark:                                                                      | Subscription ID                                                                         |
| `dtoCancelSubscriptionRequest`                                                          | [models.DtoCancelSubscriptionRequest](../../sdk/models/dtocancelsubscriptionrequest.md) | :heavy_check_mark:                                                                      | Cancel Subscription Request                                                             |