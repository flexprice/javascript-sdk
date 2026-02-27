# PostPlansIdCloneRequest

## Example Usage

```typescript
import { PostPlansIdCloneRequest } from "@flexprice/sdk/sdk/models";

let value: PostPlansIdCloneRequest = {
  id: "<id>",
  dtoClonePlanRequest: {},
};
```

## Fields

| Field                                                                 | Type                                                                  | Required                                                              | Description                                                           |
| --------------------------------------------------------------------- | --------------------------------------------------------------------- | --------------------------------------------------------------------- | --------------------------------------------------------------------- |
| `id`                                                                  | *string*                                                              | :heavy_check_mark:                                                    | Source Plan ID                                                        |
| `dtoClonePlanRequest`                                                 | [models.DtoClonePlanRequest](../../sdk/models/dtocloneplanrequest.md) | :heavy_check_mark:                                                    | Clone configuration                                                   |