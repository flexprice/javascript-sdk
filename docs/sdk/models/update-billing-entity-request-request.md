# UpdateBillingEntityRequestRequest

## Example Usage

```typescript
import { UpdateBillingEntityRequestRequest } from "@flexprice/sdk/sdk/models";

let value: UpdateBillingEntityRequestRequest = {
  id: "<id>",
  body: {},
};
```

## Fields

| Field                                                                                  | Type                                                                                   | Required                                                                               | Description                                                                            |
| -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- |
| `id`                                                                                   | *string*                                                                               | :heavy_check_mark:                                                                     | Billing entity ID                                                                      |
| `body`                                                                                 | [models.UpdateBillingEntityRequest](../../sdk/models/update-billing-entity-request.md) | :heavy_check_mark:                                                                     | Fields to change                                                                       |