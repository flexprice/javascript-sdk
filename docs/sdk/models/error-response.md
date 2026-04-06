# ErrorResponse

## Example Usage

```typescript
import { ErrorResponse } from "@flexprice/sdk/sdk/models";

let value: ErrorResponse = {};
```

## Fields

| Field                                                         | Type                                                          | Required                                                      | Description                                                   |
| ------------------------------------------------------------- | ------------------------------------------------------------- | ------------------------------------------------------------- | ------------------------------------------------------------- |
| `code`                                                        | [models.Code](../../sdk/models/code.md)                       | :heavy_minus_sign:                                            | N/A                                                           |
| `details`                                                     | Record<string, [models.Details](../../sdk/models/details.md)> | :heavy_minus_sign:                                            | N/A                                                           |
| `httpStatusCode`                                              | *number*                                                      | :heavy_minus_sign:                                            | N/A                                                           |
| `message`                                                     | *string*                                                      | :heavy_minus_sign:                                            | N/A                                                           |