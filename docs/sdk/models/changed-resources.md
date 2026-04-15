# ChangedResources

## Example Usage

```typescript
import { ChangedResources } from "@flexprice/sdk/sdk/models";

let value: ChangedResources = {
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
};
```

## Fields

| Field                                                                    | Type                                                                     | Required                                                                 | Description                                                              |
| ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ |
| `invoices`                                                               | [models.ChangedInvoice](../../sdk/models/changed-invoice.md)[]           | :heavy_minus_sign:                                                       | N/A                                                                      |
| `lineItems`                                                              | [models.ChangedLineItem](../../sdk/models/changed-line-item.md)[]        | :heavy_minus_sign:                                                       | N/A                                                                      |
| `subscriptions`                                                          | [models.ChangedSubscription](../../sdk/models/changed-subscription.md)[] | :heavy_minus_sign:                                                       | N/A                                                                      |