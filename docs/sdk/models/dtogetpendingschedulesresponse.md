# DtoGetPendingSchedulesResponse

List of pending schedules for a subscription

## Example Usage

```typescript
import { DtoGetPendingSchedulesResponse } from "@flexprice/sdk/sdk/models";

let value: DtoGetPendingSchedulesResponse = {};
```

## Fields

| Field                                                                                           | Type                                                                                            | Required                                                                                        | Description                                                                                     |
| ----------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------- |
| `count`                                                                                         | *number*                                                                                        | :heavy_minus_sign:                                                                              | count is the number of pending schedules                                                        |
| `schedules`                                                                                     | [models.DtoSubscriptionScheduleResponse](../../sdk/models/dtosubscriptionscheduleresponse.md)[] | :heavy_minus_sign:                                                                              | schedules is the list of pending schedules                                                      |