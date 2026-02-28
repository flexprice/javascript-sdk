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

| Field                                                                                         | Type                                                                                          | Required                                                                                      | Description                                                                                   |
| --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| `id`                                                                                          | *string*                                                                                      | :heavy_check_mark:                                                                            | Invoice ID                                                                                    |
| `body`                                                                                        | [models.DtoUpdatePaymentStatusRequest](../../sdk/models/dto-update-payment-status-request.md) | :heavy_check_mark:                                                                            | Payment Status Update Request                                                                 |