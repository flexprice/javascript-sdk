# UpdateSubscriptionLineItemRequest

## Example Usage

```typescript
import { UpdateSubscriptionLineItemRequest } from "@flexprice/sdk/sdk/models";

let value: UpdateSubscriptionLineItemRequest = {
  id: "<id>",
  body: {},
};
```

## Fields

| Field                                                                                                        | Type                                                                                                         | Required                                                                                                     | Description                                                                                                  |
| ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ |
| `id`                                                                                                         | *string*                                                                                                     | :heavy_check_mark:                                                                                           | Line Item ID                                                                                                 |
| `body`                                                                                                       | [models.DtoUpdateSubscriptionLineItemRequest](../../sdk/models/dto-update-subscription-line-item-request.md) | :heavy_check_mark:                                                                                           | Update Line Item Request                                                                                     |