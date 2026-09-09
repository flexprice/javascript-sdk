# ExecuteInvoiceModifyRequest

## Example Usage

```typescript
import { ExecuteInvoiceModifyRequest } from "@flexprice/sdk/sdk/models";

let value: ExecuteInvoiceModifyRequest = {
  type: "line_item",
};
```

## Fields

| Field                                                                                     | Type                                                                                      | Required                                                                                  | Description                                                                               |
| ----------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------- |
| `lineItemParams`                                                                          | [models.InvoiceModifyLineItemParams](../../sdk/models/invoice-modify-line-item-params.md) | :heavy_minus_sign:                                                                        | N/A                                                                                       |
| `type`                                                                                    | [models.InvoiceModifyType](../../sdk/models/invoice-modify-type.md)                       | :heavy_check_mark:                                                                        | N/A                                                                                       |