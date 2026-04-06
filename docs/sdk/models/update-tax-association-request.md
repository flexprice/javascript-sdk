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

| Field                                                                                    | Type                                                                                     | Required                                                                                 | Description                                                                              |
| ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- |
| `id`                                                                                     | *string*                                                                                 | :heavy_check_mark:                                                                       | Tax Config ID                                                                            |
| `body`                                                                                   | [models.TaxAssociationUpdateRequest](../../sdk/models/tax-association-update-request.md) | :heavy_check_mark:                                                                       | Tax Config Request                                                                       |