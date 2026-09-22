# QueryAnalyticsViewRequest

## Example Usage

```typescript
import { QueryAnalyticsViewRequest } from "@flexprice/sdk/sdk/models";

let value: QueryAnalyticsViewRequest = {
  id: "<id>",
  body: {},
};
```

## Fields

| Field                                                             | Type                                                              | Required                                                          | Description                                                       |
| ----------------------------------------------------------------- | ----------------------------------------------------------------- | ----------------------------------------------------------------- | ----------------------------------------------------------------- |
| `id`                                                              | *string*                                                          | :heavy_check_mark:                                                | View ID                                                           |
| `body`                                                            | [models.ViewQueryRequest](../../sdk/models/view-query-request.md) | :heavy_check_mark:                                                | View query request                                                |