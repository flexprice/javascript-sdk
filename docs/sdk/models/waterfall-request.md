# WaterfallRequest

## Example Usage

```typescript
import { WaterfallRequest } from "@flexprice/sdk/sdk/models";

let value: WaterfallRequest = {
  currency: "Swiss Franc",
  periodEnd: new Date("2026-06-12T15:56:05.804Z"),
  periodStart: new Date("2024-05-28T02:35:46.087Z"),
};
```

## Fields

| Field                                                                                         | Type                                                                                          | Required                                                                                      | Description                                                                                   |
| --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| `asOf`                                                                                        | *string*                                                                                      | :heavy_minus_sign:                                                                            | report date: pending and scheduled split here; defaults to now                                |
| `contractIds`                                                                                 | *string*[]                                                                                    | :heavy_minus_sign:                                                                            | N/A                                                                                           |
| `currency`                                                                                    | *string*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `customerIds`                                                                                 | *string*[]                                                                                    | :heavy_minus_sign:                                                                            | N/A                                                                                           |
| `details`                                                                                     | *boolean*                                                                                     | :heavy_minus_sign:                                                                            | month-end deferred and unbilled balances                                                      |
| `groupBy`                                                                                     | [models.RevenueReportGroupBy](../../sdk/models/revenue-report-group-by.md)                    | :heavy_minus_sign:                                                                            | N/A                                                                                           |
| `limit`                                                                                       | *number*                                                                                      | :heavy_minus_sign:                                                                            | rows per page; totals are never paged                                                         |
| `offset`                                                                                      | *number*                                                                                      | :heavy_minus_sign:                                                                            | N/A                                                                                           |
| `periodEnd`                                                                                   | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_check_mark:                                                                            | YYYY-MM, at most 36 months from period_start                                                  |
| `periodStart`                                                                                 | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_check_mark:                                                                            | YYYY-MM                                                                                       |
| `pobIds`                                                                                      | *string*[]                                                                                    | :heavy_minus_sign:                                                                            | N/A                                                                                           |