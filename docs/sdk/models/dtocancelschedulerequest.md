# DtoCancelScheduleRequest

Request to cancel a subscription schedule (supports two modes)

## Example Usage

```typescript
import { DtoCancelScheduleRequest } from "@flexprice/sdk/sdk/models";

let value: DtoCancelScheduleRequest = {};
```

## Fields

| Field                                                                                                        | Type                                                                                                         | Required                                                                                                     | Description                                                                                                  |
| ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ |
| `scheduleId`                                                                                                 | *string*                                                                                                     | :heavy_minus_sign:                                                                                           | schedule_id is the ID of the schedule to cancel (optional if subscription_id and schedule_type are provided) |
| `scheduleType`                                                                                               | [models.SubscriptionScheduleChangeType](../../sdk/models/subscriptionschedulechangetype.md)                  | :heavy_minus_sign:                                                                                           | N/A                                                                                                          |
| `subscriptionId`                                                                                             | *string*                                                                                                     | :heavy_minus_sign:                                                                                           | subscription_id is the ID of the subscription (required if schedule_id is not provided)                      |