# DtoListFeaturesResponse

## Example Usage

```typescript
import { DtoListFeaturesResponse } from "@flexprice/sdk/sdk/models";

let value: DtoListFeaturesResponse = {
  items: [
    {
      meter: {
        createdAt: "2024-03-20T15:04:05Z",
        eventName: "api_request",
        id: "550e8400-e29b-41d4-a716-446655440000",
        name: "API Usage Meter",
        status: "published",
        tenantId: "tenant123",
        updatedAt: "2024-03-20T15:04:05Z",
      },
    },
  ],
};
```

## Fields

| Field                                                                 | Type                                                                  | Required                                                              | Description                                                           |
| --------------------------------------------------------------------- | --------------------------------------------------------------------- | --------------------------------------------------------------------- | --------------------------------------------------------------------- |
| `items`                                                               | [models.DtoFeatureResponse](../../sdk/models/dtofeatureresponse.md)[] | :heavy_minus_sign:                                                    | N/A                                                                   |
| `pagination`                                                          | [models.PaginationResponse](../../sdk/models/paginationresponse.md)   | :heavy_minus_sign:                                                    | N/A                                                                   |