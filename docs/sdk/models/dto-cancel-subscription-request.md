# DtoCancelSubscriptionRequest

## Example Usage

```typescript
import { DtoCancelSubscriptionRequest } from "@flexprice/sdk/sdk/models";

let value: DtoCancelSubscriptionRequest = {
  cancellationType: "immediate",
};
```

## Fields

| Field                                                                                          | Type                                                                                           | Required                                                                                       | Description                                                                                    |
| ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- |
| `cancelImmediatelyInovicePolicy`                                                               | [models.CancelImmediatelyInvoicePolicy](../../sdk/models/cancel-immediately-invoice-policy.md) | :heavy_minus_sign:                                                                             | N/A                                                                                            |
| `cancellationType`                                                                             | [models.CancellationType](../../sdk/models/cancellation-type.md)                               | :heavy_check_mark:                                                                             | N/A                                                                                            |
| `prorationBehavior`                                                                            | [models.ProrationBehavior](../../sdk/models/proration-behavior.md)                             | :heavy_minus_sign:                                                                             | N/A                                                                                            |
| `reason`                                                                                       | *string*                                                                                       | :heavy_minus_sign:                                                                             | Reason for cancellation (for audit and business intelligence)                                  |