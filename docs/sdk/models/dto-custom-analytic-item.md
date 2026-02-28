# DtoCustomAnalyticItem

## Example Usage

```typescript
import { DtoCustomAnalyticItem } from "@flexprice/sdk/sdk/models";

let value: DtoCustomAnalyticItem = {};
```

## Fields

| Field                                         | Type                                          | Required                                      | Description                                   |
| --------------------------------------------- | --------------------------------------------- | --------------------------------------------- | --------------------------------------------- |
| `featureName`                                 | *string*                                      | :heavy_minus_sign:                            | Name of the feature this applies to           |
| `id`                                          | *string*                                      | :heavy_minus_sign:                            | N/A                                           |
| `name`                                        | *string*                                      | :heavy_minus_sign:                            | Calculation name (e.g., "Revenue per Minute") |
| `type`                                        | *string*                                      | :heavy_minus_sign:                            | "feature", "meter", "event_name"              |
| `value`                                       | *string*                                      | :heavy_minus_sign:                            | N/A                                           |