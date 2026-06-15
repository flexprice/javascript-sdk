# UpdateServiceAccountRequestRequest

## Example Usage

```typescript
import { UpdateServiceAccountRequestRequest } from "@flexprice/sdk/sdk/models";

let value: UpdateServiceAccountRequestRequest = {
  id: "<id>",
  body: {
    name: "<value>",
  },
};
```

## Fields

| Field                                                                                    | Type                                                                                     | Required                                                                                 | Description                                                                              |
| ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- |
| `id`                                                                                     | *string*                                                                                 | :heavy_check_mark:                                                                       | Service Account ID                                                                       |
| `body`                                                                                   | [models.UpdateServiceAccountRequest](../../sdk/models/update-service-account-request.md) | :heavy_check_mark:                                                                       | Update service account request                                                           |