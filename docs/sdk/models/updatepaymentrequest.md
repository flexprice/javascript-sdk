# UpdatePaymentRequest

## Example Usage

```typescript
import { UpdatePaymentRequest } from "@flexprice/sdk/sdk/models";

let value: UpdatePaymentRequest = {
  id: "<id>",
  dtoUpdatePaymentRequest: {},
};
```

## Fields

| Field                                                                         | Type                                                                          | Required                                                                      | Description                                                                   |
| ----------------------------------------------------------------------------- | ----------------------------------------------------------------------------- | ----------------------------------------------------------------------------- | ----------------------------------------------------------------------------- |
| `id`                                                                          | *string*                                                                      | :heavy_check_mark:                                                            | Payment ID                                                                    |
| `dtoUpdatePaymentRequest`                                                     | [models.DtoUpdatePaymentRequest](../../sdk/models/dtoupdatepaymentrequest.md) | :heavy_check_mark:                                                            | Payment configuration                                                         |