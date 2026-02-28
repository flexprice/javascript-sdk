# UpdateAddonRequest

## Example Usage

```typescript
import { UpdateAddonRequest } from "@flexprice/sdk/sdk/models";

let value: UpdateAddonRequest = {
  id: "<id>",
  body: {},
};
```

## Fields

| Field                                                                        | Type                                                                         | Required                                                                     | Description                                                                  |
| ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- |
| `id`                                                                         | *string*                                                                     | :heavy_check_mark:                                                           | Addon ID                                                                     |
| `body`                                                                       | [models.DtoUpdateAddonRequest](../../sdk/models/dto-update-addon-request.md) | :heavy_check_mark:                                                           | Update Addon Request                                                         |