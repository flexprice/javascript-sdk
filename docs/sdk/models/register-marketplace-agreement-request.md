# RegisterMarketplaceAgreementRequest

## Example Usage

```typescript
import { RegisterMarketplaceAgreementRequest } from "@flexprice/sdk/sdk/models";

let value: RegisterMarketplaceAgreementRequest = {
  customerId: "<id>",
  planId: "<id>",
  provider: "aws_marketplace",
  subscriptionId: "<id>",
};
```

## Fields

| Field                                                                               | Type                                                                                | Required                                                                            | Description                                                                         |
| ----------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------- |
| `aws`                                                                               | [models.AWSMarketplaceAgreement](../../sdk/models/aws-marketplace-agreement.md)     | :heavy_minus_sign:                                                                  | N/A                                                                                 |
| `azure`                                                                             | [models.AzureMarketplaceAgreement](../../sdk/models/azure-marketplace-agreement.md) | :heavy_minus_sign:                                                                  | N/A                                                                                 |
| `customerId`                                                                        | *string*                                                                            | :heavy_check_mark:                                                                  | N/A                                                                                 |
| `gcp`                                                                               | [models.GCPMarketplaceAgreement](../../sdk/models/gcp-marketplace-agreement.md)     | :heavy_minus_sign:                                                                  | N/A                                                                                 |
| `planId`                                                                            | *string*                                                                            | :heavy_check_mark:                                                                  | N/A                                                                                 |
| `provider`                                                                          | [models.SecretProvider](../../sdk/models/secret-provider.md)                        | :heavy_check_mark:                                                                  | N/A                                                                                 |
| `subscriptionId`                                                                    | *string*                                                                            | :heavy_check_mark:                                                                  | N/A                                                                                 |