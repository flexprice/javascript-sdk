# UpdateFeatureRequest

## Example Usage

```typescript
import { UpdateFeatureRequest } from "@flexprice/sdk/sdk/models";

let value: UpdateFeatureRequest = {
  id: "<id>",
  dtoUpdateFeatureRequest: {},
};
```

## Fields

| Field                                                                         | Type                                                                          | Required                                                                      | Description                                                                   |
| ----------------------------------------------------------------------------- | ----------------------------------------------------------------------------- | ----------------------------------------------------------------------------- | ----------------------------------------------------------------------------- |
| `id`                                                                          | *string*                                                                      | :heavy_check_mark:                                                            | Feature ID                                                                    |
| `dtoUpdateFeatureRequest`                                                     | [models.DtoUpdateFeatureRequest](../../sdk/models/dtoupdatefeaturerequest.md) | :heavy_check_mark:                                                            | Feature update data                                                           |