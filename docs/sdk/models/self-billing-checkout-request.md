# SelfBillingCheckoutRequest

## Example Usage

```typescript
import { SelfBillingCheckoutRequest } from "@flexprice/sdk/sdk/models";

let value: SelfBillingCheckoutRequest = {
  addressCity: "<value>",
  addressCountry: "<value>",
  addressLine1: "2072 Trantow Glens",
  addressPostalCode: "<value>",
  email: "Desmond.Tremblay0@hotmail.com",
  name: "<value>",
};
```

## Fields

| Field               | Type                | Required            | Description         |
| ------------------- | ------------------- | ------------------- | ------------------- |
| `addressCity`       | *string*            | :heavy_check_mark:  | N/A                 |
| `addressCountry`    | *string*            | :heavy_check_mark:  | N/A                 |
| `addressLine1`      | *string*            | :heavy_check_mark:  | N/A                 |
| `addressLine2`      | *string*            | :heavy_minus_sign:  | N/A                 |
| `addressPostalCode` | *string*            | :heavy_check_mark:  | N/A                 |
| `addressState`      | *string*            | :heavy_minus_sign:  | N/A                 |
| `email`             | *string*            | :heavy_check_mark:  | N/A                 |
| `name`              | *string*            | :heavy_check_mark:  | N/A                 |
| `taxId`             | *string*            | :heavy_minus_sign:  | N/A                 |