# CollectionsBoardColumn

## Example Usage

```typescript
import { CollectionsBoardColumn } from "@flexprice/sdk/sdk/models";

let value: CollectionsBoardColumn = {};
```

## Fields

| Field                                                                               | Type                                                                                | Required                                                                            | Description                                                                         |
| ----------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------- |
| `cards`                                                                             | [models.CollectionsItem](../../sdk/models/collections-item.md)[]                    | :heavy_minus_sign:                                                                  | N/A                                                                                 |
| `count`                                                                             | *number*                                                                            | :heavy_minus_sign:                                                                  | Count is the number of invoices in the whole column.                                |
| `hasMore`                                                                           | *boolean*                                                                           | :heavy_minus_sign:                                                                  | HasMore is true when the column has cards beyond the ones in this response.         |
| `hint`                                                                              | *string*                                                                            | :heavy_minus_sign:                                                                  | N/A                                                                                 |
| `key`                                                                               | [models.CollectionsColumnKey](../../sdk/models/collections-column-key.md)           | :heavy_minus_sign:                                                                  | N/A                                                                                 |
| `title`                                                                             | *string*                                                                            | :heavy_minus_sign:                                                                  | N/A                                                                                 |
| `totals`                                                                            | [models.CollectionsCurrencyTotal](../../sdk/models/collections-currency-total.md)[] | :heavy_minus_sign:                                                                  | N/A                                                                                 |