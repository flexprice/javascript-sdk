# PauseSubscriptionRequest

Pauses an active subscription now. Usage and arrear fixed charges up to the pause are billed on a closing invoice.

## Example Usage

```typescript
import { PauseSubscriptionRequest } from "@flexprice/sdk/sdk/models";

let value: PauseSubscriptionRequest = {};
```

## Fields

| Field                                                                                                                                                     | Type                                                                                                                                                      | Required                                                                                                                                                  | Description                                                                                                                                               |
| --------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `metadata`                                                                                                                                                | Record<string, *string*>                                                                                                                                  | :heavy_minus_sign:                                                                                                                                        | Metadata stored on the pause<br/>@Example {"requested_by": "customer", "channel": "support_ticket"}                                                       |
| `prorationBehavior`                                                                                                                                       | [models.ProrationBehavior](../../sdk/models/proration-behavior.md)                                                                                        | :heavy_minus_sign:                                                                                                                                        | N/A                                                                                                                                                       |
| `reason`                                                                                                                                                  | *string*                                                                                                                                                  | :heavy_minus_sign:                                                                                                                                        | Reason for pausing the subscription<br/>@Description Optional reason for the pause. Maximum 255 characters<br/>@Example "Customer requested temporary suspension" |