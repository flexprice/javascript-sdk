# PreviewCommitmentBillingTermsRequest

## Example Usage

```typescript
import { PreviewCommitmentBillingTermsRequest } from "@flexprice/sdk/sdk/models";

let value: PreviewCommitmentBillingTermsRequest = {
  id: "<id>",
  body: {
    billingTerms: [],
  },
};
```

## Fields

| Field                                                                                  | Type                                                                                   | Required                                                                               | Description                                                                            |
| -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- |
| `id`                                                                                   | *string*                                                                               | :heavy_check_mark:                                                                     | Commitment ID                                                                          |
| `body`                                                                                 | [models.ReplaceBillingTermsRequest](../../sdk/models/replace-billing-terms-request.md) | :heavy_check_mark:                                                                     | Billing terms                                                                          |