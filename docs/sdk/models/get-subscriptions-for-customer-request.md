# GetSubscriptionsForCustomerRequest

## Example Usage

```typescript
import { GetSubscriptionsForCustomerRequest } from "@flexprice/sdk/sdk/models";

let value: GetSubscriptionsForCustomerRequest = {
  externalId: "<id>",
};
```

## Fields

| Field                                                                                                                   | Type                                                                                                                    | Required                                                                                                                | Description                                                                                                             |
| ----------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------- |
| `externalId`                                                                                                            | *string*                                                                                                                | :heavy_check_mark:                                                                                                      | Customer External ID                                                                                                    |
| `expand`                                                                                                                | *string*                                                                                                                | :heavy_minus_sign:                                                                                                      | Comma-separated fields to expand: subscription_line_items, subscription_line_items.meters, entitlements, plan, customer |