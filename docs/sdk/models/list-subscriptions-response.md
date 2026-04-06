# ListSubscriptionsResponse

## Example Usage

```typescript
import { ListSubscriptionsResponse } from "@flexprice/sdk/sdk/models";

let value: ListSubscriptionsResponse = {
  items: [
    {
      latestInvoice: {
        subscription: {
          plan: {},
        },
      },
      plan: {},
    },
  ],
};
```

## Fields

| Field                                                                      | Type                                                                       | Required                                                                   | Description                                                                |
| -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- |
| `items`                                                                    | [models.SubscriptionResponse](../../sdk/models/subscription-response.md)[] | :heavy_minus_sign:                                                         | N/A                                                                        |
| `pagination`                                                               | [models.PaginationResponse](../../sdk/models/pagination-response.md)       | :heavy_minus_sign:                                                         | N/A                                                                        |