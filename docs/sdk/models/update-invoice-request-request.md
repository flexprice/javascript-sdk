# UpdateInvoiceRequestRequest

## Example Usage

```typescript
import { UpdateInvoiceRequestRequest } from "@flexprice/sdk/sdk/models";

let value: UpdateInvoiceRequestRequest = {
  id: "<id>",
  body: {},
};
```

## Fields

| Field                                                                     | Type                                                                      | Required                                                                  | Description                                                               |
| ------------------------------------------------------------------------- | ------------------------------------------------------------------------- | ------------------------------------------------------------------------- | ------------------------------------------------------------------------- |
| `id`                                                                      | *string*                                                                  | :heavy_check_mark:                                                        | Invoice ID                                                                |
| `body`                                                                    | [models.UpdateInvoiceRequest](../../sdk/models/update-invoice-request.md) | :heavy_check_mark:                                                        | Invoice Update Request                                                    |