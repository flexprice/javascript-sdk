# TerminateCommitmentRequest

## Example Usage

```typescript
import { TerminateCommitmentRequest } from "@flexprice/sdk/sdk/models";

let value: TerminateCommitmentRequest = {};
```

## Fields

| Field                                                                                              | Type                                                                                               | Required                                                                                           | Description                                                                                        |
| -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- |
| `cancellationFee`                                                                                  | [models.CancellationFeeInput](../../sdk/models/cancellation-fee-input.md)                          | :heavy_minus_sign:                                                                                 | N/A                                                                                                |
| `effectiveAt`                                                                                      | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)      | :heavy_minus_sign:                                                                                 | EffectiveAt defaults to now; within a second after a billing period edge it is taken as that edge. |