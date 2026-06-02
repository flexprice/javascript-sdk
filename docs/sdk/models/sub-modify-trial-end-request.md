# SubModifyTrialEndRequest

## Example Usage

```typescript
import { SubModifyTrialEndRequest } from "@flexprice/sdk/sdk/models";

let value: SubModifyTrialEndRequest = {
  action: "immediate",
};
```

## Fields

| Field                                                                                         | Type                                                                                          | Required                                                                                      | Description                                                                                   |
| --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| `action`                                                                                      | [models.TrialEndAction](../../sdk/models/trial-end-action.md)                                 | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `newTrialEnd`                                                                                 | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_minus_sign:                                                                            | NewTrialEnd is the new trial end date. Required when action is "scheduled_date".              |