# DtoUpdateTaxRateRequest

## Example Usage

```typescript
import { DtoUpdateTaxRateRequest } from "@flexprice/sdk/sdk/models";

let value: DtoUpdateTaxRateRequest = {};
```

## Fields

| Field                                                                         | Type                                                                          | Required                                                                      | Description                                                                   |
| ----------------------------------------------------------------------------- | ----------------------------------------------------------------------------- | ----------------------------------------------------------------------------- | ----------------------------------------------------------------------------- |
| `code`                                                                        | *string*                                                                      | :heavy_minus_sign:                                                            | code is the updated unique alphanumeric identifier for the tax rate           |
| `description`                                                                 | *string*                                                                      | :heavy_minus_sign:                                                            | description is the updated text description for the tax rate                  |
| `metadata`                                                                    | Record<string, *string*>                                                      | :heavy_minus_sign:                                                            | metadata contains updated key-value pairs that will replace existing metadata |
| `name`                                                                        | *string*                                                                      | :heavy_minus_sign:                                                            | name is the updated human-readable name for the tax rate                      |
| `taxRateStatus`                                                               | [models.TaxRateStatus](../../sdk/models/taxratestatus.md)                     | :heavy_minus_sign:                                                            | N/A                                                                           |