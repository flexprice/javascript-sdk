# TriggerScheduledTaskRunRequest

## Example Usage

```typescript
import { TriggerScheduledTaskRunRequest } from "@flexprice/sdk/sdk/models";

let value: TriggerScheduledTaskRunRequest = {
  id: "<id>",
};
```

## Fields

| Field                                                                                 | Type                                                                                  | Required                                                                              | Description                                                                           |
| ------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------- |
| `id`                                                                                  | *string*                                                                              | :heavy_check_mark:                                                                    | Scheduled Task ID                                                                     |
| `body`                                                                                | [models.DtoTriggerForceRunRequest](../../sdk/models/dto-trigger-force-run-request.md) | :heavy_minus_sign:                                                                    | Optional start and end time for custom range                                          |