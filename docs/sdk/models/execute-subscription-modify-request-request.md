# ExecuteSubscriptionModifyRequestRequest

## Example Usage

```typescript
import { ExecuteSubscriptionModifyRequestRequest } from "@flexprice/sdk/sdk/models";

let value: ExecuteSubscriptionModifyRequestRequest = {
  id: "<id>",
  body: {
    type: "grouped_invoicing",
  },
};
```

## Fields

| Field                                                                                              | Type                                                                                               | Required                                                                                           | Description                                                                                        |
| -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- |
| `id`                                                                                               | *string*                                                                                           | :heavy_check_mark:                                                                                 | Subscription ID                                                                                    |
| `body`                                                                                             | [models.ExecuteSubscriptionModifyRequest](../../sdk/models/execute-subscription-modify-request.md) | :heavy_check_mark:                                                                                 | Modification request                                                                               |