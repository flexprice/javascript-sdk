# ChangedSubscription

## Example Usage

```typescript
import { ChangedSubscription } from "@flexprice/sdk/sdk/models";

let value: ChangedSubscription = {};
```

## Fields

| Field                                                                                         | Type                                                                                          | Required                                                                                      | Description                                                                                   |
| --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| `action`                                                                                      | [models.ChangedSubscriptionAction](../../sdk/models/changed-subscription-action.md)           | :heavy_minus_sign:                                                                            | created \| updated                                                                            |
| `currentPeriodEnd`                                                                            | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_minus_sign:                                                                            | N/A                                                                                           |
| `id`                                                                                          | *string*                                                                                      | :heavy_minus_sign:                                                                            | N/A                                                                                           |
| `status`                                                                                      | [models.SubscriptionStatus](../../sdk/models/subscription-status.md)                          | :heavy_minus_sign:                                                                            | N/A                                                                                           |
| `trialEnd`                                                                                    | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_minus_sign:                                                                            | N/A                                                                                           |