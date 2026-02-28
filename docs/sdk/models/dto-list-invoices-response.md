# DtoListInvoicesResponse

## Example Usage

```typescript
import { DtoListInvoicesResponse } from "@flexprice/sdk/sdk/models";

let value: DtoListInvoicesResponse = {
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

| Field                                                                   | Type                                                                    | Required                                                                | Description                                                             |
| ----------------------------------------------------------------------- | ----------------------------------------------------------------------- | ----------------------------------------------------------------------- | ----------------------------------------------------------------------- |
| `items`                                                                 | [models.DtoInvoiceResponse](../../sdk/models/dto-invoice-response.md)[] | :heavy_minus_sign:                                                      | N/A                                                                     |
| `pagination`                                                            | [models.PaginationResponse](../../sdk/models/pagination-response.md)    | :heavy_minus_sign:                                                      | N/A                                                                     |