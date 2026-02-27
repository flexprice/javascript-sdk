# DtoCreateTaxAssociationRequest

## Example Usage

```typescript
import { DtoCreateTaxAssociationRequest } from "@flexprice/sdk/sdk/models";

let value: DtoCreateTaxAssociationRequest = {
  taxRateCode: "<value>",
};
```

## Fields

| Field                                                             | Type                                                              | Required                                                          | Description                                                       |
| ----------------------------------------------------------------- | ----------------------------------------------------------------- | ----------------------------------------------------------------- | ----------------------------------------------------------------- |
| `autoApply`                                                       | *boolean*                                                         | :heavy_minus_sign:                                                | N/A                                                               |
| `currency`                                                        | *string*                                                          | :heavy_minus_sign:                                                | N/A                                                               |
| `entityId`                                                        | *string*                                                          | :heavy_minus_sign:                                                | N/A                                                               |
| `entityType`                                                      | [models.TaxRateEntityType](../../sdk/models/taxrateentitytype.md) | :heavy_minus_sign:                                                | N/A                                                               |
| `externalCustomerId`                                              | *string*                                                          | :heavy_minus_sign:                                                | N/A                                                               |
| `metadata`                                                        | Record<string, *string*>                                          | :heavy_minus_sign:                                                | N/A                                                               |
| `priority`                                                        | *number*                                                          | :heavy_minus_sign:                                                | N/A                                                               |
| `taxRateCode`                                                     | *string*                                                          | :heavy_check_mark:                                                | N/A                                                               |