# GetCustomerEntitlementsByExternalIDRequest

## Example Usage

```typescript
import { GetCustomerEntitlementsByExternalIDRequest } from "@flexprice/sdk/sdk/models";

let value: GetCustomerEntitlementsByExternalIDRequest = {
  externalId: "<id>",
};
```

## Fields

| Field                                                             | Type                                                              | Required                                                          | Description                                                       |
| ----------------------------------------------------------------- | ----------------------------------------------------------------- | ----------------------------------------------------------------- | ----------------------------------------------------------------- |
| `externalId`                                                      | *string*                                                          | :heavy_check_mark:                                                | Customer External ID                                              |
| `refreshGrants`                                                   | *boolean*                                                         | :heavy_minus_sign:                                                | Evaluate entitlement grants before returning their usage (slower) |