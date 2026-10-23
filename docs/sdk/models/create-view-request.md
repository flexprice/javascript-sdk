# CreateViewRequest

## Example Usage

```typescript
import { CreateViewRequest } from "@flexprice/sdk/sdk/models";

let value: CreateViewRequest = {
  definition: {
    metrics: [
      "invoice_total",
    ],
    shape: "breakdown",
  },
  name: "<value>",
};
```

## Fields

| Field                                                                           | Type                                                                            | Required                                                                        | Description                                                                     |
| ------------------------------------------------------------------------------- | ------------------------------------------------------------------------------- | ------------------------------------------------------------------------------- | ------------------------------------------------------------------------------- |
| `definition`                                                                    | [models.AnalyticsViewDefinition](../../sdk/models/analytics-view-definition.md) | :heavy_check_mark:                                                              | N/A                                                                             |
| `name`                                                                          | *string*                                                                        | :heavy_check_mark:                                                              | N/A                                                                             |