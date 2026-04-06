# UsageAnalyticItem

## Example Usage

```typescript
import { UsageAnalyticItem } from "@flexprice/sdk/sdk/models";

let value: UsageAnalyticItem = {
  price: {
    addon: {
      prices: [
        {
          addon: {},
          meter: {
            createdAt: new Date("2024-03-20T15:04:05Z"),
            eventName: "api_request",
            id: "550e8400-e29b-41d4-a716-446655440000",
            name: "API Usage Meter",
            status: "published",
            tenantId: "tenant123",
            updatedAt: new Date("2024-03-20T15:04:05Z"),
          },
          plan: {},
        },
      ],
    },
    meter: {
      createdAt: new Date("2024-03-20T15:04:05Z"),
      eventName: "api_request",
      id: "550e8400-e29b-41d4-a716-446655440000",
      name: "API Usage Meter",
      status: "published",
      tenantId: "tenant123",
      updatedAt: new Date("2024-03-20T15:04:05Z"),
    },
    plan: {},
  },
};
```

## Fields

| Field                                                                                              | Type                                                                                               | Required                                                                                           | Description                                                                                        |
| -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- |
| `addOnId`                                                                                          | *string*                                                                                           | :heavy_minus_sign:                                                                                 | N/A                                                                                                |
| `addon`                                                                                            | [models.Addon2](../../sdk/models/addon2.md)                                                        | :heavy_minus_sign:                                                                                 | N/A                                                                                                |
| `aggregationType`                                                                                  | [models.AggregationType](../../sdk/models/aggregation-type.md)                                     | :heavy_minus_sign:                                                                                 | N/A                                                                                                |
| `commitmentInfo`                                                                                   | [models.CommitmentInfo](../../sdk/models/commitment-info.md)                                       | :heavy_minus_sign:                                                                                 | N/A                                                                                                |
| `currency`                                                                                         | *string*                                                                                           | :heavy_minus_sign:                                                                                 | N/A                                                                                                |
| `eventCount`                                                                                       | *number*                                                                                           | :heavy_minus_sign:                                                                                 | Number of events that contributed to this aggregation                                              |
| `eventName`                                                                                        | *string*                                                                                           | :heavy_minus_sign:                                                                                 | N/A                                                                                                |
| `feature`                                                                                          | [models.Feature2](../../sdk/models/feature2.md)                                                    | :heavy_minus_sign:                                                                                 | N/A                                                                                                |
| `featureId`                                                                                        | *string*                                                                                           | :heavy_minus_sign:                                                                                 | N/A                                                                                                |
| `group`                                                                                            | [models.GroupGroup](../../sdk/models/group-group.md)                                               | :heavy_minus_sign:                                                                                 | N/A                                                                                                |
| `meter`                                                                                            | [models.MeterMeter](../../sdk/models/meter-meter.md)                                               | :heavy_minus_sign:                                                                                 | N/A                                                                                                |
| `meterId`                                                                                          | *string*                                                                                           | :heavy_minus_sign:                                                                                 | Meter ID                                                                                           |
| `name`                                                                                             | *string*                                                                                           | :heavy_minus_sign:                                                                                 | N/A                                                                                                |
| `plan`                                                                                             | [models.Plan2](../../sdk/models/plan2.md)                                                          | :heavy_minus_sign:                                                                                 | N/A                                                                                                |
| `planId`                                                                                           | *string*                                                                                           | :heavy_minus_sign:                                                                                 | N/A                                                                                                |
| `points`                                                                                           | [models.UsageAnalyticPoint](../../sdk/models/usage-analytic-point.md)[]                            | :heavy_minus_sign:                                                                                 | N/A                                                                                                |
| `price`                                                                                            | [models.Price](../../sdk/models/price.md)                                                          | :heavy_minus_sign:                                                                                 | N/A                                                                                                |
| `priceId`                                                                                          | *string*                                                                                           | :heavy_minus_sign:                                                                                 | Price ID used for this usage                                                                       |
| `properties`                                                                                       | Record<string, *string*>                                                                           | :heavy_minus_sign:                                                                                 | Stores property values for flexible grouping (e.g., org_id -> "org123")                            |
| `reportingUnit`                                                                                    | [models.ReportingUnit](../../sdk/models/reporting-unit.md)                                         | :heavy_minus_sign:                                                                                 | N/A                                                                                                |
| `source`                                                                                           | *string*                                                                                           | :heavy_minus_sign:                                                                                 | N/A                                                                                                |
| `sources`                                                                                          | *string*[]                                                                                         | :heavy_minus_sign:                                                                                 | List of sources when not grouping by source                                                        |
| `subLineItemId`                                                                                    | *string*                                                                                           | :heavy_minus_sign:                                                                                 | Subscription line item ID                                                                          |
| `subscriptionId`                                                                                   | *string*                                                                                           | :heavy_minus_sign:                                                                                 | Subscription ID                                                                                    |
| `subscriptionLineItem`                                                                             | [models.SubscriptionSubscriptionLineItem](../../sdk/models/subscription-subscription-line-item.md) | :heavy_minus_sign:                                                                                 | N/A                                                                                                |
| `totalCost`                                                                                        | *string*                                                                                           | :heavy_minus_sign:                                                                                 | N/A                                                                                                |
| `totalUsage`                                                                                       | *string*                                                                                           | :heavy_minus_sign:                                                                                 | N/A                                                                                                |
| `totalUsageDisplay`                                                                                | *string*                                                                                           | :heavy_minus_sign:                                                                                 | Empty string when feature has no reporting unit; otherwise the value in reporting units            |
| `unit`                                                                                             | *string*                                                                                           | :heavy_minus_sign:                                                                                 | N/A                                                                                                |
| `unitPlural`                                                                                       | *string*                                                                                           | :heavy_minus_sign:                                                                                 | N/A                                                                                                |
| `windowSize`                                                                                       | [models.WindowSize](../../sdk/models/window-size.md)                                               | :heavy_minus_sign:                                                                                 | N/A                                                                                                |