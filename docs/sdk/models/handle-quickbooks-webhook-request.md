# HandleQuickbooksWebhookRequest

## Example Usage

```typescript
import { HandleQuickbooksWebhookRequest } from "@flexprice/sdk/sdk/models";

let value: HandleQuickbooksWebhookRequest = {
  tenantId: "<id>",
  environmentId: "<id>",
};
```

## Fields

| Field                        | Type                         | Required                     | Description                  |
| ---------------------------- | ---------------------------- | ---------------------------- | ---------------------------- |
| `tenantId`                   | *string*                     | :heavy_check_mark:           | Tenant ID                    |
| `environmentId`              | *string*                     | :heavy_check_mark:           | Environment ID               |
| `intuitSignature`            | *string*                     | :heavy_minus_sign:           | QuickBooks webhook signature |