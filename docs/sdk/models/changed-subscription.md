# ChangedSubscription

## Example Usage

```typescript
import { ChangedSubscription } from "@flexprice/sdk/sdk/models";

let value: ChangedSubscription = {};
```

## Fields

| Field                                                                | Type                                                                 | Required                                                             | Description                                                          |
| -------------------------------------------------------------------- | -------------------------------------------------------------------- | -------------------------------------------------------------------- | -------------------------------------------------------------------- |
| `action`                                                             | *string*                                                             | :heavy_minus_sign:                                                   | "created" \| "updated"                                               |
| `id`                                                                 | *string*                                                             | :heavy_minus_sign:                                                   | N/A                                                                  |
| `status`                                                             | [models.SubscriptionStatus](../../sdk/models/subscription-status.md) | :heavy_minus_sign:                                                   | N/A                                                                  |