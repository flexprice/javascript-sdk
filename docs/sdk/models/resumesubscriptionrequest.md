# ResumeSubscriptionRequest

## Example Usage

```typescript
import { ResumeSubscriptionRequest } from "@flexprice/sdk/sdk/models";

let value: ResumeSubscriptionRequest = {
  id: "<id>",
  dtoResumeSubscriptionRequest: {
    resumeMode: "immediate",
  },
};
```

## Fields

| Field                                                                                   | Type                                                                                    | Required                                                                                | Description                                                                             |
| --------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------- |
| `id`                                                                                    | *string*                                                                                | :heavy_check_mark:                                                                      | Subscription ID                                                                         |
| `dtoResumeSubscriptionRequest`                                                          | [models.DtoResumeSubscriptionRequest](../../sdk/models/dtoresumesubscriptionrequest.md) | :heavy_check_mark:                                                                      | Resume subscription request                                                             |