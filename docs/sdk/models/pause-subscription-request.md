# PauseSubscriptionRequest

## Example Usage

```typescript
import { PauseSubscriptionRequest } from "@flexprice/sdk/sdk/models";

let value: PauseSubscriptionRequest = {
  id: "<id>",
  body: {
    pauseMode: "immediate",
  },
};
```

## Fields

| Field                                                                                    | Type                                                                                     | Required                                                                                 | Description                                                                              |
| ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- |
| `id`                                                                                     | *string*                                                                                 | :heavy_check_mark:                                                                       | Subscription ID                                                                          |
| `body`                                                                                   | [models.DtoPauseSubscriptionRequest](../../sdk/models/dto-pause-subscription-request.md) | :heavy_check_mark:                                                                       | Pause subscription request                                                               |