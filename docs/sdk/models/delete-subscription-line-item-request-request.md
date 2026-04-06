# DeleteSubscriptionLineItemRequestRequest

## Example Usage

```typescript
import { DeleteSubscriptionLineItemRequestRequest } from "@flexprice/sdk/sdk/models";

let value: DeleteSubscriptionLineItemRequestRequest = {
  id: "<id>",
  body: {},
};
```

## Fields

| Field                                                                                                 | Type                                                                                                  | Required                                                                                              | Description                                                                                           |
| ----------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------- |
| `id`                                                                                                  | *string*                                                                                              | :heavy_check_mark:                                                                                    | Line Item ID                                                                                          |
| `body`                                                                                                | [models.DeleteSubscriptionLineItemRequest](../../sdk/models/delete-subscription-line-item-request.md) | :heavy_check_mark:                                                                                    | Delete Line Item Request                                                                              |