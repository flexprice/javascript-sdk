# ListPriceUnitsRequest

## Example Usage

```typescript
import { ListPriceUnitsRequest } from "@flexprice/sdk/sdk/models";

let value: ListPriceUnitsRequest = {};
```

## Fields

| Field                                                                    | Type                                                                     | Required                                                                 | Description                                                              |
| ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ |
| `status`                                                                 | *string*                                                                 | :heavy_minus_sign:                                                       | Filter by status                                                         |
| `limit`                                                                  | *number*                                                                 | :heavy_minus_sign:                                                       | Limit number of results                                                  |
| `offset`                                                                 | *number*                                                                 | :heavy_minus_sign:                                                       | Offset for pagination                                                    |
| `sort`                                                                   | *string*                                                                 | :heavy_minus_sign:                                                       | Sort field                                                               |
| `order`                                                                  | [models.ListPriceUnitsOrder](../../sdk/models/list-price-units-order.md) | :heavy_minus_sign:                                                       | Sort order                                                               |