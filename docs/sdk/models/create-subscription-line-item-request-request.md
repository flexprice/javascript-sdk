# CreateSubscriptionLineItemRequestRequest

## Example Usage

```typescript
import { CreateSubscriptionLineItemRequestRequest } from "@flexprice/sdk/sdk/models";

let value: CreateSubscriptionLineItemRequestRequest = {
  id: "<id>",
  body: {},
};
```

## Fields

| Field                                                                                                 | Type                                                                                                  | Required                                                                                              | Description                                                                                           |
| ----------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------- |
| `id`                                                                                                  | *string*                                                                                              | :heavy_check_mark:                                                                                    | Subscription ID                                                                                       |
| `body`                                                                                                | [models.CreateSubscriptionLineItemRequest](../../sdk/models/create-subscription-line-item-request.md) | :heavy_check_mark:                                                                                    | Create Line Item Request                                                                              |