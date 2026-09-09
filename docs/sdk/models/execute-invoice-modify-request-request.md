# ExecuteInvoiceModifyRequestRequest

## Example Usage

```typescript
import { ExecuteInvoiceModifyRequestRequest } from "@flexprice/sdk/sdk/models";

let value: ExecuteInvoiceModifyRequestRequest = {
  id: "<id>",
  body: {
    type: "line_item",
  },
};
```

## Fields

| Field                                                                                    | Type                                                                                     | Required                                                                                 | Description                                                                              |
| ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- |
| `id`                                                                                     | *string*                                                                                 | :heavy_check_mark:                                                                       | Invoice ID                                                                               |
| `body`                                                                                   | [models.ExecuteInvoiceModifyRequest](../../sdk/models/execute-invoice-modify-request.md) | :heavy_check_mark:                                                                       | Modification request                                                                     |