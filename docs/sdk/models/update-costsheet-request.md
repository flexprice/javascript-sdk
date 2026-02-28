# UpdateCostsheetRequest

## Example Usage

```typescript
import { UpdateCostsheetRequest } from "@flexprice/sdk/sdk/models";

let value: UpdateCostsheetRequest = {
  id: "<id>",
  body: {},
};
```

## Fields

| Field                                                                                | Type                                                                                 | Required                                                                             | Description                                                                          |
| ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ |
| `id`                                                                                 | *string*                                                                             | :heavy_check_mark:                                                                   | Costsheet ID                                                                         |
| `body`                                                                               | [models.DtoUpdateCostsheetRequest](../../sdk/models/dto-update-costsheet-request.md) | :heavy_check_mark:                                                                   | Costsheet configuration                                                              |