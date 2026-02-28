# DtoCostsheetResponse

## Example Usage

```typescript
import { DtoCostsheetResponse } from "@flexprice/sdk/sdk/models";

let value: DtoCostsheetResponse = {
  prices: [
    {
      addon: {},
      meter: {
        createdAt: "2024-03-20T15:04:05Z",
        eventName: "api_request",
        id: "550e8400-e29b-41d4-a716-446655440000",
        name: "API Usage Meter",
        status: "published",
        tenantId: "tenant123",
        updatedAt: "2024-03-20T15:04:05Z",
      },
      plan: {},
    },
  ],
};
```

## Fields

| Field                                                               | Type                                                                | Required                                                            | Description                                                         |
| ------------------------------------------------------------------- | ------------------------------------------------------------------- | ------------------------------------------------------------------- | ------------------------------------------------------------------- |
| `createdAt`                                                         | *string*                                                            | :heavy_minus_sign:                                                  | N/A                                                                 |
| `createdBy`                                                         | *string*                                                            | :heavy_minus_sign:                                                  | N/A                                                                 |
| `description`                                                       | *string*                                                            | :heavy_minus_sign:                                                  | N/A                                                                 |
| `environmentId`                                                     | *string*                                                            | :heavy_minus_sign:                                                  | N/A                                                                 |
| `id`                                                                | *string*                                                            | :heavy_minus_sign:                                                  | N/A                                                                 |
| `lookupKey`                                                         | *string*                                                            | :heavy_minus_sign:                                                  | N/A                                                                 |
| `metadata`                                                          | Record<string, *string*>                                            | :heavy_minus_sign:                                                  | N/A                                                                 |
| `name`                                                              | *string*                                                            | :heavy_minus_sign:                                                  | N/A                                                                 |
| `prices`                                                            | [models.DtoPriceResponse](../../sdk/models/dto-price-response.md)[] | :heavy_minus_sign:                                                  | Associated prices                                                   |
| `status`                                                            | [models.Status](../../sdk/models/status.md)                         | :heavy_minus_sign:                                                  | N/A                                                                 |
| `tenantId`                                                          | *string*                                                            | :heavy_minus_sign:                                                  | N/A                                                                 |
| `updatedAt`                                                         | *string*                                                            | :heavy_minus_sign:                                                  | N/A                                                                 |
| `updatedBy`                                                         | *string*                                                            | :heavy_minus_sign:                                                  | N/A                                                                 |