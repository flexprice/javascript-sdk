# AlertLogFilter

## Example Usage

```typescript
import { AlertLogFilter } from "@flexprice/sdk/sdk/models";

let value: AlertLogFilter = {};
```

## Fields

| Field                                                                    | Type                                                                     | Required                                                                 | Description                                                              |
| ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ |
| `alertStatus`                                                            | [models.AlertState](../../sdk/models/alert-state.md)                     | :heavy_minus_sign:                                                       | N/A                                                                      |
| `alertType`                                                              | [models.AlertType](../../sdk/models/alert-type.md)                       | :heavy_minus_sign:                                                       | N/A                                                                      |
| `customerId`                                                             | *string*                                                                 | :heavy_minus_sign:                                                       | N/A                                                                      |
| `endTime`                                                                | *string*                                                                 | :heavy_minus_sign:                                                       | N/A                                                                      |
| `entityId`                                                               | *string*                                                                 | :heavy_minus_sign:                                                       | N/A                                                                      |
| `entityType`                                                             | [models.AlertEntityType](../../sdk/models/alert-entity-type.md)          | :heavy_minus_sign:                                                       | N/A                                                                      |
| `expand`                                                                 | *string*                                                                 | :heavy_minus_sign:                                                       | N/A                                                                      |
| `filters`                                                                | [models.FilterCondition](../../sdk/models/filter-condition.md)[]         | :heavy_minus_sign:                                                       | filters allows complex filtering based on multiple fields                |
| `limit`                                                                  | *number*                                                                 | :heavy_minus_sign:                                                       | N/A                                                                      |
| `offset`                                                                 | *number*                                                                 | :heavy_minus_sign:                                                       | N/A                                                                      |
| `order`                                                                  | [models.AlertLogFilterOrder](../../sdk/models/alert-log-filter-order.md) | :heavy_minus_sign:                                                       | N/A                                                                      |
| `sort`                                                                   | [models.SortCondition](../../sdk/models/sort-condition.md)[]             | :heavy_minus_sign:                                                       | N/A                                                                      |
| `startTime`                                                              | *string*                                                                 | :heavy_minus_sign:                                                       | N/A                                                                      |
| `status`                                                                 | [models.Status](../../sdk/models/status.md)                              | :heavy_minus_sign:                                                       | N/A                                                                      |