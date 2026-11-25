# ListReminderDraftsRequest

## Example Usage

```typescript
import { ListReminderDraftsRequest } from "@flexprice/sdk/sdk/models";

let value: ListReminderDraftsRequest = {};
```

## Fields

| Field                                                                                  | Type                                                                                   | Required                                                                               | Description                                                                            |
| -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- |
| `status`                                                                               | *string*                                                                               | :heavy_minus_sign:                                                                     | pending, approved, held or skipped                                                     |
| `q`                                                                                    | *string*                                                                               | :heavy_minus_sign:                                                                     | Match customer name, email or invoice number                                           |
| `customerId`                                                                           | *string*                                                                               | :heavy_minus_sign:                                                                     | Customer ID                                                                            |
| `currency`                                                                             | *string*                                                                               | :heavy_minus_sign:                                                                     | Currency code                                                                          |
| `limit`                                                                                | *number*                                                                               | :heavy_minus_sign:                                                                     | Page size (1-100, default 15)                                                          |
| `page`                                                                                 | *number*                                                                               | :heavy_minus_sign:                                                                     | Page number, from 1 (default 1); page times limit may not exceed 5000                  |
| `asOf`                                                                                 | *string*                                                                               | :heavy_minus_sign:                                                                     | as_of (RFC3339) of an earlier response; within the last 24 hours and not in the future |