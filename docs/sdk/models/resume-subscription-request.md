# ResumeSubscriptionRequest

Resumes a paused subscription now. The billing anchor is kept, so the first period runs from the resume time to the next billing date.

## Example Usage

```typescript
import { ResumeSubscriptionRequest } from "@flexprice/sdk/sdk/models";

let value: ResumeSubscriptionRequest = {};
```

## Fields

| Field                                                              | Type                                                               | Required                                                           | Description                                                        |
| ------------------------------------------------------------------ | ------------------------------------------------------------------ | ------------------------------------------------------------------ | ------------------------------------------------------------------ |
| `metadata`                                                         | Record<string, *string*>                                           | :heavy_minus_sign:                                                 | Metadata merged into the pause<br/>@Example {"resumed_by": "admin"} |
| `prorationBehavior`                                                | [models.ProrationBehavior](../../sdk/models/proration-behavior.md) | :heavy_minus_sign:                                                 | N/A                                                                |