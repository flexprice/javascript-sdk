# DtoListSubscriptionPausesResponse

Response object for listing subscription pauses with total count

## Example Usage

```typescript
import { DtoListSubscriptionPausesResponse } from "@flexprice/sdk/sdk/models";

let value: DtoListSubscriptionPausesResponse = {};
```

## Fields

| Field                                                                                        | Type                                                                                         | Required                                                                                     | Description                                                                                  |
| -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- |
| `items`                                                                                      | [models.DtoSubscriptionPauseResponse](../../sdk/models/dto-subscription-pause-response.md)[] | :heavy_minus_sign:                                                                           | List of subscription pause objects<br/>@Description Array of subscription pauses             |
| `total`                                                                                      | *number*                                                                                     | :heavy_minus_sign:                                                                           | Total number of pauses<br/>@Description Total count of subscription pauses in the response   |