# DtoGetCostAnalyticsRequest

## Example Usage

```typescript
import { DtoGetCostAnalyticsRequest } from "@flexprice/sdk/sdk/models";

let value: DtoGetCostAnalyticsRequest = {};
```

## Fields

| Field                                                                  | Type                                                                   | Required                                                               | Description                                                            |
| ---------------------------------------------------------------------- | ---------------------------------------------------------------------- | ---------------------------------------------------------------------- | ---------------------------------------------------------------------- |
| `endTime`                                                              | *string*                                                               | :heavy_minus_sign:                                                     | N/A                                                                    |
| `expand`                                                               | *string*[]                                                             | :heavy_minus_sign:                                                     | Expand options - specify which entities to expand                      |
| `externalCustomerId`                                                   | *string*                                                               | :heavy_minus_sign:                                                     | Optional - for specific customer                                       |
| `featureIds`                                                           | *string*[]                                                             | :heavy_minus_sign:                                                     | Additional filters                                                     |
| `limit`                                                                | *number*                                                               | :heavy_minus_sign:                                                     | Pagination                                                             |
| `offset`                                                               | *number*                                                               | :heavy_minus_sign:                                                     | N/A                                                                    |
| `startTime`                                                            | *string*                                                               | :heavy_minus_sign:                                                     | Time range fields (optional - defaults to last 7 days if not provided) |