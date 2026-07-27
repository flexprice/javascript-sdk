# AzureMarketplaceAgreement

## Example Usage

```typescript
import { AzureMarketplaceAgreement } from "@flexprice/sdk/sdk/models";

let value: AzureMarketplaceAgreement = {
  beneficiaryAccountId: "<id>",
  dimension: "<value>",
  planId: "<id>",
  resourceId: "<id>",
};
```

## Fields

| Field                                                                                      | Type                                                                                       | Required                                                                                   | Description                                                                                |
| ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ |
| `beneficiaryAccountId`                                                                     | *string*                                                                                   | :heavy_check_mark:                                                                         | writes the customer mapping; not read in the report payload                                |
| `dimension`                                                                                | *string*                                                                                   | :heavy_check_mark:                                                                         | -> batchUsageEvent's dimension (always "usage_fee" in the cents model)                     |
| `planId`                                                                                   | *string*                                                                                   | :heavy_check_mark:                                                                         | -> batchUsageEvent's planId; Azure's plan id, distinct from the request's top-level PlanID |
| `resourceId`                                                                               | *string*                                                                                   | :heavy_check_mark:                                                                         | -> batchUsageEvent's resourceId; the Azure SaaS subscription id                            |