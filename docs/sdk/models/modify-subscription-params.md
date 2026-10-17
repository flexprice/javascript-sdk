# ModifySubscriptionParams

## Example Usage

```typescript
import { ModifySubscriptionParams } from "@flexprice/sdk/sdk/models";

let value: ModifySubscriptionParams = {};
```

## Fields

| Field                                                                                         | Type                                                                                          | Required                                                                                      | Description                                                                                   |
| --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| `lineItemModifications`                                                                       | [models.ModifySubscriptionLineItem](../../sdk/models/modify-subscription-line-item.md)[]      | :heavy_minus_sign:                                                                            | N/A                                                                                           |
| `modifyType`                                                                                  | [models.ModifySubscriptionType](../../sdk/models/modify-subscription-type.md)                 | :heavy_minus_sign:                                                                            | N/A                                                                                           |
| `subscriptionId`                                                                              | *string*                                                                                      | :heavy_minus_sign:                                                                            | N/A                                                                                           |
| `trialEndAt`                                                                                  | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_minus_sign:                                                                            | TrialEndAt is where a trial_end checkout starts the first paid period.                        |