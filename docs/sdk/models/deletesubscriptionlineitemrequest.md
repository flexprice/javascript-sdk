# DeleteSubscriptionLineItemRequest

## Example Usage

```typescript
import { DeleteSubscriptionLineItemRequest } from "@flexprice/sdk/sdk/models";

let value: DeleteSubscriptionLineItemRequest = {
  id: "<id>",
  dtoDeleteSubscriptionLineItemRequest: {},
};
```

## Fields

| Field                                                                                                   | Type                                                                                                    | Required                                                                                                | Description                                                                                             |
| ------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------- |
| `id`                                                                                                    | *string*                                                                                                | :heavy_check_mark:                                                                                      | Line Item ID                                                                                            |
| `dtoDeleteSubscriptionLineItemRequest`                                                                  | [models.DtoDeleteSubscriptionLineItemRequest](../../sdk/models/dtodeletesubscriptionlineitemrequest.md) | :heavy_check_mark:                                                                                      | Delete Line Item Request                                                                                |