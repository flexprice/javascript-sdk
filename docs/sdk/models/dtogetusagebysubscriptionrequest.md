# DtoGetUsageBySubscriptionRequest

## Example Usage

```typescript
import { DtoGetUsageBySubscriptionRequest } from "@flexprice/sdk/sdk/models";

let value: DtoGetUsageBySubscriptionRequest = {
  endTime: "2024-03-20T00:00:00Z",
  lifetimeUsage: false,
  startTime: "2024-03-13T00:00:00Z",
  subscriptionId: "123",
};
```

## Fields

| Field                | Type                 | Required             | Description          | Example              |
| -------------------- | -------------------- | -------------------- | -------------------- | -------------------- |
| `endTime`            | *string*             | :heavy_minus_sign:   | N/A                  | 2024-03-20T00:00:00Z |
| `lifetimeUsage`      | *boolean*            | :heavy_minus_sign:   | N/A                  | false                |
| `startTime`          | *string*             | :heavy_minus_sign:   | N/A                  | 2024-03-13T00:00:00Z |
| `subscriptionId`     | *string*             | :heavy_check_mark:   | N/A                  | 123                  |