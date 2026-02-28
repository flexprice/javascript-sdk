# DtoTaxAssociationResponse

## Example Usage

```typescript
import { DtoTaxAssociationResponse } from "@flexprice/sdk/sdk/models";

let value: DtoTaxAssociationResponse = {};
```

## Fields

| Field                                                                      | Type                                                                       | Required                                                                   | Description                                                                |
| -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- |
| `autoApply`                                                                | *boolean*                                                                  | :heavy_minus_sign:                                                         | Whether this tax should be automatically applied                           |
| `createdAt`                                                                | *string*                                                                   | :heavy_minus_sign:                                                         | N/A                                                                        |
| `createdBy`                                                                | *string*                                                                   | :heavy_minus_sign:                                                         | N/A                                                                        |
| `currency`                                                                 | *string*                                                                   | :heavy_minus_sign:                                                         | Currency                                                                   |
| `entityId`                                                                 | *string*                                                                   | :heavy_minus_sign:                                                         | ID of the entity this tax rate applies to                                  |
| `entityType`                                                               | [models.TaxRateEntityType](../../sdk/models/tax-rate-entity-type.md)       | :heavy_minus_sign:                                                         | N/A                                                                        |
| `environmentId`                                                            | *string*                                                                   | :heavy_minus_sign:                                                         | EnvironmentID is the ID of the environment this tax rate config belongs to |
| `id`                                                                       | *string*                                                                   | :heavy_minus_sign:                                                         | ID of the ent.                                                             |
| `metadata`                                                                 | Record<string, *string*>                                                   | :heavy_minus_sign:                                                         | Metadata holds the value of the "metadata" field.                          |
| `priority`                                                                 | *number*                                                                   | :heavy_minus_sign:                                                         | Priority for tax resolution (lower number = higher priority)               |
| `status`                                                                   | [models.Status](../../sdk/models/status.md)                                | :heavy_minus_sign:                                                         | N/A                                                                        |
| `taxRate`                                                                  | [models.DtoTaxRateResponse](../../sdk/models/dto-tax-rate-response.md)     | :heavy_minus_sign:                                                         | N/A                                                                        |
| `taxRateId`                                                                | *string*                                                                   | :heavy_minus_sign:                                                         | Reference to the TaxRate entity                                            |
| `tenantId`                                                                 | *string*                                                                   | :heavy_minus_sign:                                                         | N/A                                                                        |
| `updatedAt`                                                                | *string*                                                                   | :heavy_minus_sign:                                                         | N/A                                                                        |
| `updatedBy`                                                                | *string*                                                                   | :heavy_minus_sign:                                                         | N/A                                                                        |