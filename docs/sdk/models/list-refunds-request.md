# ListRefundsRequest

## Example Usage

```typescript
import { ListRefundsRequest } from "@flexprice/sdk/sdk/models";

let value: ListRefundsRequest = {};
```

## Fields

| Field                          | Type                           | Required                       | Description                    |
| ------------------------------ | ------------------------------ | ------------------------------ | ------------------------------ |
| `invoiceIds`                   | *string*[]                     | :heavy_minus_sign:             | Filter by invoice IDs          |
| `paymentIds`                   | *string*[]                     | :heavy_minus_sign:             | Filter by payment IDs          |
| `creditNoteIds`                | *string*[]                     | :heavy_minus_sign:             | Filter by credit note IDs      |
| `refundStatuses`               | *string*[]                     | :heavy_minus_sign:             | Filter by refund status        |
| `refundDestinations`           | *string*[]                     | :heavy_minus_sign:             | Filter by refund destination   |
| `gateway`                      | *string*                       | :heavy_minus_sign:             | Filter by payment gateway      |
| `onlySettled`                  | *boolean*                      | :heavy_minus_sign:             | Only refunds that have settled |
| `limit`                        | *number*                       | :heavy_minus_sign:             | Limit                          |
| `offset`                       | *number*                       | :heavy_minus_sign:             | Offset                         |