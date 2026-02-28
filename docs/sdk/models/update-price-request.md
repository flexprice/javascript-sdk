# UpdatePriceRequest

## Example Usage

```typescript
import { UpdatePriceRequest } from "@flexprice/sdk/sdk/models";

let value: UpdatePriceRequest = {
  id: "<id>",
  body: {},
};
```

## Fields

| Field                                                                        | Type                                                                         | Required                                                                     | Description                                                                  |
| ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- |
| `id`                                                                         | *string*                                                                     | :heavy_check_mark:                                                           | Price ID                                                                     |
| `body`                                                                       | [models.DtoUpdatePriceRequest](../../sdk/models/dto-update-price-request.md) | :heavy_check_mark:                                                           | Price configuration                                                          |