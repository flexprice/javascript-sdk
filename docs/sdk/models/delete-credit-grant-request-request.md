# DeleteCreditGrantRequestRequest

## Example Usage

```typescript
import { DeleteCreditGrantRequestRequest } from "@flexprice/sdk/sdk/models";

let value: DeleteCreditGrantRequestRequest = {
  id: "<id>",
};
```

## Fields

| Field                                                                              | Type                                                                               | Required                                                                           | Description                                                                        |
| ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- |
| `id`                                                                               | *string*                                                                           | :heavy_check_mark:                                                                 | Credit Grant ID                                                                    |
| `body`                                                                             | [models.DeleteCreditGrantRequest](../../sdk/models/delete-credit-grant-request.md) | :heavy_minus_sign:                                                                 | Optional: effective_date for subscription-scoped grants                            |