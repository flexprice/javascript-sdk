# UpdateCostsheetRequestRequest

## Example Usage

```typescript
import { UpdateCostsheetRequestRequest } from "@flexprice/sdk/sdk/models";

let value: UpdateCostsheetRequestRequest = {
  id: "<id>",
  body: {},
};
```

## Fields

| Field                                                                         | Type                                                                          | Required                                                                      | Description                                                                   |
| ----------------------------------------------------------------------------- | ----------------------------------------------------------------------------- | ----------------------------------------------------------------------------- | ----------------------------------------------------------------------------- |
| `id`                                                                          | *string*                                                                      | :heavy_check_mark:                                                            | Costsheet ID                                                                  |
| `body`                                                                        | [models.UpdateCostsheetRequest](../../sdk/models/update-costsheet-request.md) | :heavy_check_mark:                                                            | Costsheet configuration                                                       |