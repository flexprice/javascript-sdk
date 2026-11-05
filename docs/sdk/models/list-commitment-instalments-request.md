# ListCommitmentInstalmentsRequest

## Example Usage

```typescript
import { ListCommitmentInstalmentsRequest } from "@flexprice/sdk/sdk/models";

let value: ListCommitmentInstalmentsRequest = {
  id: "<id>",
};
```

## Fields

| Field                                                               | Type                                                                | Required                                                            | Description                                                         |
| ------------------------------------------------------------------- | ------------------------------------------------------------------- | ------------------------------------------------------------------- | ------------------------------------------------------------------- |
| `id`                                                                | *string*                                                            | :heavy_check_mark:                                                  | Commitment ID                                                       |
| `status`                                                            | *string*[]                                                          | :heavy_minus_sign:                                                  | Only instalments in these statuses (scheduled, invoiced, cancelled) |