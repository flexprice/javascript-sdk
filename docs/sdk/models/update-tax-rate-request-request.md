# UpdateTaxRateRequestRequest

## Example Usage

```typescript
import { UpdateTaxRateRequestRequest } from "@flexprice/sdk/sdk/models";

let value: UpdateTaxRateRequestRequest = {
  id: "<id>",
  body: {},
};
```

## Fields

| Field                                                                      | Type                                                                       | Required                                                                   | Description                                                                |
| -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- |
| `id`                                                                       | *string*                                                                   | :heavy_check_mark:                                                         | Tax rate ID                                                                |
| `body`                                                                     | [models.UpdateTaxRateRequest](../../sdk/models/update-tax-rate-request.md) | :heavy_check_mark:                                                         | Tax rate to update                                                         |