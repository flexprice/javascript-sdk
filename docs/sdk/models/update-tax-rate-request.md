# UpdateTaxRateRequest

## Example Usage

```typescript
import { UpdateTaxRateRequest } from "@flexprice/sdk/sdk/models";

let value: UpdateTaxRateRequest = {
  id: "<id>",
  body: {},
};
```

## Fields

| Field                                                                             | Type                                                                              | Required                                                                          | Description                                                                       |
| --------------------------------------------------------------------------------- | --------------------------------------------------------------------------------- | --------------------------------------------------------------------------------- | --------------------------------------------------------------------------------- |
| `id`                                                                              | *string*                                                                          | :heavy_check_mark:                                                                | Tax rate ID                                                                       |
| `body`                                                                            | [models.DtoUpdateTaxRateRequest](../../sdk/models/dto-update-tax-rate-request.md) | :heavy_check_mark:                                                                | Tax rate to update                                                                |