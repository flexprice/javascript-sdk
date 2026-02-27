# UpdateInvoiceRequest

## Example Usage

```typescript
import { UpdateInvoiceRequest } from "@flexprice/sdk/sdk/models";

let value: UpdateInvoiceRequest = {
  id: "<id>",
  dtoUpdateInvoiceRequest: {},
};
```

## Fields

| Field                                                                         | Type                                                                          | Required                                                                      | Description                                                                   |
| ----------------------------------------------------------------------------- | ----------------------------------------------------------------------------- | ----------------------------------------------------------------------------- | ----------------------------------------------------------------------------- |
| `id`                                                                          | *string*                                                                      | :heavy_check_mark:                                                            | Invoice ID                                                                    |
| `dtoUpdateInvoiceRequest`                                                     | [models.DtoUpdateInvoiceRequest](../../sdk/models/dtoupdateinvoicerequest.md) | :heavy_check_mark:                                                            | Invoice Update Request                                                        |