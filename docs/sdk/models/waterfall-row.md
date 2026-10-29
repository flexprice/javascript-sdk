# WaterfallRow

## Example Usage

```typescript
import { WaterfallRow } from "@flexprice/sdk/sdk/models";

let value: WaterfallRow = {};
```

## Fields

| Field                                                        | Type                                                         | Required                                                     | Description                                                  |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| `cells`                                                      | [models.WaterfallCell](../../sdk/models/waterfall-cell.md)[] | :heavy_minus_sign:                                           | one per requested period, in order                           |
| `contractId`                                                 | *string*                                                     | :heavy_minus_sign:                                           | N/A                                                          |
| `customerId`                                                 | *string*                                                     | :heavy_minus_sign:                                           | N/A                                                          |
| `pobId`                                                      | *string*                                                     | :heavy_minus_sign:                                           | N/A                                                          |