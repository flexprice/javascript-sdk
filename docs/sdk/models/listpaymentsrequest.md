# ListPaymentsRequest

## Example Usage

```typescript
import { ListPaymentsRequest } from "@flexprice/sdk/sdk/models";

let value: ListPaymentsRequest = {};
```

## Fields

| Field                                                               | Type                                                                | Required                                                            | Description                                                         |
| ------------------------------------------------------------------- | ------------------------------------------------------------------- | ------------------------------------------------------------------- | ------------------------------------------------------------------- |
| `currency`                                                          | *string*                                                            | :heavy_minus_sign:                                                  | N/A                                                                 |
| `destinationId`                                                     | *string*                                                            | :heavy_minus_sign:                                                  | N/A                                                                 |
| `destinationType`                                                   | *string*                                                            | :heavy_minus_sign:                                                  | N/A                                                                 |
| `endTime`                                                           | *string*                                                            | :heavy_minus_sign:                                                  | N/A                                                                 |
| `expand`                                                            | *string*                                                            | :heavy_minus_sign:                                                  | N/A                                                                 |
| `gatewayPaymentId`                                                  | *string*                                                            | :heavy_minus_sign:                                                  | N/A                                                                 |
| `gatewayTrackingId`                                                 | *string*                                                            | :heavy_minus_sign:                                                  | For filtering by gateway tracking ID                                |
| `limit`                                                             | *number*                                                            | :heavy_minus_sign:                                                  | N/A                                                                 |
| `offset`                                                            | *number*                                                            | :heavy_minus_sign:                                                  | N/A                                                                 |
| `order`                                                             | [models.ListPaymentsOrder](../../sdk/models/listpaymentsorder.md)   | :heavy_minus_sign:                                                  | N/A                                                                 |
| `paymentGateway`                                                    | *string*                                                            | :heavy_minus_sign:                                                  | N/A                                                                 |
| `paymentIds`                                                        | *string*[]                                                          | :heavy_minus_sign:                                                  | N/A                                                                 |
| `paymentMethodType`                                                 | *string*                                                            | :heavy_minus_sign:                                                  | N/A                                                                 |
| `paymentStatus`                                                     | *string*                                                            | :heavy_minus_sign:                                                  | N/A                                                                 |
| `sort`                                                              | *string*                                                            | :heavy_minus_sign:                                                  | N/A                                                                 |
| `startTime`                                                         | *string*                                                            | :heavy_minus_sign:                                                  | N/A                                                                 |
| `status`                                                            | [models.ListPaymentsStatus](../../sdk/models/listpaymentsstatus.md) | :heavy_minus_sign:                                                  | N/A                                                                 |