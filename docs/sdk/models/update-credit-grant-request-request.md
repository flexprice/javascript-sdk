# UpdateCreditGrantRequestRequest

## Example Usage

```typescript
import { UpdateCreditGrantRequestRequest } from "@flexprice/sdk/sdk/models";

let value: UpdateCreditGrantRequestRequest = {
  id: "<id>",
  body: {},
};
```

## Fields

| Field                                                                              | Type                                                                               | Required                                                                           | Description                                                                        |
| ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- |
| `id`                                                                               | *string*                                                                           | :heavy_check_mark:                                                                 | Credit Grant ID                                                                    |
| `body`                                                                             | [models.UpdateCreditGrantRequest](../../sdk/models/update-credit-grant-request.md) | :heavy_check_mark:                                                                 | Credit Grant configuration                                                         |