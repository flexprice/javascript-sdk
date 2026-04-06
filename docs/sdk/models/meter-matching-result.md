# MeterMatchingResult

## Example Usage

```typescript
import { MeterMatchingResult } from "@flexprice/sdk/sdk/models";

let value: MeterMatchingResult = {};
```

## Fields

| Field                                                                 | Type                                                                  | Required                                                              | Description                                                           |
| --------------------------------------------------------------------- | --------------------------------------------------------------------- | --------------------------------------------------------------------- | --------------------------------------------------------------------- |
| `error`                                                               | [models.ErrorResponse](../../sdk/models/error-response.md)            | :heavy_minus_sign:                                                    | N/A                                                                   |
| `matchedMeters`                                                       | [models.MatchedMeter](../../sdk/models/matched-meter.md)[]            | :heavy_minus_sign:                                                    | N/A                                                                   |
| `status`                                                              | [models.DebugTrackerStatus](../../sdk/models/debug-tracker-status.md) | :heavy_minus_sign:                                                    | N/A                                                                   |