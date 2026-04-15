# CloneEnvironmentRequestRequest

## Example Usage

```typescript
import { CloneEnvironmentRequestRequest } from "@flexprice/sdk/sdk/models";

let value: CloneEnvironmentRequestRequest = {
  id: "<id>",
  body: {},
};
```

## Fields

| Field                                                                           | Type                                                                            | Required                                                                        | Description                                                                     |
| ------------------------------------------------------------------------------- | ------------------------------------------------------------------------------- | ------------------------------------------------------------------------------- | ------------------------------------------------------------------------------- |
| `id`                                                                            | *string*                                                                        | :heavy_check_mark:                                                              | Source Environment ID                                                           |
| `body`                                                                          | [models.CloneEnvironmentRequest](../../sdk/models/clone-environment-request.md) | :heavy_check_mark:                                                              | Clone configuration                                                             |