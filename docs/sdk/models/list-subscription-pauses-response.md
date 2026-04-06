# ListSubscriptionPausesResponse

Response object for listing subscription pauses with total count

## Example Usage

```typescript
import { ListSubscriptionPausesResponse } from "@flexprice/sdk/sdk/models";

let value: ListSubscriptionPausesResponse = {};
```

## Fields

| Field                                                                                  | Type                                                                                   | Required                                                                               | Description                                                                            |
| -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- |
| `items`                                                                                | [models.SubscriptionPauseResponse](../../sdk/models/subscription-pause-response.md)[]  | :heavy_minus_sign:                                                                     | List of subscription pause objects<br/>@Description Array of subscription pauses       |
| `total`                                                                                | *number*                                                                               | :heavy_minus_sign:                                                                     | Total number of pauses<br/>@Description Total count of subscription pauses in the response |