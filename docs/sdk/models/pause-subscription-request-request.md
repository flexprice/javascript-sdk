# PauseSubscriptionRequestRequest

## Example Usage

```typescript
import { PauseSubscriptionRequestRequest } from "@flexprice/sdk/sdk/models";

let value: PauseSubscriptionRequestRequest = {
  id: "<id>",
  body: {
    pauseMode: "period_end",
  },
};
```

## Fields

| Field                                                                             | Type                                                                              | Required                                                                          | Description                                                                       |
| --------------------------------------------------------------------------------- | --------------------------------------------------------------------------------- | --------------------------------------------------------------------------------- | --------------------------------------------------------------------------------- |
| `id`                                                                              | *string*                                                                          | :heavy_check_mark:                                                                | Subscription ID                                                                   |
| `body`                                                                            | [models.PauseSubscriptionRequest](../../sdk/models/pause-subscription-request.md) | :heavy_check_mark:                                                                | Pause subscription request                                                        |