# ListCouponAssociationsRequest

## Example Usage

```typescript
import { ListCouponAssociationsRequest } from "@flexprice/sdk/sdk/models";

let value: ListCouponAssociationsRequest = {};
```

## Fields

| Field                                                                                   | Type                                                                                    | Required                                                                                | Description                                                                             |
| --------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------- |
| `subscriptionIds`                                                                       | *string*[]                                                                              | :heavy_minus_sign:                                                                      | Filter by subscription IDs (max 100)                                                    |
| `couponIds`                                                                             | *string*[]                                                                              | :heavy_minus_sign:                                                                      | Filter by coupon IDs (max 100)                                                          |
| `activeOnly`                                                                            | *boolean*                                                                               | :heavy_minus_sign:                                                                      | Return only currently active associations                                               |
| `expand`                                                                                | *string*                                                                                | :heavy_minus_sign:                                                                      | Comma-separated fields: coupon, subscription_line_items, subscription_line_items.prices |
| `limit`                                                                                 | *number*                                                                                | :heavy_minus_sign:                                                                      | Page size                                                                               |
| `offset`                                                                                | *number*                                                                                | :heavy_minus_sign:                                                                      | Page offset                                                                             |