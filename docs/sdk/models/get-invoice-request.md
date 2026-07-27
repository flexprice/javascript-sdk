# GetInvoiceRequest

## Example Usage

```typescript
import { GetInvoiceRequest } from "@flexprice/sdk/sdk/models";

let value: GetInvoiceRequest = {
  id: "<id>",
};
```

## Fields

| Field                                                                                                                  | Type                                                                                                                   | Required                                                                                                               | Description                                                                                                            |
| ---------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------- |
| `id`                                                                                                                   | *string*                                                                                                               | :heavy_check_mark:                                                                                                     | Invoice ID                                                                                                             |
| `expandBySource`                                                                                                       | *boolean*                                                                                                              | :heavy_minus_sign:                                                                                                     | Include source-level price breakdown for usage line items (legacy)                                                     |
| `groupBy`                                                                                                              | *string*[]                                                                                                             | :heavy_minus_sign:                                                                                                     | Group usage breakdown by specified fields (e.g., source, feature_id, properties.org_id)                                |
| `expand`                                                                                                               | *string*                                                                                                               | :heavy_minus_sign:                                                                                                     | Comma-separated related fields to include. Supports 'tax_applied.tax_rate' to attach rate details to each applied tax. |