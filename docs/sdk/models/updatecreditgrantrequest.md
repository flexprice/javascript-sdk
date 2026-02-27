# UpdateCreditGrantRequest

## Example Usage

```typescript
import { UpdateCreditGrantRequest } from "@flexprice/sdk/sdk/models";

let value: UpdateCreditGrantRequest = {
  id: "<id>",
  dtoUpdateCreditGrantRequest: {},
};
```

## Fields

| Field                                                                                 | Type                                                                                  | Required                                                                              | Description                                                                           |
| ------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------- |
| `id`                                                                                  | *string*                                                                              | :heavy_check_mark:                                                                    | Credit Grant ID                                                                       |
| `dtoUpdateCreditGrantRequest`                                                         | [models.DtoUpdateCreditGrantRequest](../../sdk/models/dtoupdatecreditgrantrequest.md) | :heavy_check_mark:                                                                    | Credit Grant configuration                                                            |