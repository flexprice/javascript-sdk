# UpdateTaxRateRequest

## Example Usage

```typescript
import { UpdateTaxRateRequest } from "@flexprice/sdk/sdk/models";

let value: UpdateTaxRateRequest = {
  id: "<id>",
  dtoUpdateTaxRateRequest: {},
};
```

## Fields

| Field                                                                         | Type                                                                          | Required                                                                      | Description                                                                   |
| ----------------------------------------------------------------------------- | ----------------------------------------------------------------------------- | ----------------------------------------------------------------------------- | ----------------------------------------------------------------------------- |
| `id`                                                                          | *string*                                                                      | :heavy_check_mark:                                                            | Tax rate ID                                                                   |
| `dtoUpdateTaxRateRequest`                                                     | [models.DtoUpdateTaxRateRequest](../../sdk/models/dtoupdatetaxraterequest.md) | :heavy_check_mark:                                                            | Tax rate to update                                                            |