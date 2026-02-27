# UpdateSubscriptionLineItemRequest

## Example Usage

```typescript
import { UpdateSubscriptionLineItemRequest } from "@flexprice/sdk/sdk/models";

let value: UpdateSubscriptionLineItemRequest = {
  id: "<id>",
  dtoUpdateSubscriptionLineItemRequest: {},
};
```

## Fields

| Field                                                                                                   | Type                                                                                                    | Required                                                                                                | Description                                                                                             |
| ------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------- |
| `id`                                                                                                    | *string*                                                                                                | :heavy_check_mark:                                                                                      | Line Item ID                                                                                            |
| `dtoUpdateSubscriptionLineItemRequest`                                                                  | [models.DtoUpdateSubscriptionLineItemRequest](../../sdk/models/dtoupdatesubscriptionlineitemrequest.md) | :heavy_check_mark:                                                                                      | Update Line Item Request                                                                                |