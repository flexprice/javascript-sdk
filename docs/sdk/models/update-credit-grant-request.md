# UpdateCreditGrantRequest

## Example Usage

```typescript
import { UpdateCreditGrantRequest } from "@flexprice/sdk/sdk/models";

let value: UpdateCreditGrantRequest = {
  id: "<id>",
  body: {},
};
```

## Fields

| Field                                                                                     | Type                                                                                      | Required                                                                                  | Description                                                                               |
| ----------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------- |
| `id`                                                                                      | *string*                                                                                  | :heavy_check_mark:                                                                        | Credit Grant ID                                                                           |
| `body`                                                                                    | [models.DtoUpdateCreditGrantRequest](../../sdk/models/dto-update-credit-grant-request.md) | :heavy_check_mark:                                                                        | Credit Grant configuration                                                                |