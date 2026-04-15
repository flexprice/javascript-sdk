# SubscriptionModifyResponse

## Example Usage

```typescript
import { SubscriptionModifyResponse } from "@flexprice/sdk/sdk/models";

let value: SubscriptionModifyResponse = {
  changedResources: {
    invoices: [
      {
        invoice: {
          subscription: {
            latestInvoice: {
              subscription: {
                plan: {},
              },
            },
            plan: {},
          },
        },
      },
    ],
  },
  subscription: {
    latestInvoice: {
      subscription: {
        plan: {},
      },
    },
    plan: {},
  },
};
```

## Fields

| Field                                                                    | Type                                                                     | Required                                                                 | Description                                                              |
| ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ |
| `changedResources`                                                       | [models.ChangedResources](../../sdk/models/changed-resources.md)         | :heavy_minus_sign:                                                       | N/A                                                                      |
| `subscription`                                                           | [models.SubscriptionResponse](../../sdk/models/subscription-response.md) | :heavy_minus_sign:                                                       | N/A                                                                      |