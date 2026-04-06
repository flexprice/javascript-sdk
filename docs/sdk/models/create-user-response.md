# CreateUserResponse

## Example Usage

```typescript
import { CreateUserResponse } from "@flexprice/sdk/sdk/models";

let value: CreateUserResponse = {};
```

## Fields

| Field                                                        | Type                                                         | Required                                                     | Description                                                  |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| `email`                                                      | *string*                                                     | :heavy_minus_sign:                                           | Empty for service accounts                                   |
| `id`                                                         | *string*                                                     | :heavy_minus_sign:                                           | N/A                                                          |
| `password`                                                   | *string*                                                     | :heavy_minus_sign:                                           | N/A                                                          |
| `roles`                                                      | *string*[]                                                   | :heavy_minus_sign:                                           | N/A                                                          |
| `tenant`                                                     | [models.TenantResponse](../../sdk/models/tenant-response.md) | :heavy_minus_sign:                                           | N/A                                                          |
| `type`                                                       | [models.UserType](../../sdk/models/user-type.md)             | :heavy_minus_sign:                                           | N/A                                                          |