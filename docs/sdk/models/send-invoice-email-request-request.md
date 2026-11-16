# SendInvoiceEmailRequestRequest

## Example Usage

```typescript
import { SendInvoiceEmailRequestRequest } from "@flexprice/sdk/sdk/models";

let value: SendInvoiceEmailRequestRequest = {
  id: "<id>",
};
```

## Fields

| Field                                                                            | Type                                                                             | Required                                                                         | Description                                                                      |
| -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- |
| `id`                                                                             | *string*                                                                         | :heavy_check_mark:                                                               | Invoice ID                                                                       |
| `body`                                                                           | [models.SendInvoiceEmailRequest](../../sdk/models/send-invoice-email-request.md) | :heavy_minus_sign:                                                               | Recipients overriding the customer's email                                       |