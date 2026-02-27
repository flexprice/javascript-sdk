# UpdateTaxAssociationRequest

## Example Usage

```typescript
import { UpdateTaxAssociationRequest } from "@flexprice/sdk/sdk/models";

let value: UpdateTaxAssociationRequest = {
  id: "<id>",
  dtoTaxAssociationUpdateRequest: {},
};
```

## Fields

| Field                                                                                       | Type                                                                                        | Required                                                                                    | Description                                                                                 |
| ------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------- |
| `id`                                                                                        | *string*                                                                                    | :heavy_check_mark:                                                                          | Tax Config ID                                                                               |
| `dtoTaxAssociationUpdateRequest`                                                            | [models.DtoTaxAssociationUpdateRequest](../../sdk/models/dtotaxassociationupdaterequest.md) | :heavy_check_mark:                                                                          | Tax Config Request                                                                          |