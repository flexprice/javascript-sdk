# GetSetupIntentRequest

## Example Usage

```typescript
import { GetSetupIntentRequest } from "@flexprice/sdk/sdk/models";

let value: GetSetupIntentRequest = {
  id: "<id>",
  provider: "razorpay",
};
```

## Fields

| Field                                                                          | Type                                                                           | Required                                                                       | Description                                                                    |
| ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ |
| `id`                                                                           | *string*                                                                       | :heavy_check_mark:                                                             | Customer ID                                                                    |
| `provider`                                                                     | [models.GetSetupIntentProvider](../../sdk/models/get-setup-intent-provider.md) | :heavy_check_mark:                                                             | Payment provider                                                               |