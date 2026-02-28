# ResumeSubscriptionRequest

## Example Usage

```typescript
import { ResumeSubscriptionRequest } from "@flexprice/sdk/sdk/models";

let value: ResumeSubscriptionRequest = {
  id: "<id>",
  body: {
    resumeMode: "immediate",
  },
};
```

## Fields

| Field                                                                                      | Type                                                                                       | Required                                                                                   | Description                                                                                |
| ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ |
| `id`                                                                                       | *string*                                                                                   | :heavy_check_mark:                                                                         | Subscription ID                                                                            |
| `body`                                                                                     | [models.DtoResumeSubscriptionRequest](../../sdk/models/dto-resume-subscription-request.md) | :heavy_check_mark:                                                                         | Resume subscription request                                                                |