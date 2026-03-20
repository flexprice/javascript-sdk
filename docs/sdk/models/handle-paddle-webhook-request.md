# HandlePaddleWebhookRequest

## Example Usage

```typescript
import { HandlePaddleWebhookRequest } from "@flexprice/sdk/sdk/models";

let value: HandlePaddleWebhookRequest = {
  tenantId: "<id>",
  environmentId: "<id>",
  paddleSignature: "<value>",
};
```

## Fields

| Field                    | Type                     | Required                 | Description              |
| ------------------------ | ------------------------ | ------------------------ | ------------------------ |
| `tenantId`               | *string*                 | :heavy_check_mark:       | Tenant ID                |
| `environmentId`          | *string*                 | :heavy_check_mark:       | Environment ID           |
| `paddleSignature`        | *string*                 | :heavy_check_mark:       | Paddle webhook signature |