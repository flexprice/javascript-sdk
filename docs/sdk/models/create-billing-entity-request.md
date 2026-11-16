# CreateBillingEntityRequest

## Example Usage

```typescript
import { CreateBillingEntityRequest } from "@flexprice/sdk/sdk/models";

let value: CreateBillingEntityRequest = {
  invoiceNumberPrefix: "<value>",
  name: "<value>",
};
```

## Fields

| Field                                                        | Type                                                         | Required                                                     | Description                                                  |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| `billingDetails`                                             | [models.BillingDetails](../../sdk/models/billing-details.md) | :heavy_minus_sign:                                           | N/A                                                          |
| `invoiceNumberPrefix`                                        | *string*                                                     | :heavy_check_mark:                                           | N/A                                                          |
| `metadata`                                                   | Record<string, *string*>                                     | :heavy_minus_sign:                                           | N/A                                                          |
| `name`                                                       | *string*                                                     | :heavy_check_mark:                                           | N/A                                                          |