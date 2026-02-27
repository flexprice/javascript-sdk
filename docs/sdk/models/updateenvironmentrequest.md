# UpdateEnvironmentRequest

## Example Usage

```typescript
import { UpdateEnvironmentRequest } from "@flexprice/sdk/sdk/models";

let value: UpdateEnvironmentRequest = {
  id: "<id>",
  dtoUpdateEnvironmentRequest: {},
};
```

## Fields

| Field                                                                                 | Type                                                                                  | Required                                                                              | Description                                                                           |
| ------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------- |
| `id`                                                                                  | *string*                                                                              | :heavy_check_mark:                                                                    | Environment ID                                                                        |
| `dtoUpdateEnvironmentRequest`                                                         | [models.DtoUpdateEnvironmentRequest](../../sdk/models/dtoupdateenvironmentrequest.md) | :heavy_check_mark:                                                                    | Environment                                                                           |