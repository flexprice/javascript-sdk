# ListInvoicesResponse

## Example Usage

```typescript
import { ListInvoicesResponse } from "@flexprice/sdk/sdk/models";

let value: ListInvoicesResponse = {
  items: [
    {
      subscription: {
        latestInvoice: {
          subscription: {
            plan: {},
          },
        },
        plan: {},
      },
    },
  ],
};
```

## Fields

| Field                                                                | Type                                                                 | Required                                                             | Description                                                          |
| -------------------------------------------------------------------- | -------------------------------------------------------------------- | -------------------------------------------------------------------- | -------------------------------------------------------------------- |
| `items`                                                              | [models.Invoice](../../sdk/models/invoice.md)[]                      | :heavy_minus_sign:                                                   | N/A                                                                  |
| `pagination`                                                         | [models.PaginationResponse](../../sdk/models/pagination-response.md) | :heavy_minus_sign:                                                   | N/A                                                                  |