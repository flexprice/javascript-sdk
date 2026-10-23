# UpdateAnalyticsViewRequest

## Example Usage

```typescript
import { UpdateAnalyticsViewRequest } from "@flexprice/sdk/sdk/models";

let value: UpdateAnalyticsViewRequest = {
  id: "<id>",
  body: {
    definition: {
      metrics: [
        "invoice_total",
      ],
      shape: "breakdown",
    },
    name: "<value>",
  },
};
```

## Fields

| Field                                                               | Type                                                                | Required                                                            | Description                                                         |
| ------------------------------------------------------------------- | ------------------------------------------------------------------- | ------------------------------------------------------------------- | ------------------------------------------------------------------- |
| `id`                                                                | *string*                                                            | :heavy_check_mark:                                                  | View ID                                                             |
| `body`                                                              | [models.CreateViewRequest](../../sdk/models/create-view-request.md) | :heavy_check_mark:                                                  | View request                                                        |