# ExecuteSubscriptionModifyRequest

## Example Usage

```typescript
import { ExecuteSubscriptionModifyRequest } from "@flexprice/sdk/sdk/models";

let value: ExecuteSubscriptionModifyRequest = {
  id: "<id>",
  body: {},
};
```

## Fields

| Field                                                                                                        | Type                                                                                                         | Required                                                                                                     | Description                                                                                                  |
| ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ |
| `id`                                                                                                         | *string*                                                                                                     | :heavy_check_mark:                                                                                           | Subscription ID                                                                                              |
| `body`                                                                                                       | [models.ExecuteSubscriptionInheritanceRequest](../../sdk/models/execute-subscription-inheritance-request.md) | :heavy_check_mark:                                                                                           | External customer IDs to inherit                                                                             |