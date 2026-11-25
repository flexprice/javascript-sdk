# GetCollectionsBoardRequest

## Example Usage

```typescript
import { GetCollectionsBoardRequest } from "@flexprice/sdk/sdk/models";

let value: GetCollectionsBoardRequest = {};
```

## Fields

| Field                                                                                                                            | Type                                                                                                                             | Required                                                                                                                         | Description                                                                                                                      |
| -------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------- |
| `limit`                                                                                                                          | *number*                                                                                                                         | :heavy_minus_sign:                                                                                                               | Cards per column in this response (0-200, default 0 = counts and totals only)                                                    |
| `q`                                                                                                                              | *string*                                                                                                                         | :heavy_minus_sign:                                                                                                               | Keep receivables whose customer name, customer email or invoice number contains this text (case-insensitive, max 100 characters) |
| `currency`                                                                                                                       | *string*                                                                                                                         | :heavy_minus_sign:                                                                                                               | Keep receivables in this currency (case-insensitive)                                                                             |