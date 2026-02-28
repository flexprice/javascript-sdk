# GetCostsheetRequest

## Example Usage

```typescript
import { GetCostsheetRequest } from "@flexprice/sdk/sdk/models";

let value: GetCostsheetRequest = {
  id: "<id>",
};
```

## Fields

| Field                                                     | Type                                                      | Required                                                  | Description                                               |
| --------------------------------------------------------- | --------------------------------------------------------- | --------------------------------------------------------- | --------------------------------------------------------- |
| `id`                                                      | *string*                                                  | :heavy_check_mark:                                        | Costsheet ID                                              |
| `expand`                                                  | *string*                                                  | :heavy_minus_sign:                                        | Comma-separated list of fields to expand (e.g., 'prices') |