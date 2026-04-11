# MeterUsageQueryRequest

## Example Usage

```typescript
import { MeterUsageQueryRequest } from "@flexprice/sdk/sdk/models";

let value: MeterUsageQueryRequest = {
  aggregationType: "MAX",
  billingAnchor: new Date("2024-01-15T00:00:00Z"),
  endTime: new Date("2024-02-01T00:00:00Z"),
  externalCustomerId: "cust_123",
  meterId: "mtr_abc",
  startTime: new Date("2024-01-01T00:00:00Z"),
};
```

## Fields

| Field                                                                                         | Type                                                                                          | Required                                                                                      | Description                                                                                   | Example                                                                                       |
| --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| `aggregationType`                                                                             | [models.AggregationType](../../sdk/models/aggregation-type.md)                                | :heavy_check_mark:                                                                            | N/A                                                                                           |                                                                                               |
| `billingAnchor`                                                                               | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_minus_sign:                                                                            | N/A                                                                                           | 2024-01-15T00:00:00Z                                                                          |
| `endTime`                                                                                     | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_check_mark:                                                                            | N/A                                                                                           | 2024-02-01T00:00:00Z                                                                          |
| `externalCustomerId`                                                                          | *string*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           | cust_123                                                                                      |
| `meterId`                                                                                     | *string*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           | mtr_abc                                                                                       |
| `startTime`                                                                                   | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_check_mark:                                                                            | N/A                                                                                           | 2024-01-01T00:00:00Z                                                                          |
| `windowSize`                                                                                  | [models.WindowSize](../../sdk/models/window-size.md)                                          | :heavy_minus_sign:                                                                            | N/A                                                                                           |                                                                                               |