# DtoProrationDetails

## Example Usage

```typescript
import { DtoProrationDetails } from "@flexprice/sdk/sdk/models";

let value: DtoProrationDetails = {};
```

## Fields

| Field                                                                | Type                                                                 | Required                                                             | Description                                                          |
| -------------------------------------------------------------------- | -------------------------------------------------------------------- | -------------------------------------------------------------------- | -------------------------------------------------------------------- |
| `chargeAmount`                                                       | *string*                                                             | :heavy_minus_sign:                                                   | charge_amount is the charge amount for the new subscription          |
| `chargeDescription`                                                  | *string*                                                             | :heavy_minus_sign:                                                   | charge_description describes what the charge is for                  |
| `creditAmount`                                                       | *string*                                                             | :heavy_minus_sign:                                                   | credit_amount is the credit amount from the old subscription         |
| `creditDescription`                                                  | *string*                                                             | :heavy_minus_sign:                                                   | credit_description describes what the credit is for                  |
| `currency`                                                           | *string*                                                             | :heavy_minus_sign:                                                   | currency is the currency for all amounts                             |
| `currentPeriodEnd`                                                   | *string*                                                             | :heavy_minus_sign:                                                   | current_period_end is the end of the current billing period          |
| `currentPeriodStart`                                                 | *string*                                                             | :heavy_minus_sign:                                                   | current_period_start is the start of the current billing period      |
| `daysRemaining`                                                      | *number*                                                             | :heavy_minus_sign:                                                   | days_remaining is the number of days remaining in the current period |
| `daysUsed`                                                           | *number*                                                             | :heavy_minus_sign:                                                   | days_used is the number of days used in the current period           |
| `netAmount`                                                          | *string*                                                             | :heavy_minus_sign:                                                   | net_amount is the net amount (charge - credit)                       |
| `prorationDate`                                                      | *string*                                                             | :heavy_minus_sign:                                                   | proration_date is the date used for proration calculations           |