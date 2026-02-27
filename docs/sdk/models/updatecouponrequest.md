# UpdateCouponRequest

## Example Usage

```typescript
import { UpdateCouponRequest } from "@flexprice/sdk/sdk/models";

let value: UpdateCouponRequest = {
  id: "<id>",
  dtoUpdateCouponRequest: {},
};
```

## Fields

| Field                                                                       | Type                                                                        | Required                                                                    | Description                                                                 |
| --------------------------------------------------------------------------- | --------------------------------------------------------------------------- | --------------------------------------------------------------------------- | --------------------------------------------------------------------------- |
| `id`                                                                        | *string*                                                                    | :heavy_check_mark:                                                          | Coupon ID                                                                   |
| `dtoUpdateCouponRequest`                                                    | [models.DtoUpdateCouponRequest](../../sdk/models/dtoupdatecouponrequest.md) | :heavy_check_mark:                                                          | Coupon update request                                                       |