# DeleteCreditGrantRequest

## Example Usage

```typescript
import { DeleteCreditGrantRequest } from "@flexprice/sdk/sdk/models";

let value: DeleteCreditGrantRequest = {
  id: "<id>",
};
```

## Fields

| Field                                                                                     | Type                                                                                      | Required                                                                                  | Description                                                                               |
| ----------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------- |
| `id`                                                                                      | *string*                                                                                  | :heavy_check_mark:                                                                        | Credit Grant ID                                                                           |
| `body`                                                                                    | [models.DtoDeleteCreditGrantRequest](../../sdk/models/dto-delete-credit-grant-request.md) | :heavy_minus_sign:                                                                        | Optional: effective_date for subscription-scoped grants                                   |