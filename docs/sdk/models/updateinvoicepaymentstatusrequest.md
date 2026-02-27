# UpdateInvoicePaymentStatusRequest

## Example Usage

```typescript
import { UpdateInvoicePaymentStatusRequest } from "@flexprice/sdk/sdk/models";

let value: UpdateInvoicePaymentStatusRequest = {
  id: "<id>",
  dtoUpdatePaymentStatusRequest: {
    paymentStatus: "PARTIALLY_REFUNDED",
  },
};
```

## Fields

| Field                                                                                     | Type                                                                                      | Required                                                                                  | Description                                                                               |
| ----------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------- |
| `id`                                                                                      | *string*                                                                                  | :heavy_check_mark:                                                                        | Invoice ID                                                                                |
| `dtoUpdatePaymentStatusRequest`                                                           | [models.DtoUpdatePaymentStatusRequest](../../sdk/models/dtoupdatepaymentstatusrequest.md) | :heavy_check_mark:                                                                        | Payment Status Update Request                                                             |