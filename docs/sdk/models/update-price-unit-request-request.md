# UpdatePriceUnitRequestRequest

## Example Usage

```typescript
import { UpdatePriceUnitRequestRequest } from "@flexprice/sdk/sdk/models";

let value: UpdatePriceUnitRequestRequest = {
  id: "<id>",
  body: {},
};
```

## Fields

| Field                                                                          | Type                                                                           | Required                                                                       | Description                                                                    |
| ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ |
| `id`                                                                           | *string*                                                                       | :heavy_check_mark:                                                             | Price unit ID                                                                  |
| `body`                                                                         | [models.UpdatePriceUnitRequest](../../sdk/models/update-price-unit-request.md) | :heavy_check_mark:                                                             | Price unit details to update                                                   |