# HandleMoyasarWebhookRequest

## Example Usage

```typescript
import { HandleMoyasarWebhookRequest } from "@flexprice/sdk/sdk/models";

let value: HandleMoyasarWebhookRequest = {
  tenantId: "<id>",
  environmentId: "<id>",
};
```

## Fields

| Field                     | Type                      | Required                  | Description               |
| ------------------------- | ------------------------- | ------------------------- | ------------------------- |
| `tenantId`                | *string*                  | :heavy_check_mark:        | Tenant ID                 |
| `environmentId`           | *string*                  | :heavy_check_mark:        | Environment ID            |
| `xMoyasarSignature`       | *string*                  | :heavy_minus_sign:        | Moyasar webhook signature |