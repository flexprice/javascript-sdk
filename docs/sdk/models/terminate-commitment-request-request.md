# TerminateCommitmentRequestRequest

## Example Usage

```typescript
import { TerminateCommitmentRequestRequest } from "@flexprice/sdk/sdk/models";

let value: TerminateCommitmentRequestRequest = {
  id: "<id>",
};
```

## Fields

| Field                                                                                 | Type                                                                                  | Required                                                                              | Description                                                                           |
| ------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------- |
| `id`                                                                                  | *string*                                                                              | :heavy_check_mark:                                                                    | Commitment ID                                                                         |
| `body`                                                                                | [models.TerminateCommitmentRequest](../../sdk/models/terminate-commitment-request.md) | :heavy_minus_sign:                                                                    | Termination request                                                                   |