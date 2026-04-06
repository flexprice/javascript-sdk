# GetUsageBySubscriptionRequest

## Example Usage

```typescript
import { GetUsageBySubscriptionRequest } from "@flexprice/sdk/sdk/models";

let value: GetUsageBySubscriptionRequest = {
  endTime: new Date("2024-03-20T00:00:00Z"),
  lifetimeUsage: false,
  startTime: new Date("2024-03-13T00:00:00Z"),
  subscriptionId: "123",
};
```

## Fields

| Field                                                                                         | Type                                                                                          | Required                                                                                      | Description                                                                                   | Example                                                                                       |
| --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| `endTime`                                                                                     | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_minus_sign:                                                                            | N/A                                                                                           | 2024-03-20T00:00:00Z                                                                          |
| `lifetimeUsage`                                                                               | *boolean*                                                                                     | :heavy_minus_sign:                                                                            | N/A                                                                                           | false                                                                                         |
| `startTime`                                                                                   | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_minus_sign:                                                                            | N/A                                                                                           | 2024-03-13T00:00:00Z                                                                          |
| `subscriptionId`                                                                              | *string*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           | 123                                                                                           |