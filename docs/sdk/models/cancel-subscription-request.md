# CancelSubscriptionRequest

## Example Usage

```typescript
import { CancelSubscriptionRequest } from "@flexprice/sdk/sdk/models";

let value: CancelSubscriptionRequest = {
  cancellationType: "immediate",
};
```

## Fields

| Field                                                                                          | Type                                                                                           | Required                                                                                       | Description                                                                                    |
| ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- |
| `cancelAt`                                                                                     | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)  | :heavy_minus_sign:                                                                             | N/A                                                                                            |
| `cancelImmediatelyInovicePolicy`                                                               | [models.CancelImmediatelyInvoicePolicy](../../sdk/models/cancel-immediately-invoice-policy.md) | :heavy_minus_sign:                                                                             | N/A                                                                                            |
| `cancellationType`                                                                             | [models.CancellationType](../../sdk/models/cancellation-type.md)                               | :heavy_check_mark:                                                                             | N/A                                                                                            |
| `prorationBehavior`                                                                            | [models.ProrationBehavior](../../sdk/models/proration-behavior.md)                             | :heavy_minus_sign:                                                                             | N/A                                                                                            |
| `reason`                                                                                       | *string*                                                                                       | :heavy_minus_sign:                                                                             | Reason for cancellation (for audit and business intelligence)                                  |