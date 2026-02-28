# UpdateCouponRequest

## Example Usage

```typescript
import { UpdateCouponRequest } from "@flexprice/sdk/sdk/models";

let value: UpdateCouponRequest = {
  id: "<id>",
  body: {},
};
```

## Fields

| Field                                                                          | Type                                                                           | Required                                                                       | Description                                                                    |
| ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ |
| `id`                                                                           | *string*                                                                       | :heavy_check_mark:                                                             | Coupon ID                                                                      |
| `body`                                                                         | [models.DtoUpdateCouponRequest](../../sdk/models/dto-update-coupon-request.md) | :heavy_check_mark:                                                             | Coupon update request                                                          |