# GetEntityIntegrationMappingsRequest

## Example Usage

```typescript
import { GetEntityIntegrationMappingsRequest } from "@flexprice/sdk/sdk/models";

let value: GetEntityIntegrationMappingsRequest = {
  entityType: "<value>",
  entityId: "<id>",
};
```

## Fields

| Field                                                                                                     | Type                                                                                                      | Required                                                                                                  | Description                                                                                               |
| --------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------- |
| `entityType`                                                                                              | *string*                                                                                                  | :heavy_check_mark:                                                                                        | Entity type (customer, plan, invoice, subscription, payment, credit_note, addon, item, item_price, price) |
| `entityId`                                                                                                | *string*                                                                                                  | :heavy_check_mark:                                                                                        | Entity ID                                                                                                 |