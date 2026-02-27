# PlanFilter

## Example Usage

```typescript
import { PlanFilter } from "@flexprice/sdk/sdk/models";

let value: PlanFilter = {};
```

## Fields

| Field                                                           | Type                                                            | Required                                                        | Description                                                     |
| --------------------------------------------------------------- | --------------------------------------------------------------- | --------------------------------------------------------------- | --------------------------------------------------------------- |
| `endTime`                                                       | *string*                                                        | :heavy_minus_sign:                                              | N/A                                                             |
| `expand`                                                        | *string*                                                        | :heavy_minus_sign:                                              | N/A                                                             |
| `filters`                                                       | [models.FilterCondition](../../sdk/models/filtercondition.md)[] | :heavy_minus_sign:                                              | filters allows complex filtering based on multiple fields       |
| `limit`                                                         | *number*                                                        | :heavy_minus_sign:                                              | N/A                                                             |
| `lookupKey`                                                     | *string*                                                        | :heavy_minus_sign:                                              | N/A                                                             |
| `offset`                                                        | *number*                                                        | :heavy_minus_sign:                                              | N/A                                                             |
| `order`                                                         | [models.PlanFilterOrder](../../sdk/models/planfilterorder.md)   | :heavy_minus_sign:                                              | N/A                                                             |
| `planIds`                                                       | *string*[]                                                      | :heavy_minus_sign:                                              | N/A                                                             |
| `sort`                                                          | [models.SortCondition](../../sdk/models/sortcondition.md)[]     | :heavy_minus_sign:                                              | N/A                                                             |
| `startTime`                                                     | *string*                                                        | :heavy_minus_sign:                                              | N/A                                                             |
| `status`                                                        | [models.Status](../../sdk/models/status.md)                     | :heavy_minus_sign:                                              | N/A                                                             |