# RollforwardRow

## Example Usage

```typescript
import { RollforwardRow } from "@flexprice/sdk/sdk/models";

let value: RollforwardRow = {};
```

## Fields

| Field                                                             | Type                                                              | Required                                                          | Description                                                       |
| ----------------------------------------------------------------- | ----------------------------------------------------------------- | ----------------------------------------------------------------- | ----------------------------------------------------------------- |
| `account`                                                         | [models.LedgerAccountKey](../../sdk/models/ledger-account-key.md) | :heavy_minus_sign:                                                | N/A                                                               |
| `closing`                                                         | *string*                                                          | :heavy_minus_sign:                                                | N/A                                                               |
| `contractId`                                                      | *string*                                                          | :heavy_minus_sign:                                                | N/A                                                               |
| `customerId`                                                      | *string*                                                          | :heavy_minus_sign:                                                | N/A                                                               |
| `movements`                                                       | Record<string, *string*>                                          | :heavy_minus_sign:                                                | a missing category is 0                                           |
| `opening`                                                         | *string*                                                          | :heavy_minus_sign:                                                | N/A                                                               |
| `period`                                                          | *string*                                                          | :heavy_minus_sign:                                                | YYYY-MM                                                           |
| `pobId`                                                           | *string*                                                          | :heavy_minus_sign:                                                | N/A                                                               |