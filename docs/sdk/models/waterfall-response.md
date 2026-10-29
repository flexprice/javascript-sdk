# WaterfallResponse

## Example Usage

```typescript
import { WaterfallResponse } from "@flexprice/sdk/sdk/models";

let value: WaterfallResponse = {};
```

## Fields

| Field                                                                | Type                                                                 | Required                                                             | Description                                                          |
| -------------------------------------------------------------------- | -------------------------------------------------------------------- | -------------------------------------------------------------------- | -------------------------------------------------------------------- |
| `items`                                                              | [models.WaterfallRow](../../sdk/models/waterfall-row.md)[]           | :heavy_minus_sign:                                                   | N/A                                                                  |
| `pagination`                                                         | [models.PaginationResponse](../../sdk/models/pagination-response.md) | :heavy_minus_sign:                                                   | N/A                                                                  |
| `totals`                                                             | [models.WaterfallCell](../../sdk/models/waterfall-cell.md)[]         | :heavy_minus_sign:                                                   | per period over all rows, never paged                                |