# UpdateTaxAssociationRequest

## Example Usage

```typescript
import { UpdateTaxAssociationRequest } from "@flexprice/sdk/sdk/models";

let value: UpdateTaxAssociationRequest = {
  id: "<id>",
  body: {},
};
```

## Fields

| Field                                                                                           | Type                                                                                            | Required                                                                                        | Description                                                                                     |
| ----------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------- |
| `id`                                                                                            | *string*                                                                                        | :heavy_check_mark:                                                                              | Tax Config ID                                                                                   |
| `body`                                                                                          | [models.DtoTaxAssociationUpdateRequest](../../sdk/models/dto-tax-association-update-request.md) | :heavy_check_mark:                                                                              | Tax Config Request                                                                              |