# UpdateEntitlementRequest

## Example Usage

```typescript
import { UpdateEntitlementRequest } from "@flexprice/sdk/sdk/models";

let value: UpdateEntitlementRequest = {
  id: "<id>",
  body: {},
};
```

## Fields

| Field                                                                                    | Type                                                                                     | Required                                                                                 | Description                                                                              |
| ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- |
| `id`                                                                                     | *string*                                                                                 | :heavy_check_mark:                                                                       | Entitlement ID                                                                           |
| `body`                                                                                   | [models.DtoUpdateEntitlementRequest](../../sdk/models/dto-update-entitlement-request.md) | :heavy_check_mark:                                                                       | Entitlement configuration                                                                |