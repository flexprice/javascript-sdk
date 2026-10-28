# CommitmentScopeInput

## Example Usage

```typescript
import { CommitmentScopeInput } from "@flexprice/sdk/sdk/models";

let value: CommitmentScopeInput = {
  entityType: "price",
};
```

## Fields

| Field                                                                                                   | Type                                                                                                    | Required                                                                                                | Description                                                                                             |
| ------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------- |
| `entityId`                                                                                              | *string*                                                                                                | :heavy_minus_sign:                                                                                      | EntityID may be omitted on an inline subscription-scoped commitment; the new subscription's ID is used. |
| `entityType`                                                                                            | [models.CommitmentScopeType](../../sdk/models/commitment-scope-type.md)                                 | :heavy_check_mark:                                                                                      | N/A                                                                                                     |