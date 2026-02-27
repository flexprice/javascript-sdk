# UpdatePriceUnitRequest

## Example Usage

```typescript
import { UpdatePriceUnitRequest } from "@flexprice/sdk/sdk/models";

let value: UpdatePriceUnitRequest = {
  id: "<id>",
  dtoUpdatePriceUnitRequest: {},
};
```

## Fields

| Field                                                                             | Type                                                                              | Required                                                                          | Description                                                                       |
| --------------------------------------------------------------------------------- | --------------------------------------------------------------------------------- | --------------------------------------------------------------------------------- | --------------------------------------------------------------------------------- |
| `id`                                                                              | *string*                                                                          | :heavy_check_mark:                                                                | Price unit ID                                                                     |
| `dtoUpdatePriceUnitRequest`                                                       | [models.DtoUpdatePriceUnitRequest](../../sdk/models/dtoupdatepriceunitrequest.md) | :heavy_check_mark:                                                                | Price unit details to update                                                      |