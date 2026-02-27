# UpdateEntitlementRequest

## Example Usage

```typescript
import { UpdateEntitlementRequest } from "@flexprice/sdk/sdk/models";

let value: UpdateEntitlementRequest = {
  id: "<id>",
  dtoUpdateEntitlementRequest: {},
};
```

## Fields

| Field                                                                                 | Type                                                                                  | Required                                                                              | Description                                                                           |
| ------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------- |
| `id`                                                                                  | *string*                                                                              | :heavy_check_mark:                                                                    | Entitlement ID                                                                        |
| `dtoUpdateEntitlementRequest`                                                         | [models.DtoUpdateEntitlementRequest](../../sdk/models/dtoupdateentitlementrequest.md) | :heavy_check_mark:                                                                    | Entitlement configuration                                                             |