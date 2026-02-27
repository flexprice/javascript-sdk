# DtoUpdateSubscriptionRequest

## Example Usage

```typescript
import { DtoUpdateSubscriptionRequest } from "@flexprice/sdk/sdk/models";

let value: DtoUpdateSubscriptionRequest = {};
```

## Fields

| Field                                                                                                   | Type                                                                                                    | Required                                                                                                | Description                                                                                             |
| ------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------- |
| `cancelAt`                                                                                              | *string*                                                                                                | :heavy_minus_sign:                                                                                      | N/A                                                                                                     |
| `cancelAtPeriodEnd`                                                                                     | *boolean*                                                                                               | :heavy_minus_sign:                                                                                      | N/A                                                                                                     |
| `parentSubscriptionId`                                                                                  | *string*                                                                                                | :heavy_minus_sign:                                                                                      | ParentSubscriptionID sets or clears the parent subscription. Omit to leave unchanged; send "" to clear. |
| `status`                                                                                                | [models.SubscriptionStatus](../../sdk/models/subscriptionstatus.md)                                     | :heavy_minus_sign:                                                                                      | N/A                                                                                                     |