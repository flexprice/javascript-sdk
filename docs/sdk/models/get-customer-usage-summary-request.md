# GetCustomerUsageSummaryRequest

## Example Usage

```typescript
import { GetCustomerUsageSummaryRequest } from "@flexprice/sdk/sdk/models";

let value: GetCustomerUsageSummaryRequest = {};
```

## Fields

| Field                                                                                           | Type                                                                                            | Required                                                                                        | Description                                                                                     |
| ----------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------- |
| `customerId`                                                                                    | *string*                                                                                        | :heavy_minus_sign:                                                                              | N/A                                                                                             |
| `customerLookupKey`                                                                             | *string*                                                                                        | :heavy_minus_sign:                                                                              | N/A                                                                                             |
| `featureIds`                                                                                    | *string*[]                                                                                      | :heavy_minus_sign:                                                                              | N/A                                                                                             |
| `featureLookupKeys`                                                                             | *string*[]                                                                                      | :heavy_minus_sign:                                                                              | N/A                                                                                             |
| `refreshGrants`                                                                                 | *boolean*                                                                                       | :heavy_minus_sign:                                                                              | RefreshGrants evaluates entitlement grants before returning their usage, so the read is slower. |
| `subscriptionIds`                                                                               | *string*[]                                                                                      | :heavy_minus_sign:                                                                              | N/A                                                                                             |