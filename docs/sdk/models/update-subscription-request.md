# UpdateSubscriptionRequest

## Example Usage

```typescript
import { UpdateSubscriptionRequest } from "@flexprice/sdk/sdk/models";

let value: UpdateSubscriptionRequest = {};
```

## Fields

| Field                                                                                                   | Type                                                                                                    | Required                                                                                                | Description                                                                                             |
| ------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------- |
| `cancelAt`                                                                                              | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)           | :heavy_minus_sign:                                                                                      | N/A                                                                                                     |
| `cancelAtPeriodEnd`                                                                                     | *boolean*                                                                                               | :heavy_minus_sign:                                                                                      | N/A                                                                                                     |
| `parentSubscriptionId`                                                                                  | *string*                                                                                                | :heavy_minus_sign:                                                                                      | ParentSubscriptionID sets or clears the parent subscription. Omit to leave unchanged; send "" to clear. |
| `status`                                                                                                | [models.SubscriptionStatus](../../sdk/models/subscription-status.md)                                    | :heavy_minus_sign:                                                                                      | N/A                                                                                                     |