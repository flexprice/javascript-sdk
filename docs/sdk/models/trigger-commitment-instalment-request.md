# TriggerCommitmentInstalmentRequest

## Example Usage

```typescript
import { TriggerCommitmentInstalmentRequest } from "@flexprice/sdk/sdk/models";

let value: TriggerCommitmentInstalmentRequest = {
  id: "<id>",
  instalmentId: "<id>",
};
```

## Fields

| Field                                                                             | Type                                                                              | Required                                                                          | Description                                                                       |
| --------------------------------------------------------------------------------- | --------------------------------------------------------------------------------- | --------------------------------------------------------------------------------- | --------------------------------------------------------------------------------- |
| `id`                                                                              | *string*                                                                          | :heavy_check_mark:                                                                | Commitment ID                                                                     |
| `instalmentId`                                                                    | *string*                                                                          | :heavy_check_mark:                                                                | Instalment ID                                                                     |
| `body`                                                                            | [models.TriggerInstalmentRequest](../../sdk/models/trigger-instalment-request.md) | :heavy_minus_sign:                                                                | Trigger request                                                                   |