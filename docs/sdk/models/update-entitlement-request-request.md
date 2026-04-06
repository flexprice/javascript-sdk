# UpdateEntitlementRequestRequest

## Example Usage

```typescript
import { UpdateEntitlementRequestRequest } from "@flexprice/sdk/sdk/models";

let value: UpdateEntitlementRequestRequest = {
  id: "<id>",
  body: {},
};
```

## Fields

| Field                                                                             | Type                                                                              | Required                                                                          | Description                                                                       |
| --------------------------------------------------------------------------------- | --------------------------------------------------------------------------------- | --------------------------------------------------------------------------------- | --------------------------------------------------------------------------------- |
| `id`                                                                              | *string*                                                                          | :heavy_check_mark:                                                                | Entitlement ID                                                                    |
| `body`                                                                            | [models.UpdateEntitlementRequest](../../sdk/models/update-entitlement-request.md) | :heavy_check_mark:                                                                | Entitlement configuration                                                         |