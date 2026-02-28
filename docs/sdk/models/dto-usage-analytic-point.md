# DtoUsageAnalyticPoint

## Example Usage

```typescript
import { DtoUsageAnalyticPoint } from "@flexprice/sdk/sdk/models";

let value: DtoUsageAnalyticPoint = {};
```

## Fields

| Field                                                          | Type                                                           | Required                                                       | Description                                                    |
| -------------------------------------------------------------- | -------------------------------------------------------------- | -------------------------------------------------------------- | -------------------------------------------------------------- |
| `computedCommitmentUtilizedAmount`                             | *string*                                                       | :heavy_minus_sign:                                             | Commitment breakdown (only populated for windowed commitments) |
| `computedOverageAmount`                                        | *string*                                                       | :heavy_minus_sign:                                             | N/A                                                            |
| `computedTrueUpAmount`                                         | *string*                                                       | :heavy_minus_sign:                                             | N/A                                                            |
| `cost`                                                         | *string*                                                       | :heavy_minus_sign:                                             | N/A                                                            |
| `eventCount`                                                   | *number*                                                       | :heavy_minus_sign:                                             | Number of events in this time window                           |
| `timestamp`                                                    | *string*                                                       | :heavy_minus_sign:                                             | N/A                                                            |
| `usage`                                                        | *string*                                                       | :heavy_minus_sign:                                             | N/A                                                            |