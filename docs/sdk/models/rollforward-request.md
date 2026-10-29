# RollforwardRequest

## Example Usage

```typescript
import { RollforwardRequest } from "@flexprice/sdk/sdk/models";

let value: RollforwardRequest = {
  currency: "Lek",
  periodStart: new Date("2024-12-15T11:11:43.474Z"),
};
```

## Fields

| Field                                                                                         | Type                                                                                          | Required                                                                                      | Description                                                                                   |
| --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| `accounts`                                                                                    | [models.LedgerAccountKey](../../sdk/models/ledger-account-key.md)[]                           | :heavy_minus_sign:                                                                            | defaults to [deferred_revenue]                                                                |
| `contractIds`                                                                                 | *string*[]                                                                                    | :heavy_minus_sign:                                                                            | N/A                                                                                           |
| `currency`                                                                                    | *string*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `customerIds`                                                                                 | *string*[]                                                                                    | :heavy_minus_sign:                                                                            | N/A                                                                                           |
| `groupBy`                                                                                     | [models.RevenueReportGroupBy](../../sdk/models/revenue-report-group-by.md)[]                  | :heavy_minus_sign:                                                                            | N/A                                                                                           |
| `limit`                                                                                       | *number*                                                                                      | :heavy_minus_sign:                                                                            | item rows per page; totals are never paged                                                    |
| `offset`                                                                                      | *number*                                                                                      | :heavy_minus_sign:                                                                            | N/A                                                                                           |
| `periodEnd`                                                                                   | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_minus_sign:                                                                            | YYYY-MM, an ended month; defaults to period_start                                             |
| `periodStart`                                                                                 | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_check_mark:                                                                            | YYYY-MM                                                                                       |
| `pobIds`                                                                                      | *string*[]                                                                                    | :heavy_minus_sign:                                                                            | N/A                                                                                           |
| `postedBy`                                                                                    | *string*                                                                                      | :heavy_minus_sign:                                                                            | only entries posted at or before it: the books as they were then                              |