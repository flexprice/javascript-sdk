# DtoUsageBreakdownItem

## Example Usage

```typescript
import { DtoUsageBreakdownItem } from "@flexprice/sdk/sdk/models";

let value: DtoUsageBreakdownItem = {};
```

## Fields

| Field                                                                                       | Type                                                                                        | Required                                                                                    | Description                                                                                 |
| ------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------- |
| `cost`                                                                                      | *string*                                                                                    | :heavy_minus_sign:                                                                          | cost is the cost attributed to this group for the line item                                 |
| `eventCount`                                                                                | *number*                                                                                    | :heavy_minus_sign:                                                                          | event_count is the number of events from this group (optional)                              |
| `groupedBy`                                                                                 | Record<string, *string*>                                                                    | :heavy_minus_sign:                                                                          | grouped_by contains the grouping field values (e.g., {"source": "api", "org_id": "org123"}) |
| `percentage`                                                                                | *string*                                                                                    | :heavy_minus_sign:                                                                          | percentage is the percentage of total line item cost from this group (optional)             |
| `usage`                                                                                     | *string*                                                                                    | :heavy_minus_sign:                                                                          | usage is the total usage amount from this group (optional, for additional context)          |