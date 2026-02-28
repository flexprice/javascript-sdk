# CostsheetFilter

## Example Usage

```typescript
import { CostsheetFilter } from "@flexprice/sdk/sdk/models";

let value: CostsheetFilter = {};
```

## Fields

| Field                                                            | Type                                                             | Required                                                         | Description                                                      |
| ---------------------------------------------------------------- | ---------------------------------------------------------------- | ---------------------------------------------------------------- | ---------------------------------------------------------------- |
| `costsheetIDs`                                                   | *string*[]                                                       | :heavy_minus_sign:                                               | CostsheetIDs allows filtering by specific costsheet IDs          |
| `environmentID`                                                  | *string*                                                         | :heavy_minus_sign:                                               | EnvironmentID filters by specific environment ID                 |
| `filters`                                                        | [models.FilterCondition](../../sdk/models/filter-condition.md)[] | :heavy_minus_sign:                                               | Filters contains custom filtering conditions                     |
| `lookupKey`                                                      | *string*                                                         | :heavy_minus_sign:                                               | LookupKey filters by lookup key                                  |
| `name`                                                           | *string*                                                         | :heavy_minus_sign:                                               | Name filters by costsheet name                                   |
| `queryFilter`                                                    | [models.QueryFilter](../../sdk/models/query-filter.md)           | :heavy_minus_sign:                                               | N/A                                                              |
| `sort`                                                           | [models.SortCondition](../../sdk/models/sort-condition.md)[]     | :heavy_minus_sign:                                               | Sort specifies result ordering preferences                       |
| `status`                                                         | [models.Status](../../sdk/models/status.md)                      | :heavy_minus_sign:                                               | N/A                                                              |
| `tenantID`                                                       | *string*                                                         | :heavy_minus_sign:                                               | TenantID filters by specific tenant ID                           |
| `timeRangeFilter`                                                | [models.TimeRangeFilter](../../sdk/models/time-range-filter.md)  | :heavy_minus_sign:                                               | N/A                                                              |