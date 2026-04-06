# PriceLookupResult

## Example Usage

```typescript
import { PriceLookupResult } from "@flexprice/sdk/sdk/models";

let value: PriceLookupResult = {};
```

## Fields

| Field                                                                 | Type                                                                  | Required                                                              | Description                                                           |
| --------------------------------------------------------------------- | --------------------------------------------------------------------- | --------------------------------------------------------------------- | --------------------------------------------------------------------- |
| `error`                                                               | [models.ErrorResponse](../../sdk/models/error-response.md)            | :heavy_minus_sign:                                                    | N/A                                                                   |
| `matchedPrices`                                                       | [models.MatchedPrice](../../sdk/models/matched-price.md)[]            | :heavy_minus_sign:                                                    | N/A                                                                   |
| `status`                                                              | [models.DebugTrackerStatus](../../sdk/models/debug-tracker-status.md) | :heavy_minus_sign:                                                    | N/A                                                                   |