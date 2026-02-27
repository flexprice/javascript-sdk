# DtoAddAddonToSubscriptionRequest

## Example Usage

```typescript
import { DtoAddAddonToSubscriptionRequest } from "@flexprice/sdk/sdk/models";

let value: DtoAddAddonToSubscriptionRequest = {
  addonId: "<id>",
};
```

## Fields

| Field                                                                                                 | Type                                                                                                  | Required                                                                                              | Description                                                                                           |
| ----------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------- |
| `addonId`                                                                                             | *string*                                                                                              | :heavy_check_mark:                                                                                    | N/A                                                                                                   |
| `lineItemCommitments`                                                                                 | Record<string, [models.DtoLineItemCommitmentConfig](../../sdk/models/dtolineitemcommitmentconfig.md)> | :heavy_minus_sign:                                                                                    | LineItemCommitments allows setting commitment configuration per addon line item (keyed by price_id)   |
| `metadata`                                                                                            | Record<string, *any*>                                                                                 | :heavy_minus_sign:                                                                                    | N/A                                                                                                   |
| `startDate`                                                                                           | *string*                                                                                              | :heavy_minus_sign:                                                                                    | N/A                                                                                                   |