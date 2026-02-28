# DtoListSubscriptionsResponse

## Example Usage

```typescript
import { DtoListSubscriptionsResponse } from "@flexprice/sdk/sdk/models";

let value: DtoListSubscriptionsResponse = {
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

| Field                                                                             | Type                                                                              | Required                                                                          | Description                                                                       |
| --------------------------------------------------------------------------------- | --------------------------------------------------------------------------------- | --------------------------------------------------------------------------------- | --------------------------------------------------------------------------------- |
| `items`                                                                           | [models.DtoSubscriptionResponse](../../sdk/models/dto-subscription-response.md)[] | :heavy_minus_sign:                                                                | N/A                                                                               |
| `pagination`                                                                      | [models.PaginationResponse](../../sdk/models/pagination-response.md)              | :heavy_minus_sign:                                                                | N/A                                                                               |