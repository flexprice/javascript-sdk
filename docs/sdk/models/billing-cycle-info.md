# BillingCycleInfo

## Example Usage

```typescript
import { BillingCycleInfo } from "@flexprice/sdk/sdk/models";

let value: BillingCycleInfo = {};
```

## Fields

| Field                                                                                         | Type                                                                                          | Required                                                                                      | Description                                                                                   |
| --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| `billingAnchor`                                                                               | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_minus_sign:                                                                            | billing_anchor is the new billing anchor                                                      |
| `billingCadence`                                                                              | [models.BillingCadence](../../sdk/models/billing-cadence.md)                                  | :heavy_minus_sign:                                                                            | N/A                                                                                           |
| `billingPeriod`                                                                               | [models.BillingPeriod](../../sdk/models/billing-period.md)                                    | :heavy_minus_sign:                                                                            | N/A                                                                                           |
| `billingPeriodCount`                                                                          | *number*                                                                                      | :heavy_minus_sign:                                                                            | billing_period_count is the billing period count                                              |
| `periodEnd`                                                                                   | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_minus_sign:                                                                            | period_end is the end of the new billing period                                               |
| `periodStart`                                                                                 | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_minus_sign:                                                                            | period_start is the start of the new billing period                                           |