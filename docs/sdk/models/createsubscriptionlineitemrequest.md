# CreateSubscriptionLineItemRequest

## Example Usage

```typescript
import { CreateSubscriptionLineItemRequest } from "@flexprice/sdk/sdk/models";

let value: CreateSubscriptionLineItemRequest = {
  id: "<id>",
  dtoCreateSubscriptionLineItemRequest: {},
};
```

## Fields

| Field                                                                                                   | Type                                                                                                    | Required                                                                                                | Description                                                                                             |
| ------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------- |
| `id`                                                                                                    | *string*                                                                                                | :heavy_check_mark:                                                                                      | Subscription ID                                                                                         |
| `dtoCreateSubscriptionLineItemRequest`                                                                  | [models.DtoCreateSubscriptionLineItemRequest](../../sdk/models/dtocreatesubscriptionlineitemrequest.md) | :heavy_check_mark:                                                                                      | Create Line Item Request                                                                                |