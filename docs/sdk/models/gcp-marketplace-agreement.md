# GCPMarketplaceAgreement

## Example Usage

```typescript
import { GCPMarketplaceAgreement } from "@flexprice/sdk/sdk/models";

let value: GCPMarketplaceAgreement = {
  accountId: "<id>",
  metricName: "<value>",
  serviceName: "<value>",
  usageReportingId: "<id>",
};
```

## Fields

| Field                                                               | Type                                                                | Required                                                            | Description                                                         |
| ------------------------------------------------------------------- | ------------------------------------------------------------------- | ------------------------------------------------------------------- | ------------------------------------------------------------------- |
| `accountId`                                                         | *string*                                                            | :heavy_check_mark:                                                  | writes the customer mapping; not read in the report payload         |
| `metricName`                                                        | *string*                                                            | :heavy_check_mark:                                                  | -> services.report's metricName (always "{service_name}/usage_fee") |
| `serviceName`                                                       | *string*                                                            | :heavy_check_mark:                                                  | -> services.report URL's service_name; identifies the product       |
| `usageReportingId`                                                  | *string*                                                            | :heavy_check_mark:                                                  | -> services.report's consumerId; identifies the buyer               |