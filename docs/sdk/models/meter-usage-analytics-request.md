# MeterUsageAnalyticsRequest

## Example Usage

```typescript
import { MeterUsageAnalyticsRequest } from "@flexprice/sdk/sdk/models";

let value: MeterUsageAnalyticsRequest = {
  aggregationType: "SUM",
  endTime: new Date("2024-02-01T00:00:00Z"),
  externalCustomerId: "cust_123",
  meterIds: [
    "mtr_abc",
    "mtr_def",
  ],
  startTime: new Date("2024-01-01T00:00:00Z"),
};
```

## Fields

| Field                                                                                         | Type                                                                                          | Required                                                                                      | Description                                                                                   | Example                                                                                       |
| --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| `aggregationType`                                                                             | [models.AggregationType](../../sdk/models/aggregation-type.md)                                | :heavy_check_mark:                                                                            | N/A                                                                                           |                                                                                               |
| `billingAnchor`                                                                               | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_minus_sign:                                                                            | N/A                                                                                           |                                                                                               |
| `endTime`                                                                                     | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_check_mark:                                                                            | N/A                                                                                           | 2024-02-01T00:00:00Z                                                                          |
| `externalCustomerId`                                                                          | *string*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           | cust_123                                                                                      |
| `meterIds`                                                                                    | *string*[]                                                                                    | :heavy_check_mark:                                                                            | N/A                                                                                           | [<br/>"mtr_abc",<br/>"mtr_def"<br/>]                                                          |
| `startTime`                                                                                   | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_check_mark:                                                                            | N/A                                                                                           | 2024-01-01T00:00:00Z                                                                          |
| `windowSize`                                                                                  | [models.WindowSize](../../sdk/models/window-size.md)                                          | :heavy_minus_sign:                                                                            | N/A                                                                                           |                                                                                               |