# CancelScheduleResponse

Confirmation of schedule cancellation

## Example Usage

```typescript
import { CancelScheduleResponse } from "@flexprice/sdk/sdk/models";

let value: CancelScheduleResponse = {};
```

## Fields

| Field                                                        | Type                                                         | Required                                                     | Description                                                  |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| `message`                                                    | *string*                                                     | :heavy_minus_sign:                                           | message is a confirmation message                            |
| `status`                                                     | [models.ScheduleStatus](../../sdk/models/schedule-status.md) | :heavy_minus_sign:                                           | N/A                                                          |