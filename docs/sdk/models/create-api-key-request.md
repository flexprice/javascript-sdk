# CreateAPIKeyRequest

## Example Usage

```typescript
import { CreateAPIKeyRequest } from "@flexprice/sdk/sdk/models";

let value: CreateAPIKeyRequest = {
  name: "<value>",
  type: "publishable_key",
};
```

## Fields

| Field                                                                                         | Type                                                                                          | Required                                                                                      | Description                                                                                   |
| --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| `expiresAt`                                                                                   | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_minus_sign:                                                                            | N/A                                                                                           |
| `name`                                                                                        | *string*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `serviceAccountId`                                                                            | *string*                                                                                      | :heavy_minus_sign:                                                                            | N/A                                                                                           |
| `type`                                                                                        | [models.SecretType](../../sdk/models/secret-type.md)                                          | :heavy_check_mark:                                                                            | N/A                                                                                           |