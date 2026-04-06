# ResumeSubscriptionRequestRequest

## Example Usage

```typescript
import { ResumeSubscriptionRequestRequest } from "@flexprice/sdk/sdk/models";

let value: ResumeSubscriptionRequestRequest = {
  id: "<id>",
  body: {
    resumeMode: "scheduled",
  },
};
```

## Fields

| Field                                                                               | Type                                                                                | Required                                                                            | Description                                                                         |
| ----------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------- |
| `id`                                                                                | *string*                                                                            | :heavy_check_mark:                                                                  | Subscription ID                                                                     |
| `body`                                                                              | [models.ResumeSubscriptionRequest](../../sdk/models/resume-subscription-request.md) | :heavy_check_mark:                                                                  | Resume subscription request                                                         |