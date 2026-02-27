# DtoGetUsageAnalyticsRequest

## Example Usage

```typescript
import { DtoGetUsageAnalyticsRequest } from "@flexprice/sdk/sdk/models";

let value: DtoGetUsageAnalyticsRequest = {
  externalCustomerId: "<id>",
};
```

## Fields

| Field                                                                                | Type                                                                                 | Required                                                                             | Description                                                                          |
| ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ |
| `endTime`                                                                            | *string*                                                                             | :heavy_minus_sign:                                                                   | N/A                                                                                  |
| `expand`                                                                             | *string*[]                                                                           | :heavy_minus_sign:                                                                   | allowed values: "price", "meter", "feature", "subscription_line_item","plan","addon" |
| `externalCustomerId`                                                                 | *string*                                                                             | :heavy_check_mark:                                                                   | N/A                                                                                  |
| `featureIds`                                                                         | *string*[]                                                                           | :heavy_minus_sign:                                                                   | N/A                                                                                  |
| `groupBy`                                                                            | *string*[]                                                                           | :heavy_minus_sign:                                                                   | allowed values: "source", "feature_id", "properties.<field_name>"                    |
| `propertyFilters`                                                                    | Record<string, *string*[]>                                                           | :heavy_minus_sign:                                                                   | Property filters to filter the events by the keys in `properties` field of the event |
| `sources`                                                                            | *string*[]                                                                           | :heavy_minus_sign:                                                                   | N/A                                                                                  |
| `startTime`                                                                          | *string*                                                                             | :heavy_minus_sign:                                                                   | N/A                                                                                  |
| `windowSize`                                                                         | [models.WindowSize](../../sdk/models/windowsize.md)                                  | :heavy_minus_sign:                                                                   | N/A                                                                                  |