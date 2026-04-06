# CancelSubscriptionResponse

## Example Usage

```typescript
import { CancelSubscriptionResponse } from "@flexprice/sdk/sdk/models";

let value: CancelSubscriptionResponse = {
  prorationInvoice: {
    subscription: {
      latestInvoice: {
        subscription: {
          plan: {},
        },
      },
      plan: {},
    },
  },
};
```

## Fields

| Field                                                                                         | Type                                                                                          | Required                                                                                      | Description                                                                                   |
| --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| `cancellationType`                                                                            | [models.CancellationType](../../sdk/models/cancellation-type.md)                              | :heavy_minus_sign:                                                                            | N/A                                                                                           |
| `effectiveDate`                                                                               | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_minus_sign:                                                                            | N/A                                                                                           |
| `message`                                                                                     | *string*                                                                                      | :heavy_minus_sign:                                                                            | Response metadata                                                                             |
| `processedAt`                                                                                 | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_minus_sign:                                                                            | N/A                                                                                           |
| `prorationDetails`                                                                            | [models.ProrationDetail](../../sdk/models/proration-detail.md)[]                              | :heavy_minus_sign:                                                                            | N/A                                                                                           |
| `prorationInvoice`                                                                            | [models.InvoiceResponse](../../sdk/models/invoice-response.md)                                | :heavy_minus_sign:                                                                            | N/A                                                                                           |
| `reason`                                                                                      | *string*                                                                                      | :heavy_minus_sign:                                                                            | N/A                                                                                           |
| `status`                                                                                      | [models.SubscriptionStatus](../../sdk/models/subscription-status.md)                          | :heavy_minus_sign:                                                                            | N/A                                                                                           |
| `subscriptionId`                                                                              | *string*                                                                                      | :heavy_minus_sign:                                                                            | Basic cancellation info                                                                       |
| `totalCreditAmount`                                                                           | *string*                                                                                      | :heavy_minus_sign:                                                                            | N/A                                                                                           |