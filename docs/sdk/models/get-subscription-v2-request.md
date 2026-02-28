# GetSubscriptionV2Request

## Example Usage

```typescript
import { GetSubscriptionV2Request } from "@flexprice/sdk/sdk/models";

let value: GetSubscriptionV2Request = {
  id: "<id>",
};
```

## Fields

| Field                                                                                  | Type                                                                                   | Required                                                                               | Description                                                                            |
| -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- |
| `id`                                                                                   | *string*                                                                               | :heavy_check_mark:                                                                     | Subscription ID                                                                        |
| `expand`                                                                               | *string*                                                                               | :heavy_minus_sign:                                                                     | Comma-separated list of fields to expand (e.g., 'subscription_line_items,prices,plan') |