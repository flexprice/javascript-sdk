# ActivateSubscriptionRequest

## Example Usage

```typescript
import { ActivateSubscriptionRequest } from "@flexprice/sdk/sdk/models";

let value: ActivateSubscriptionRequest = {
  id: "<id>",
  dtoActivateDraftSubscriptionRequest: {
    startDate: "<value>",
  },
};
```

## Fields

| Field                                                                                                 | Type                                                                                                  | Required                                                                                              | Description                                                                                           |
| ----------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------- |
| `id`                                                                                                  | *string*                                                                                              | :heavy_check_mark:                                                                                    | Subscription ID                                                                                       |
| `dtoActivateDraftSubscriptionRequest`                                                                 | [models.DtoActivateDraftSubscriptionRequest](../../sdk/models/dtoactivatedraftsubscriptionrequest.md) | :heavy_check_mark:                                                                                    | Activate Draft Subscription Request                                                                   |