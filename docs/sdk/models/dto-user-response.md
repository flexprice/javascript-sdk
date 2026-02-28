# DtoUserResponse

## Example Usage

```typescript
import { DtoUserResponse } from "@flexprice/sdk/sdk/models";

let value: DtoUserResponse = {};
```

## Fields

| Field                                                               | Type                                                                | Required                                                            | Description                                                         |
| ------------------------------------------------------------------- | ------------------------------------------------------------------- | ------------------------------------------------------------------- | ------------------------------------------------------------------- |
| `email`                                                             | *string*                                                            | :heavy_minus_sign:                                                  | Empty for service accounts                                          |
| `id`                                                                | *string*                                                            | :heavy_minus_sign:                                                  | N/A                                                                 |
| `roles`                                                             | *string*[]                                                          | :heavy_minus_sign:                                                  | N/A                                                                 |
| `tenant`                                                            | [models.DtoTenantResponse](../../sdk/models/dto-tenant-response.md) | :heavy_minus_sign:                                                  | N/A                                                                 |
| `type`                                                              | [models.UserType](../../sdk/models/user-type.md)                    | :heavy_minus_sign:                                                  | N/A                                                                 |