# UpdateCommitmentRequestRequest

## Example Usage

```typescript
import { UpdateCommitmentRequestRequest } from "@flexprice/sdk/sdk/models";

let value: UpdateCommitmentRequestRequest = {
  id: "<id>",
  body: {},
};
```

## Fields

| Field                                                                           | Type                                                                            | Required                                                                        | Description                                                                     |
| ------------------------------------------------------------------------------- | ------------------------------------------------------------------------------- | ------------------------------------------------------------------------------- | ------------------------------------------------------------------------------- |
| `id`                                                                            | *string*                                                                        | :heavy_check_mark:                                                              | Commitment ID                                                                   |
| `body`                                                                          | [models.UpdateCommitmentRequest](../../sdk/models/update-commitment-request.md) | :heavy_check_mark:                                                              | Commitment update                                                               |