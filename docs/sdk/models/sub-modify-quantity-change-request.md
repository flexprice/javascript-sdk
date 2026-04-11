# SubModifyQuantityChangeRequest

## Example Usage

```typescript
import { SubModifyQuantityChangeRequest } from "@flexprice/sdk/sdk/models";

let value: SubModifyQuantityChangeRequest = {
  lineItems: [
    {
      id: "<id>",
      quantity: "<value>",
    },
  ],
};
```

## Fields

| Field                                                                            | Type                                                                             | Required                                                                         | Description                                                                      |
| -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- |
| `lineItems`                                                                      | [models.LineItemQuantityChange](../../sdk/models/line-item-quantity-change.md)[] | :heavy_check_mark:                                                               | N/A                                                                              |