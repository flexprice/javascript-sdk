# GetCostAnalyticsRequest

## Example Usage

```typescript
import { GetCostAnalyticsRequest } from "@flexprice/sdk/sdk/models";

let value: GetCostAnalyticsRequest = {};
```

## Fields

| Field                                                                                         | Type                                                                                          | Required                                                                                      | Description                                                                                   |
| --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| `endTime`                                                                                     | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_minus_sign:                                                                            | N/A                                                                                           |
| `expand`                                                                                      | *string*[]                                                                                    | :heavy_minus_sign:                                                                            | Expand options - specify which entities to expand                                             |
| `externalCustomerId`                                                                          | *string*                                                                                      | :heavy_minus_sign:                                                                            | Optional - for specific customer                                                              |
| `featureIds`                                                                                  | *string*[]                                                                                    | :heavy_minus_sign:                                                                            | Additional filters                                                                            |
| `limit`                                                                                       | *number*                                                                                      | :heavy_minus_sign:                                                                            | Pagination                                                                                    |
| `offset`                                                                                      | *number*                                                                                      | :heavy_minus_sign:                                                                            | N/A                                                                                           |
| `startTime`                                                                                   | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_minus_sign:                                                                            | Time range fields (optional - defaults to last 7 days if not provided)                        |