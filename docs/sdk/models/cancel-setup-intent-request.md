# CancelSetupIntentRequest

## Example Usage

```typescript
import { CancelSetupIntentRequest } from "@flexprice/sdk/sdk/models";

let value: CancelSetupIntentRequest = {
  id: "<id>",
  provider: "razorpay",
};
```

## Fields

| Field                                                                                | Type                                                                                 | Required                                                                             | Description                                                                          |
| ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ |
| `id`                                                                                 | *string*                                                                             | :heavy_check_mark:                                                                   | Customer ID                                                                          |
| `provider`                                                                           | [models.CancelSetupIntentProvider](../../sdk/models/cancel-setup-intent-provider.md) | :heavy_check_mark:                                                                   | Payment provider                                                                     |