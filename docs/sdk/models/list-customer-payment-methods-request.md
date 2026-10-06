# ListCustomerPaymentMethodsRequest

## Example Usage

```typescript
import { ListCustomerPaymentMethodsRequest } from "@flexprice/sdk/sdk/models";

let value: ListCustomerPaymentMethodsRequest = {
  id: "<id>",
};
```

## Fields

| Field                           | Type                            | Required                        | Description                     |
| ------------------------------- | ------------------------------- | ------------------------------- | ------------------------------- |
| `id`                            | *string*                        | :heavy_check_mark:              | Customer ID                     |
| `providers`                     | *string*[]                      | :heavy_minus_sign:              | Limit to these payment gateways |