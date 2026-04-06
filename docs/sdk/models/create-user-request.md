# CreateUserRequest

## Example Usage

```typescript
import { CreateUserRequest } from "@flexprice/sdk/sdk/models";

let value: CreateUserRequest = {
  type: "user",
};
```

## Fields

| Field                                            | Type                                             | Required                                         | Description                                      |
| ------------------------------------------------ | ------------------------------------------------ | ------------------------------------------------ | ------------------------------------------------ |
| `email`                                          | *string*                                         | :heavy_minus_sign:                               | Required when type is "user"                     |
| `roles`                                          | *string*[]                                       | :heavy_minus_sign:                               | Required when type is "service_account"          |
| `type`                                           | [models.UserType](../../sdk/models/user-type.md) | :heavy_check_mark:                               | N/A                                              |