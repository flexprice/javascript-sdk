# GetCustomerWalletsRequest

## Example Usage

```typescript
import { GetCustomerWalletsRequest } from "@flexprice/sdk/sdk/models";

let value: GetCustomerWalletsRequest = {};
```

## Fields

| Field                                             | Type                                              | Required                                          | Description                                       |
| ------------------------------------------------- | ------------------------------------------------- | ------------------------------------------------- | ------------------------------------------------- |
| `minus`                                           | *number*                                          | :heavy_minus_sign:                                | populated from x-max-live header, not query param |
| `expand`                                          | *string*                                          | :heavy_minus_sign:                                | N/A                                               |
| `fromCache`                                       | *boolean*                                         | :heavy_minus_sign:                                | N/A                                               |
| `id`                                              | *string*                                          | :heavy_minus_sign:                                | N/A                                               |
| `includeRealTimeBalance`                          | *boolean*                                         | :heavy_minus_sign:                                | N/A                                               |
| `lookupKey`                                       | *string*                                          | :heavy_minus_sign:                                | N/A                                               |