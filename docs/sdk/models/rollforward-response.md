# RollforwardResponse

## Example Usage

```typescript
import { RollforwardResponse } from "@flexprice/sdk/sdk/models";

let value: RollforwardResponse = {};
```

## Fields

| Field                                                                | Type                                                                 | Required                                                             | Description                                                          |
| -------------------------------------------------------------------- | -------------------------------------------------------------------- | -------------------------------------------------------------------- | -------------------------------------------------------------------- |
| `items`                                                              | [models.RollforwardRow](../../sdk/models/rollforward-row.md)[]       | :heavy_minus_sign:                                                   | per period, account and group; empty without group_by                |
| `pagination`                                                         | [models.PaginationResponse](../../sdk/models/pagination-response.md) | :heavy_minus_sign:                                                   | N/A                                                                  |
| `totals`                                                             | [models.RollforwardRow](../../sdk/models/rollforward-row.md)[]       | :heavy_minus_sign:                                                   | per period and account, all groups                                   |