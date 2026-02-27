# UpdatePriceRequest

## Example Usage

```typescript
import { UpdatePriceRequest } from "@flexprice/sdk/sdk/models";

let value: UpdatePriceRequest = {
  id: "<id>",
  dtoUpdatePriceRequest: {},
};
```

## Fields

| Field                                                                     | Type                                                                      | Required                                                                  | Description                                                               |
| ------------------------------------------------------------------------- | ------------------------------------------------------------------------- | ------------------------------------------------------------------------- | ------------------------------------------------------------------------- |
| `id`                                                                      | *string*                                                                  | :heavy_check_mark:                                                        | Price ID                                                                  |
| `dtoUpdatePriceRequest`                                                   | [models.DtoUpdatePriceRequest](../../sdk/models/dtoupdatepricerequest.md) | :heavy_check_mark:                                                        | Price configuration                                                       |