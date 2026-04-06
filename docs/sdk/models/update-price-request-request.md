# UpdatePriceRequestRequest

## Example Usage

```typescript
import { UpdatePriceRequestRequest } from "@flexprice/sdk/sdk/models";

let value: UpdatePriceRequestRequest = {
  id: "<id>",
  body: {},
};
```

## Fields

| Field                                                                 | Type                                                                  | Required                                                              | Description                                                           |
| --------------------------------------------------------------------- | --------------------------------------------------------------------- | --------------------------------------------------------------------- | --------------------------------------------------------------------- |
| `id`                                                                  | *string*                                                              | :heavy_check_mark:                                                    | Price ID                                                              |
| `body`                                                                | [models.UpdatePriceRequest](../../sdk/models/update-price-request.md) | :heavy_check_mark:                                                    | Price configuration                                                   |