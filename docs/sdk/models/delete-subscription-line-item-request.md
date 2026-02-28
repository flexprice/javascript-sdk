# DeleteSubscriptionLineItemRequest

## Example Usage

```typescript
import { DeleteSubscriptionLineItemRequest } from "@flexprice/sdk/sdk/models";

let value: DeleteSubscriptionLineItemRequest = {
  id: "<id>",
  body: {},
};
```

## Fields

| Field                                                                                                        | Type                                                                                                         | Required                                                                                                     | Description                                                                                                  |
| ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ |
| `id`                                                                                                         | *string*                                                                                                     | :heavy_check_mark:                                                                                           | Line Item ID                                                                                                 |
| `body`                                                                                                       | [models.DtoDeleteSubscriptionLineItemRequest](../../sdk/models/dto-delete-subscription-line-item-request.md) | :heavy_check_mark:                                                                                           | Delete Line Item Request                                                                                     |