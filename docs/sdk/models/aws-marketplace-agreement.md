# AWSMarketplaceAgreement

## Example Usage

```typescript
import { AWSMarketplaceAgreement } from "@flexprice/sdk/sdk/models";

let value: AWSMarketplaceAgreement = {
  customerAwsAccountId: "<id>",
  dimension: "<value>",
  licenseArn: "<value>",
  productCode: "<value>",
};
```

## Fields

| Field                                                                  | Type                                                                   | Required                                                               | Description                                                            |
| ---------------------------------------------------------------------- | ---------------------------------------------------------------------- | ---------------------------------------------------------------------- | ---------------------------------------------------------------------- |
| `concurrentAgreements`                                                 | *boolean*                                                              | :heavy_minus_sign:                                                     | if true, ProductCode is omitted when reporting                         |
| `customerAwsAccountId`                                                 | *string*                                                               | :heavy_check_mark:                                                     | -> BatchMeterUsage's CustomerAWSAccountId                              |
| `dimension`                                                            | *string*                                                               | :heavy_check_mark:                                                     | -> BatchMeterUsage's Dimension (always "usage_fee" in the cents model) |
| `licenseArn`                                                           | *string*                                                               | :heavy_check_mark:                                                     | -> BatchMeterUsage's LicenseArn; identifies the buyer's agreement      |
| `productCode`                                                          | *string*                                                               | :heavy_check_mark:                                                     | -> BatchMeterUsage's ProductCode (omitted when ConcurrentAgreements)   |