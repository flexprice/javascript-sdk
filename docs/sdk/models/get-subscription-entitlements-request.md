# GetSubscriptionEntitlementsRequest

## Example Usage

```typescript
import { GetSubscriptionEntitlementsRequest } from "@flexprice/sdk/sdk/models";

let value: GetSubscriptionEntitlementsRequest = {
  id: "<id>",
};
```

## Fields

| Field                                                             | Type                                                              | Required                                                          | Description                                                       |
| ----------------------------------------------------------------- | ----------------------------------------------------------------- | ----------------------------------------------------------------- | ----------------------------------------------------------------- |
| `id`                                                              | *string*                                                          | :heavy_check_mark:                                                | Subscription ID                                                   |
| `featureIds`                                                      | *string*[]                                                        | :heavy_minus_sign:                                                | Feature IDs to filter by                                          |
| `refreshGrants`                                                   | *boolean*                                                         | :heavy_minus_sign:                                                | Evaluate entitlement grants before returning their usage (slower) |