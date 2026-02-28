# DtoListCostsheetResponse

## Example Usage

```typescript
import { DtoListCostsheetResponse } from "@flexprice/sdk/sdk/models";

let value: DtoListCostsheetResponse = {
  items: [
    {
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
    },
  ],
};
```

## Fields

| Field                                                                       | Type                                                                        | Required                                                                    | Description                                                                 |
| --------------------------------------------------------------------------- | --------------------------------------------------------------------------- | --------------------------------------------------------------------------- | --------------------------------------------------------------------------- |
| `items`                                                                     | [models.DtoCostsheetResponse](../../sdk/models/dto-costsheet-response.md)[] | :heavy_minus_sign:                                                          | N/A                                                                         |
| `pagination`                                                                | [models.PaginationResponse](../../sdk/models/pagination-response.md)        | :heavy_minus_sign:                                                          | N/A                                                                         |