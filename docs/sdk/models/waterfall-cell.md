# WaterfallCell

## Example Usage

```typescript
import { WaterfallCell } from "@flexprice/sdk/sdk/models";

let value: WaterfallCell = {};
```

## Fields

| Field                                                            | Type                                                             | Required                                                         | Description                                                      |
| ---------------------------------------------------------------- | ---------------------------------------------------------------- | ---------------------------------------------------------------- | ---------------------------------------------------------------- |
| `deferred`                                                       | *string*                                                         | :heavy_minus_sign:                                               | details: closing deferred_revenue, ended months only             |
| `period`                                                         | *string*                                                         | :heavy_minus_sign:                                               | YYYY-MM                                                          |
| `revenue`                                                        | [models.RevenueBreakdown](../../sdk/models/revenue-breakdown.md) | :heavy_minus_sign:                                               | N/A                                                              |
| `unbilled`                                                       | *string*                                                         | :heavy_minus_sign:                                               | details: closing unbilled_receivable, ended months only          |