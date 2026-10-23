# AnalyticsQueryRequest

## Example Usage

```typescript
import { AnalyticsQueryRequest } from "@flexprice/sdk/sdk/models";

let value: AnalyticsQueryRequest = {
  definition: {
    metrics: [
      "invoice_total",
    ],
    shape: "breakdown",
  },
};
```

## Fields

| Field                                                                           | Type                                                                            | Required                                                                        | Description                                                                     |
| ------------------------------------------------------------------------------- | ------------------------------------------------------------------------------- | ------------------------------------------------------------------------------- | ------------------------------------------------------------------------------- |
| `definition`                                                                    | [models.AnalyticsViewDefinition](../../sdk/models/analytics-view-definition.md) | :heavy_check_mark:                                                              | N/A                                                                             |
| `variables`                                                                     | Record<string, *string*[]>                                                      | :heavy_minus_sign:                                                              | N/A                                                                             |