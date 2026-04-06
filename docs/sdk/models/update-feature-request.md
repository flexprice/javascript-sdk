# UpdateFeatureRequest

## Example Usage

```typescript
import { UpdateFeatureRequest } from "@flexprice/sdk/sdk/models";

let value: UpdateFeatureRequest = {};
```

## Fields

| Field                                                                                | Type                                                                                 | Required                                                                             | Description                                                                          |
| ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ |
| `alertSettings`                                                                      | [models.AlertSettings](../../sdk/models/alert-settings.md)                           | :heavy_minus_sign:                                                                   | N/A                                                                                  |
| `description`                                                                        | *string*                                                                             | :heavy_minus_sign:                                                                   | N/A                                                                                  |
| `filters`                                                                            | [models.MeterFilter](../../sdk/models/meter-filter.md)[]                             | :heavy_minus_sign:                                                                   | N/A                                                                                  |
| `groupId`                                                                            | *string*                                                                             | :heavy_minus_sign:                                                                   | GroupID is the id of the group to assign the feature to. Pass empty string to clear. |
| `metadata`                                                                           | Record<string, *string*>                                                             | :heavy_minus_sign:                                                                   | N/A                                                                                  |
| `name`                                                                               | *string*                                                                             | :heavy_minus_sign:                                                                   | N/A                                                                                  |
| `reportingUnit`                                                                      | [models.ReportingUnit](../../sdk/models/reporting-unit.md)                           | :heavy_minus_sign:                                                                   | N/A                                                                                  |
| `unitPlural`                                                                         | *string*                                                                             | :heavy_minus_sign:                                                                   | N/A                                                                                  |
| `unitSingular`                                                                       | *string*                                                                             | :heavy_minus_sign:                                                                   | N/A                                                                                  |