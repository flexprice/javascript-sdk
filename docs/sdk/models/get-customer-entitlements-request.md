# GetCustomerEntitlementsRequest

## Example Usage

```typescript
import { GetCustomerEntitlementsRequest } from "@flexprice/sdk/sdk/models";

let value: GetCustomerEntitlementsRequest = {
  id: "<id>",
};
```

## Fields

| Field                                                             | Type                                                              | Required                                                          | Description                                                       |
| ----------------------------------------------------------------- | ----------------------------------------------------------------- | ----------------------------------------------------------------- | ----------------------------------------------------------------- |
| `id`                                                              | *string*                                                          | :heavy_check_mark:                                                | Customer ID                                                       |
| `refreshGrants`                                                   | *boolean*                                                         | :heavy_minus_sign:                                                | Evaluate entitlement grants before returning their usage (slower) |