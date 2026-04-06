# UpdateCouponRequestRequest

## Example Usage

```typescript
import { UpdateCouponRequestRequest } from "@flexprice/sdk/sdk/models";

let value: UpdateCouponRequestRequest = {
  id: "<id>",
  body: {},
};
```

## Fields

| Field                                                                   | Type                                                                    | Required                                                                | Description                                                             |
| ----------------------------------------------------------------------- | ----------------------------------------------------------------------- | ----------------------------------------------------------------------- | ----------------------------------------------------------------------- |
| `id`                                                                    | *string*                                                                | :heavy_check_mark:                                                      | Coupon ID                                                               |
| `body`                                                                  | [models.UpdateCouponRequest](../../sdk/models/update-coupon-request.md) | :heavy_check_mark:                                                      | Coupon update request                                                   |