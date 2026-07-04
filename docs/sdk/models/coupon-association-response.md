# CouponAssociationResponse

## Example Usage

```typescript
import { CouponAssociationResponse } from "@flexprice/sdk/sdk/models";

let value: CouponAssociationResponse = {
  subscriptionLineItem: {
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
  },
};
```

## Fields

| Field                                                                                         | Type                                                                                          | Required                                                                                      | Description                                                                                   |
| --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| `coupon`                                                                                      | [models.CouponResponse](../../sdk/models/coupon-response.md)                                  | :heavy_minus_sign:                                                                            | N/A                                                                                           |
| `couponId`                                                                                    | *string*                                                                                      | :heavy_minus_sign:                                                                            | N/A                                                                                           |
| `createdAt`                                                                                   | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_minus_sign:                                                                            | N/A                                                                                           |
| `createdBy`                                                                                   | *string*                                                                                      | :heavy_minus_sign:                                                                            | N/A                                                                                           |
| `endDate`                                                                                     | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_minus_sign:                                                                            | Optional                                                                                      |
| `environmentId`                                                                               | *string*                                                                                      | :heavy_minus_sign:                                                                            | N/A                                                                                           |
| `id`                                                                                          | *string*                                                                                      | :heavy_minus_sign:                                                                            | N/A                                                                                           |
| `metadata`                                                                                    | Record<string, *string*>                                                                      | :heavy_minus_sign:                                                                            | N/A                                                                                           |
| `startDate`                                                                                   | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_minus_sign:                                                                            | N/A                                                                                           |
| `status`                                                                                      | [models.Status](../../sdk/models/status.md)                                                   | :heavy_minus_sign:                                                                            | N/A                                                                                           |
| `subscriptionId`                                                                              | *string*                                                                                      | :heavy_minus_sign:                                                                            | Mandatory                                                                                     |
| `subscriptionLineItem`                                                                        | [models.SubscriptionLineItemResponse](../../sdk/models/subscription-line-item-response.md)    | :heavy_minus_sign:                                                                            | N/A                                                                                           |
| `subscriptionLineItemId`                                                                      | *string*                                                                                      | :heavy_minus_sign:                                                                            | Optional                                                                                      |
| `subscriptionPhaseId`                                                                         | *string*                                                                                      | :heavy_minus_sign:                                                                            | Optional                                                                                      |
| `tenantId`                                                                                    | *string*                                                                                      | :heavy_minus_sign:                                                                            | N/A                                                                                           |
| `updatedAt`                                                                                   | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_minus_sign:                                                                            | N/A                                                                                           |
| `updatedBy`                                                                                   | *string*                                                                                      | :heavy_minus_sign:                                                                            | N/A                                                                                           |