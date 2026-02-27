# AlertLogFilter

## Example Usage

```typescript
import { AlertLogFilter } from "@flexprice/sdk/sdk/models";

let value: AlertLogFilter = {};
```

## Fields

| Field                                                                 | Type                                                                  | Required                                                              | Description                                                           |
| --------------------------------------------------------------------- | --------------------------------------------------------------------- | --------------------------------------------------------------------- | --------------------------------------------------------------------- |
| `alertStatus`                                                         | [models.AlertState](../../sdk/models/alertstate.md)                   | :heavy_minus_sign:                                                    | N/A                                                                   |
| `alertType`                                                           | [models.AlertType](../../sdk/models/alerttype.md)                     | :heavy_minus_sign:                                                    | N/A                                                                   |
| `customerId`                                                          | *string*                                                              | :heavy_minus_sign:                                                    | N/A                                                                   |
| `endTime`                                                             | *string*                                                              | :heavy_minus_sign:                                                    | N/A                                                                   |
| `entityId`                                                            | *string*                                                              | :heavy_minus_sign:                                                    | N/A                                                                   |
| `entityType`                                                          | [models.AlertEntityType](../../sdk/models/alertentitytype.md)         | :heavy_minus_sign:                                                    | N/A                                                                   |
| `expand`                                                              | *string*                                                              | :heavy_minus_sign:                                                    | N/A                                                                   |
| `filters`                                                             | [models.FilterCondition](../../sdk/models/filtercondition.md)[]       | :heavy_minus_sign:                                                    | filters allows complex filtering based on multiple fields             |
| `limit`                                                               | *number*                                                              | :heavy_minus_sign:                                                    | N/A                                                                   |
| `offset`                                                              | *number*                                                              | :heavy_minus_sign:                                                    | N/A                                                                   |
| `order`                                                               | [models.AlertLogFilterOrder](../../sdk/models/alertlogfilterorder.md) | :heavy_minus_sign:                                                    | N/A                                                                   |
| `sort`                                                                | [models.SortCondition](../../sdk/models/sortcondition.md)[]           | :heavy_minus_sign:                                                    | N/A                                                                   |
| `startTime`                                                           | *string*                                                              | :heavy_minus_sign:                                                    | N/A                                                                   |
| `status`                                                              | [models.Status](../../sdk/models/status.md)                           | :heavy_minus_sign:                                                    | N/A                                                                   |