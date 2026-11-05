# CancellationFeeInput

## Example Usage

```typescript
import { CancellationFeeInput } from "@flexprice/sdk/sdk/models";

let value: CancellationFeeInput = {
  type: "fixed",
  value: "<value>",
};
```

## Fields

| Field                                                                   | Type                                                                    | Required                                                                | Description                                                             |
| ----------------------------------------------------------------------- | ----------------------------------------------------------------------- | ----------------------------------------------------------------------- | ----------------------------------------------------------------------- |
| `type`                                                                  | [models.CancellationFeeType](../../sdk/models/cancellation-fee-type.md) | :heavy_check_mark:                                                      | fixed; percentage is reserved and rejected as not supported yet         |
| `value`                                                                 | *string*                                                                | :heavy_check_mark:                                                      | N/A                                                                     |