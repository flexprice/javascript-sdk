# ExecuteSubscriptionModifyRequest

## Example Usage

```typescript
import { ExecuteSubscriptionModifyRequest } from "@flexprice/sdk/sdk/models";

let value: ExecuteSubscriptionModifyRequest = {
  type: "quantity_change",
};
```

## Fields

| Field                                                                                           | Type                                                                                            | Required                                                                                        | Description                                                                                     |
| ----------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------- |
| `inheritanceParams`                                                                             | [models.SubModifyInheritanceRequest](../../sdk/models/sub-modify-inheritance-request.md)        | :heavy_minus_sign:                                                                              | N/A                                                                                             |
| `quantityChangeParams`                                                                          | [models.SubModifyQuantityChangeRequest](../../sdk/models/sub-modify-quantity-change-request.md) | :heavy_minus_sign:                                                                              | N/A                                                                                             |
| `type`                                                                                          | [models.SubscriptionModifyType](../../sdk/models/subscription-modify-type.md)                   | :heavy_check_mark:                                                                              | N/A                                                                                             |