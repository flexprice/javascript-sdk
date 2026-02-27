# UpdateSubscriptionRequest

## Example Usage

```typescript
import { UpdateSubscriptionRequest } from "@flexprice/sdk/sdk/models";

let value: UpdateSubscriptionRequest = {
  id: "<id>",
  dtoUpdateSubscriptionRequest: {},
};
```

## Fields

| Field                                                                                   | Type                                                                                    | Required                                                                                | Description                                                                             |
| --------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------- |
| `id`                                                                                    | *string*                                                                                | :heavy_check_mark:                                                                      | Subscription ID                                                                         |
| `dtoUpdateSubscriptionRequest`                                                          | [models.DtoUpdateSubscriptionRequest](../../sdk/models/dtoupdatesubscriptionrequest.md) | :heavy_check_mark:                                                                      | Update Subscription Request                                                             |