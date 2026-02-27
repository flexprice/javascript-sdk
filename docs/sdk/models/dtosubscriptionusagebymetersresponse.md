# DtoSubscriptionUsageByMetersResponse

## Example Usage

```typescript
import { DtoSubscriptionUsageByMetersResponse } from "@flexprice/sdk/sdk/models";

let value: DtoSubscriptionUsageByMetersResponse = {};
```

## Fields

| Field                                               | Type                                                | Required                                            | Description                                         |
| --------------------------------------------------- | --------------------------------------------------- | --------------------------------------------------- | --------------------------------------------------- |
| `amount`                                            | *number*                                            | :heavy_minus_sign:                                  | N/A                                                 |
| `currency`                                          | *string*                                            | :heavy_minus_sign:                                  | N/A                                                 |
| `displayAmount`                                     | *string*                                            | :heavy_minus_sign:                                  | N/A                                                 |
| `filterValues`                                      | Record<string, *string*[]>                          | :heavy_minus_sign:                                  | N/A                                                 |
| `isOverage`                                         | *boolean*                                           | :heavy_minus_sign:                                  | Whether this charge is at overage rate              |
| `meterDisplayName`                                  | *string*                                            | :heavy_minus_sign:                                  | N/A                                                 |
| `meterId`                                           | *string*                                            | :heavy_minus_sign:                                  | N/A                                                 |
| `overageFactor`                                     | *number*                                            | :heavy_minus_sign:                                  | Factor applied to this charge if in overage         |
| `price`                                             | [models.PricePrice](../../sdk/models/priceprice.md) | :heavy_minus_sign:                                  | N/A                                                 |
| `quantity`                                          | *number*                                            | :heavy_minus_sign:                                  | N/A                                                 |