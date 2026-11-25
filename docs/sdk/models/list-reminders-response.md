# ListRemindersResponse

## Example Usage

```typescript
import { ListRemindersResponse } from "@flexprice/sdk/sdk/models";

let value: ListRemindersResponse = {};
```

## Fields

| Field                                                                             | Type                                                                              | Required                                                                          | Description                                                                       |
| --------------------------------------------------------------------------------- | --------------------------------------------------------------------------------- | --------------------------------------------------------------------------------- | --------------------------------------------------------------------------------- |
| `asOf`                                                                            | *string*                                                                          | :heavy_minus_sign:                                                                | N/A                                                                               |
| `drafts`                                                                          | [models.InvoiceReminderResponse](../../sdk/models/invoice-reminder-response.md)[] | :heavy_minus_sign:                                                                | N/A                                                                               |
| `hasMore`                                                                         | *boolean*                                                                         | :heavy_minus_sign:                                                                | N/A                                                                               |
| `page`                                                                            | *number*                                                                          | :heavy_minus_sign:                                                                | N/A                                                                               |
| `summary`                                                                         | [models.ReminderSummary](../../sdk/models/reminder-summary.md)                    | :heavy_minus_sign:                                                                | N/A                                                                               |