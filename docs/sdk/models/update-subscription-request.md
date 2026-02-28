# UpdateSubscriptionRequest

## Example Usage

```typescript
import { UpdateSubscriptionRequest } from "@flexprice/sdk/sdk/models";

let value: UpdateSubscriptionRequest = {
  id: "<id>",
  body: {},
};
```

## Fields

| Field                                                                                      | Type                                                                                       | Required                                                                                   | Description                                                                                |
| ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ |
| `id`                                                                                       | *string*                                                                                   | :heavy_check_mark:                                                                         | Subscription ID                                                                            |
| `body`                                                                                     | [models.DtoUpdateSubscriptionRequest](../../sdk/models/dto-update-subscription-request.md) | :heavy_check_mark:                                                                         | Update Subscription Request                                                                |