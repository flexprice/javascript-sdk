# UpdateInvoiceRequest

## Example Usage

```typescript
import { UpdateInvoiceRequest } from "@flexprice/sdk/sdk/models";

let value: UpdateInvoiceRequest = {
  id: "<id>",
  body: {},
};
```

## Fields

| Field                                                                            | Type                                                                             | Required                                                                         | Description                                                                      |
| -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- |
| `id`                                                                             | *string*                                                                         | :heavy_check_mark:                                                               | Invoice ID                                                                       |
| `body`                                                                           | [models.DtoUpdateInvoiceRequest](../../sdk/models/dto-update-invoice-request.md) | :heavy_check_mark:                                                               | Invoice Update Request                                                           |