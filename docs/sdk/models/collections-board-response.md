# CollectionsBoardResponse

## Example Usage

```typescript
import { CollectionsBoardResponse } from "@flexprice/sdk/sdk/models";

let value: CollectionsBoardResponse = {};
```

## Fields

| Field                                                                                                            | Type                                                                                                             | Required                                                                                                         | Description                                                                                                      |
| ---------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- |
| `asOf`                                                                                                           | *string*                                                                                                         | :heavy_minus_sign:                                                                                               | N/A                                                                                                              |
| `availableCurrencies`                                                                                            | *string*[]                                                                                                       | :heavy_minus_sign:                                                                                               | AvailableCurrencies lists the currencies of all open and recently paid receivables, before q and currency apply. |
| `columns`                                                                                                        | [models.CollectionsBoardColumn](../../sdk/models/collections-board-column.md)[]                                  | :heavy_minus_sign:                                                                                               | N/A                                                                                                              |