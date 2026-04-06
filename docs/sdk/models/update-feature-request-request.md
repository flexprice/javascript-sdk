# UpdateFeatureRequestRequest

## Example Usage

```typescript
import { UpdateFeatureRequestRequest } from "@flexprice/sdk/sdk/models";

let value: UpdateFeatureRequestRequest = {
  id: "<id>",
  body: {},
};
```

## Fields

| Field                                                                     | Type                                                                      | Required                                                                  | Description                                                               |
| ------------------------------------------------------------------------- | ------------------------------------------------------------------------- | ------------------------------------------------------------------------- | ------------------------------------------------------------------------- |
| `id`                                                                      | *string*                                                                  | :heavy_check_mark:                                                        | Feature ID                                                                |
| `body`                                                                    | [models.UpdateFeatureRequest](../../sdk/models/update-feature-request.md) | :heavy_check_mark:                                                        | Feature update data                                                       |