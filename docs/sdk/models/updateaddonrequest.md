# UpdateAddonRequest

## Example Usage

```typescript
import { UpdateAddonRequest } from "@flexprice/sdk/sdk/models";

let value: UpdateAddonRequest = {
  id: "<id>",
  dtoUpdateAddonRequest: {},
};
```

## Fields

| Field                                                                     | Type                                                                      | Required                                                                  | Description                                                               |
| ------------------------------------------------------------------------- | ------------------------------------------------------------------------- | ------------------------------------------------------------------------- | ------------------------------------------------------------------------- |
| `id`                                                                      | *string*                                                                  | :heavy_check_mark:                                                        | Addon ID                                                                  |
| `dtoUpdateAddonRequest`                                                   | [models.DtoUpdateAddonRequest](../../sdk/models/dtoupdateaddonrequest.md) | :heavy_check_mark:                                                        | Update Addon Request                                                      |