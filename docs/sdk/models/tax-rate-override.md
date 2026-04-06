# TaxRateOverride

## Example Usage

```typescript
import { TaxRateOverride } from "@flexprice/sdk/sdk/models";

let value: TaxRateOverride = {
  currency: "Congolese Franc",
  taxRateCode: "<value>",
};
```

## Fields

| Field                    | Type                     | Required                 | Description              |
| ------------------------ | ------------------------ | ------------------------ | ------------------------ |
| `autoApply`              | *boolean*                | :heavy_minus_sign:       | N/A                      |
| `currency`               | *string*                 | :heavy_check_mark:       | N/A                      |
| `metadata`               | Record<string, *string*> | :heavy_minus_sign:       | N/A                      |
| `priority`               | *number*                 | :heavy_minus_sign:       | N/A                      |
| `taxRateCode`            | *string*                 | :heavy_check_mark:       | N/A                      |