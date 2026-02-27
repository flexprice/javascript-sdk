# PauseSubscriptionRequest

## Example Usage

```typescript
import { PauseSubscriptionRequest } from "@flexprice/sdk/sdk/models";

let value: PauseSubscriptionRequest = {
  id: "<id>",
  dtoPauseSubscriptionRequest: {
    pauseMode: "immediate",
  },
};
```

## Fields

| Field                                                                                 | Type                                                                                  | Required                                                                              | Description                                                                           |
| ------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------- |
| `id`                                                                                  | *string*                                                                              | :heavy_check_mark:                                                                    | Subscription ID                                                                       |
| `dtoPauseSubscriptionRequest`                                                         | [models.DtoPauseSubscriptionRequest](../../sdk/models/dtopausesubscriptionrequest.md) | :heavy_check_mark:                                                                    | Pause subscription request                                                            |