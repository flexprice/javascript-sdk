# ListAllSubscriptionSchedulesRequest

## Example Usage

```typescript
import { ListAllSubscriptionSchedulesRequest } from "@flexprice/sdk/sdk/models";

let value: ListAllSubscriptionSchedulesRequest = {};
```

## Fields

| Field                            | Type                             | Required                         | Description                      |
| -------------------------------- | -------------------------------- | -------------------------------- | -------------------------------- |
| `pendingOnly`                    | *boolean*                        | :heavy_minus_sign:               | Filter to pending schedules only |
| `subscriptionId`                 | *string*                         | :heavy_minus_sign:               | Filter by subscription ID        |
| `limit`                          | *number*                         | :heavy_minus_sign:               | Limit results                    |
| `offset`                         | *number*                         | :heavy_minus_sign:               | Offset for pagination            |