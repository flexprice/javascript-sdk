# ActivateDraftSubscriptionRequest

## Example Usage

```typescript
import { ActivateDraftSubscriptionRequest } from "@flexprice/sdk/sdk/models";

let value: ActivateDraftSubscriptionRequest = {
  startDate: new Date("2026-05-17T05:30:18.281Z"),
};
```

## Fields

| Field                                                                                         | Type                                                                                          | Required                                                                                      | Description                                                                                   |
| --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| `startDate`                                                                                   | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_check_mark:                                                                            | start_date is the new start date for the subscription when activating                         |