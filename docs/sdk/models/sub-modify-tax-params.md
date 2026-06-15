# SubModifyTaxParams

## Example Usage

```typescript
import { SubModifyTaxParams } from "@flexprice/sdk/sdk/models";

let value: SubModifyTaxParams = {
  action: "remove",
};
```

## Fields

| Field                                                                                         | Type                                                                                          | Required                                                                                      | Description                                                                                   |
| --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| `action`                                                                                      | [models.SubModifyTaxAction](../../sdk/models/sub-modify-tax-action.md)                        | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `associationId`                                                                               | *string*                                                                                      | :heavy_minus_sign:                                                                            | Required when action="remove". ID of the TaxAssociation to soft-delete.                       |
| `effectiveDate`                                                                               | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_minus_sign:                                                                            | Optional. When to apply the change; defaults to now if omitted.                               |
| `taxRateId`                                                                                   | *string*                                                                                      | :heavy_minus_sign:                                                                            | Required when action="add". ID of the active tax rate to attach.                              |