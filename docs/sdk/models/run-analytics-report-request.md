# RunAnalyticsReportRequest

## Example Usage

```typescript
import { RunAnalyticsReportRequest } from "@flexprice/sdk/sdk/models";

let value: RunAnalyticsReportRequest = {
  key: "<key>",
  body: {
    range: "2026-09-01..2026-10-01",
    shape: "scalar",
  },
};
```

## Fields

| Field                                                                 | Type                                                                  | Required                                                              | Description                                                           |
| --------------------------------------------------------------------- | --------------------------------------------------------------------- | --------------------------------------------------------------------- | --------------------------------------------------------------------- |
| `key`                                                                 | *string*                                                              | :heavy_check_mark:                                                    | Report key                                                            |
| `body`                                                                | [models.ReportQueryRequest](../../sdk/models/report-query-request.md) | :heavy_check_mark:                                                    | Report query request                                                  |