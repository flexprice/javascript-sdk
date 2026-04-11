# PreviewSubscriptionModifyRequest

## Example Usage

```typescript
import { PreviewSubscriptionModifyRequest } from "@flexprice/sdk/sdk/models";

let value: PreviewSubscriptionModifyRequest = {
  id: "<id>",
  body: {
    type: "quantity_change",
  },
};
```

## Fields

| Field                                                                                              | Type                                                                                               | Required                                                                                           | Description                                                                                        |
| -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- |
| `id`                                                                                               | *string*                                                                                           | :heavy_check_mark:                                                                                 | Subscription ID                                                                                    |
| `body`                                                                                             | [models.ExecuteSubscriptionModifyRequest](../../sdk/models/execute-subscription-modify-request.md) | :heavy_check_mark:                                                                                 | Modification preview request                                                                       |