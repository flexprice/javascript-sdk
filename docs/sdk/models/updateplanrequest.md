# UpdatePlanRequest

## Example Usage

```typescript
import { UpdatePlanRequest } from "@flexprice/sdk/sdk/models";

let value: UpdatePlanRequest = {
  id: "<id>",
  dtoUpdatePlanRequest: {},
};
```

## Fields

| Field                                                                   | Type                                                                    | Required                                                                | Description                                                             |
| ----------------------------------------------------------------------- | ----------------------------------------------------------------------- | ----------------------------------------------------------------------- | ----------------------------------------------------------------------- |
| `id`                                                                    | *string*                                                                | :heavy_check_mark:                                                      | Plan ID                                                                 |
| `dtoUpdatePlanRequest`                                                  | [models.DtoUpdatePlanRequest](../../sdk/models/dtoupdateplanrequest.md) | :heavy_check_mark:                                                      | Plan update                                                             |