# CreateSubscriptionLineItemRequest

## Example Usage

```typescript
import { CreateSubscriptionLineItemRequest } from "@flexprice/sdk/sdk/models";

let value: CreateSubscriptionLineItemRequest = {
  id: "<id>",
  body: {},
};
```

## Fields

| Field                                                                                                        | Type                                                                                                         | Required                                                                                                     | Description                                                                                                  |
| ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ |
| `id`                                                                                                         | *string*                                                                                                     | :heavy_check_mark:                                                                                           | Subscription ID                                                                                              |
| `body`                                                                                                       | [models.DtoCreateSubscriptionLineItemRequest](../../sdk/models/dto-create-subscription-line-item-request.md) | :heavy_check_mark:                                                                                           | Create Line Item Request                                                                                     |