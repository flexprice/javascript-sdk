# UpdateReminderDraftRequest

## Example Usage

```typescript
import { UpdateReminderDraftRequest } from "@flexprice/sdk/sdk/models";

let value: UpdateReminderDraftRequest = {
  id: "<id>",
  body: {},
};
```

## Fields

| Field                                                                       | Type                                                                        | Required                                                                    | Description                                                                 |
| --------------------------------------------------------------------------- | --------------------------------------------------------------------------- | --------------------------------------------------------------------------- | --------------------------------------------------------------------------- |
| `id`                                                                        | *string*                                                                    | :heavy_check_mark:                                                          | Invoice ID                                                                  |
| `body`                                                                      | [models.UpdateReminderRequest](../../sdk/models/update-reminder-request.md) | :heavy_check_mark:                                                          | Target status and/or mail changes                                           |