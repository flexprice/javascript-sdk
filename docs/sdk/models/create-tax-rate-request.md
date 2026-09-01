# CreateTaxRateRequest

## Example Usage

```typescript
import { CreateTaxRateRequest } from "@flexprice/sdk/sdk/models";

let value: CreateTaxRateRequest = {
  code: "<value>",
  name: "<value>",
};
```

## Fields

| Field                                                                                 | Type                                                                                  | Required                                                                              | Description                                                                           |
| ------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------- |
| `code`                                                                                | *string*                                                                              | :heavy_check_mark:                                                                    | code is the unique alphanumeric case sensitive identifier for the tax rate (required) |
| `description`                                                                         | *string*                                                                              | :heavy_minus_sign:                                                                    | description is an optional text description providing details about the tax rate      |
| `metadata`                                                                            | Record<string, *string*>                                                              | :heavy_minus_sign:                                                                    | metadata contains additional key-value pairs for storing extra information            |
| `name`                                                                                | *string*                                                                              | :heavy_check_mark:                                                                    | name is the human-readable name for the tax rate (required)                           |
| `percentageValue`                                                                     | *string*                                                                              | :heavy_minus_sign:                                                                    | percentage_value is the percentage value (0-100)                                      |
| `scope`                                                                               | [models.TaxRateScope](../../sdk/models/tax-rate-scope.md)                             | :heavy_minus_sign:                                                                    | N/A                                                                                   |
| `taxRateType`                                                                         | [models.TaxRateType](../../sdk/models/tax-rate-type.md)                               | :heavy_minus_sign:                                                                    | N/A                                                                                   |