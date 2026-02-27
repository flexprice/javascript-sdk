# DtoCreateFeatureRequest

## Example Usage

```typescript
import { DtoCreateFeatureRequest } from "@flexprice/sdk/sdk/models";

let value: DtoCreateFeatureRequest = {
  meter: {
    aggregation: {},
    eventName: "api_request",
    name: "API Usage Meter",
    resetUsage: "BILLING_PERIOD",
  },
  name: "<value>",
  type: "boolean",
};
```

## Fields

| Field                                                                     | Type                                                                      | Required                                                                  | Description                                                               |
| ------------------------------------------------------------------------- | ------------------------------------------------------------------------- | ------------------------------------------------------------------------- | ------------------------------------------------------------------------- |
| `alertSettings`                                                           | [models.AlertSettings](../../sdk/models/alertsettings.md)                 | :heavy_minus_sign:                                                        | N/A                                                                       |
| `description`                                                             | *string*                                                                  | :heavy_minus_sign:                                                        | N/A                                                                       |
| `lookupKey`                                                               | *string*                                                                  | :heavy_minus_sign:                                                        | N/A                                                                       |
| `metadata`                                                                | Record<string, *string*>                                                  | :heavy_minus_sign:                                                        | N/A                                                                       |
| `meter`                                                                   | [models.DtoCreateMeterRequest](../../sdk/models/dtocreatemeterrequest.md) | :heavy_minus_sign:                                                        | N/A                                                                       |
| `meterId`                                                                 | *string*                                                                  | :heavy_minus_sign:                                                        | N/A                                                                       |
| `name`                                                                    | *string*                                                                  | :heavy_check_mark:                                                        | N/A                                                                       |
| `type`                                                                    | [models.FeatureType](../../sdk/models/featuretype.md)                     | :heavy_check_mark:                                                        | N/A                                                                       |
| `unitPlural`                                                              | *string*                                                                  | :heavy_minus_sign:                                                        | N/A                                                                       |
| `unitSingular`                                                            | *string*                                                                  | :heavy_minus_sign:                                                        | N/A                                                                       |