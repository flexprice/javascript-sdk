# TriggerForceRunRequest

## Example Usage

```typescript
import { TriggerForceRunRequest } from "@flexprice/sdk/sdk/models";

let value: TriggerForceRunRequest = {
  customerExternalIds: [
    "<value 1>",
  ],
};
```

## Fields

| Field                                                                                         | Type                                                                                          | Required                                                                                      | Description                                                                                   |
| --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| `customerExternalIds`                                                                         | *string*[]                                                                                    | :heavy_check_mark:                                                                            | Limits a wallet_ledger export to these customers; empty means every customer.                 |
| `endTime`                                                                                     | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_minus_sign:                                                                            | N/A                                                                                           |
| `startTime`                                                                                   | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_minus_sign:                                                                            | N/A                                                                                           |