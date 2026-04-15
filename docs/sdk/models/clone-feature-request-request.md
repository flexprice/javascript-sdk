# CloneFeatureRequestRequest

## Example Usage

```typescript
import { CloneFeatureRequestRequest } from "@flexprice/sdk/sdk/models";

let value: CloneFeatureRequestRequest = {
  id: "<id>",
  body: {},
};
```

## Fields

| Field                                                                   | Type                                                                    | Required                                                                | Description                                                             |
| ----------------------------------------------------------------------- | ----------------------------------------------------------------------- | ----------------------------------------------------------------------- | ----------------------------------------------------------------------- |
| `id`                                                                    | *string*                                                                | :heavy_check_mark:                                                      | Source Feature ID                                                       |
| `body`                                                                  | [models.CloneFeatureRequest](../../sdk/models/clone-feature-request.md) | :heavy_check_mark:                                                      | Clone configuration                                                     |