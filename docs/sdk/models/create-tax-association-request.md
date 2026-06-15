# CreateTaxAssociationRequest

## Example Usage

```typescript
import { CreateTaxAssociationRequest } from "@flexprice/sdk/sdk/models";

let value: CreateTaxAssociationRequest = {
  taxRateCode: "<value>",
};
```

## Fields

| Field                                                                                         | Type                                                                                          | Required                                                                                      | Description                                                                                   |
| --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| `autoApply`                                                                                   | *boolean*                                                                                     | :heavy_minus_sign:                                                                            | N/A                                                                                           |
| `currency`                                                                                    | *string*                                                                                      | :heavy_minus_sign:                                                                            | N/A                                                                                           |
| `endDate`                                                                                     | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_minus_sign:                                                                            | EndDate sets when this association expires. Must be after StartDate when both are provided.   |
| `entityId`                                                                                    | *string*                                                                                      | :heavy_minus_sign:                                                                            | N/A                                                                                           |
| `entityType`                                                                                  | [models.TaxRateEntityType](../../sdk/models/tax-rate-entity-type.md)                          | :heavy_minus_sign:                                                                            | N/A                                                                                           |
| `externalCustomerId`                                                                          | *string*                                                                                      | :heavy_minus_sign:                                                                            | N/A                                                                                           |
| `metadata`                                                                                    | Record<string, *string*>                                                                      | :heavy_minus_sign:                                                                            | N/A                                                                                           |
| `priority`                                                                                    | *number*                                                                                      | :heavy_minus_sign:                                                                            | N/A                                                                                           |
| `startDate`                                                                                   | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_minus_sign:                                                                            | StartDate sets when this association becomes active. Defaults to now if omitted.              |
| `taxRateCode`                                                                                 | *string*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |