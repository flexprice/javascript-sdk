# UpdateFXRateRequestRequest

## Example Usage

```typescript
import { UpdateFXRateRequestRequest } from "@flexprice/sdk/sdk/models";

let value: UpdateFXRateRequestRequest = {
  id: "<id>",
  body: {},
};
```

## Fields

| Field                                                                    | Type                                                                     | Required                                                                 | Description                                                              |
| ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ |
| `id`                                                                     | *string*                                                                 | :heavy_check_mark:                                                       | FX rate ID                                                               |
| `body`                                                                   | [models.UpdateFXRateRequest](../../sdk/models/update-fx-rate-request.md) | :heavy_check_mark:                                                       | FX rate fields to update                                                 |