# DtoSubscriptionChangePreviewResponse

Response showing the financial impact of a subscription plan change

## Example Usage

```typescript
import { DtoSubscriptionChangePreviewResponse } from "@flexprice/sdk/sdk/models";

let value: DtoSubscriptionChangePreviewResponse = {};
```

## Fields

| Field                                                                       | Type                                                                        | Required                                                                    | Description                                                                 |
| --------------------------------------------------------------------------- | --------------------------------------------------------------------------- | --------------------------------------------------------------------------- | --------------------------------------------------------------------------- |
| `changeType`                                                                | [models.SubscriptionChangeType](../../sdk/models/subscriptionchangetype.md) | :heavy_minus_sign:                                                          | N/A                                                                         |
| `currentPlan`                                                               | [models.DtoPlanSummary](../../sdk/models/dtoplansummary.md)                 | :heavy_minus_sign:                                                          | N/A                                                                         |
| `effectiveDate`                                                             | *string*                                                                    | :heavy_minus_sign:                                                          | effective_date is when the change would take effect                         |
| `metadata`                                                                  | Record<string, *string*>                                                    | :heavy_minus_sign:                                                          | metadata from the request                                                   |
| `newBillingCycle`                                                           | [models.DtoBillingCycleInfo](../../sdk/models/dtobillingcycleinfo.md)       | :heavy_minus_sign:                                                          | N/A                                                                         |
| `nextInvoicePreview`                                                        | [models.DtoInvoicePreview](../../sdk/models/dtoinvoicepreview.md)           | :heavy_minus_sign:                                                          | N/A                                                                         |
| `prorationDetails`                                                          | [models.DtoProrationDetails](../../sdk/models/dtoprorationdetails.md)       | :heavy_minus_sign:                                                          | N/A                                                                         |
| `subscriptionId`                                                            | *string*                                                                    | :heavy_minus_sign:                                                          | subscription_id is the ID of the subscription being changed                 |
| `targetPlan`                                                                | [models.DtoPlanSummary](../../sdk/models/dtoplansummary.md)                 | :heavy_minus_sign:                                                          | N/A                                                                         |
| `warnings`                                                                  | *string*[]                                                                  | :heavy_minus_sign:                                                          | warnings contains any warnings about the change                             |