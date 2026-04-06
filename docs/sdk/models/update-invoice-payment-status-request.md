# UpdateInvoicePaymentStatusRequest

## Example Usage

```typescript
import { UpdateInvoicePaymentStatusRequest } from "@flexprice/sdk/sdk/models";

let value: UpdateInvoicePaymentStatusRequest = {
  id: "<id>",
  body: {
    paymentStatus: "PARTIALLY_REFUNDED",
  },
};
```

## Fields

| Field                                                                                  | Type                                                                                   | Required                                                                               | Description                                                                            |
| -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- |
| `id`                                                                                   | *string*                                                                               | :heavy_check_mark:                                                                     | Invoice ID                                                                             |
| `body`                                                                                 | [models.UpdatePaymentStatusRequest](../../sdk/models/update-payment-status-request.md) | :heavy_check_mark:                                                                     | Payment Status Update Request                                                          |