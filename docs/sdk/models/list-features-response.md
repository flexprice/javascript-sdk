# ListFeaturesResponse

## Example Usage

```typescript
import { ListFeaturesResponse } from "@flexprice/sdk/sdk/models";

let value: ListFeaturesResponse = {
  items: [
    {
      meter: {
        createdAt: new Date("2024-03-20T15:04:05Z"),
        eventName: "api_request",
        id: "550e8400-e29b-41d4-a716-446655440000",
        name: "API Usage Meter",
        status: "published",
        tenantId: "tenant123",
        updatedAt: new Date("2024-03-20T15:04:05Z"),
      },
    },
  ],
};
```

## Fields

| Field                                                                | Type                                                                 | Required                                                             | Description                                                          |
| -------------------------------------------------------------------- | -------------------------------------------------------------------- | -------------------------------------------------------------------- | -------------------------------------------------------------------- |
| `items`                                                              | [models.Feature1](../../sdk/models/feature1.md)[]                    | :heavy_minus_sign:                                                   | N/A                                                                  |
| `pagination`                                                         | [models.PaginationResponse](../../sdk/models/pagination-response.md) | :heavy_minus_sign:                                                   | N/A                                                                  |