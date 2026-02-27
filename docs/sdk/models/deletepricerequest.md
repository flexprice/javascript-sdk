# DeletePriceRequest

## Example Usage

```typescript
import { DeletePriceRequest } from "@flexprice/sdk/sdk/models";

let value: DeletePriceRequest = {
  id: "<id>",
  dtoDeletePriceRequest: {},
};
```

## Fields

| Field                                                                     | Type                                                                      | Required                                                                  | Description                                                               |
| ------------------------------------------------------------------------- | ------------------------------------------------------------------------- | ------------------------------------------------------------------------- | ------------------------------------------------------------------------- |
| `id`                                                                      | *string*                                                                  | :heavy_check_mark:                                                        | Price ID                                                                  |
| `dtoDeletePriceRequest`                                                   | [models.DtoDeletePriceRequest](../../sdk/models/dtodeletepricerequest.md) | :heavy_check_mark:                                                        | Delete Price Request                                                      |