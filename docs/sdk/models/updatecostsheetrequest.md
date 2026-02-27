# UpdateCostsheetRequest

## Example Usage

```typescript
import { UpdateCostsheetRequest } from "@flexprice/sdk/sdk/models";

let value: UpdateCostsheetRequest = {
  id: "<id>",
  dtoUpdateCostsheetRequest: {},
};
```

## Fields

| Field                                                                             | Type                                                                              | Required                                                                          | Description                                                                       |
| --------------------------------------------------------------------------------- | --------------------------------------------------------------------------------- | --------------------------------------------------------------------------------- | --------------------------------------------------------------------------------- |
| `id`                                                                              | *string*                                                                          | :heavy_check_mark:                                                                | Costsheet ID                                                                      |
| `dtoUpdateCostsheetRequest`                                                       | [models.DtoUpdateCostsheetRequest](../../sdk/models/dtoupdatecostsheetrequest.md) | :heavy_check_mark:                                                                | Costsheet configuration                                                           |