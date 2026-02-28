# DtoSourceUsageItem

## Example Usage

```typescript
import { DtoSourceUsageItem } from "@flexprice/sdk/sdk/models";

let value: DtoSourceUsageItem = {};
```

## Fields

| Field                                                                               | Type                                                                                | Required                                                                            | Description                                                                         |
| ----------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------- |
| `cost`                                                                              | *string*                                                                            | :heavy_minus_sign:                                                                  | cost is the cost attributed to this source for the line item                        |
| `eventCount`                                                                        | *number*                                                                            | :heavy_minus_sign:                                                                  | event_count is the number of events from this source (optional)                     |
| `percentage`                                                                        | *string*                                                                            | :heavy_minus_sign:                                                                  | percentage is the percentage of total line item cost from this source (optional)    |
| `source`                                                                            | *string*                                                                            | :heavy_minus_sign:                                                                  | source is the name of the event source                                              |
| `usage`                                                                             | *string*                                                                            | :heavy_minus_sign:                                                                  | usage is the total usage amount from this source (optional, for additional context) |