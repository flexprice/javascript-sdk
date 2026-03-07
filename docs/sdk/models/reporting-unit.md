# ReportingUnit

## Example Usage

```typescript
import { ReportingUnit } from "@flexprice/sdk/sdk/models";

let value: ReportingUnit = {};
```

## Fields

| Field                                                                        | Type                                                                         | Required                                                                     | Description                                                                  |
| ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- |
| `conversionRate`                                                             | *number*                                                                     | :heavy_minus_sign:                                                           | Multiplier: reporting_unit_value = unit_value * conversion_rate; must be > 0 |
| `unitPlural`                                                                 | *string*                                                                     | :heavy_minus_sign:                                                           | Display unit label, plural (e.g. "seconds")                                  |
| `unitSingular`                                                               | *string*                                                                     | :heavy_minus_sign:                                                           | Display unit label, singular (e.g. "second")                                 |