# UpdatePaymentRequest

## Example Usage

```typescript
import { UpdatePaymentRequest } from "@flexprice/sdk/sdk/models";

let value: UpdatePaymentRequest = {
  id: "<id>",
  body: {},
};
```

## Fields

| Field                                                                            | Type                                                                             | Required                                                                         | Description                                                                      |
| -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- |
| `id`                                                                             | *string*                                                                         | :heavy_check_mark:                                                               | Payment ID                                                                       |
| `body`                                                                           | [models.DtoUpdatePaymentRequest](../../sdk/models/dto-update-payment-request.md) | :heavy_check_mark:                                                               | Payment configuration                                                            |