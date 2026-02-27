# UserFilter

## Example Usage

```typescript
import { UserFilter } from "@flexprice/sdk/sdk/models";

let value: UserFilter = {};
```

## Fields

| Field                                                           | Type                                                            | Required                                                        | Description                                                     |
| --------------------------------------------------------------- | --------------------------------------------------------------- | --------------------------------------------------------------- | --------------------------------------------------------------- |
| `endTime`                                                       | *string*                                                        | :heavy_minus_sign:                                              | N/A                                                             |
| `expand`                                                        | *string*                                                        | :heavy_minus_sign:                                              | N/A                                                             |
| `filters`                                                       | [models.FilterCondition](../../sdk/models/filtercondition.md)[] | :heavy_minus_sign:                                              | filters allows complex filtering based on multiple fields       |
| `limit`                                                         | *number*                                                        | :heavy_minus_sign:                                              | N/A                                                             |
| `offset`                                                        | *number*                                                        | :heavy_minus_sign:                                              | N/A                                                             |
| `order`                                                         | [models.UserFilterOrder](../../sdk/models/userfilterorder.md)   | :heavy_minus_sign:                                              | N/A                                                             |
| `roles`                                                         | *string*[]                                                      | :heavy_minus_sign:                                              | N/A                                                             |
| `sort`                                                          | [models.SortCondition](../../sdk/models/sortcondition.md)[]     | :heavy_minus_sign:                                              | N/A                                                             |
| `startTime`                                                     | *string*                                                        | :heavy_minus_sign:                                              | N/A                                                             |
| `status`                                                        | [models.Status](../../sdk/models/status.md)                     | :heavy_minus_sign:                                              | N/A                                                             |
| `type`                                                          | [models.UserType](../../sdk/models/usertype.md)                 | :heavy_minus_sign:                                              | N/A                                                             |
| `userIds`                                                       | *string*[]                                                      | :heavy_minus_sign:                                              | Specific filters for users                                      |