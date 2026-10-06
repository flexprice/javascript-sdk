# GetEventRequest

## Example Usage

```typescript
import { GetEventRequest } from "@flexprice/sdk/sdk/models";

let value: GetEventRequest = {
  id: "<id>",
  externalCustomerId: "<id>",
};
```

## Fields

| Field                                                                              | Type                                                                               | Required                                                                           | Description                                                                        |
| ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- |
| `id`                                                                               | *string*                                                                           | :heavy_check_mark:                                                                 | Event ID                                                                           |
| `externalCustomerId`                                                               | *string*                                                                           | :heavy_check_mark:                                                                 | External customer ID the event was ingested with                                   |
| `startTime`                                                                        | *string*                                                                           | :heavy_minus_sign:                                                                 | Start of the event timestamp window (RFC3339); defaults to 14 days before end_time |
| `endTime`                                                                          | *string*                                                                           | :heavy_minus_sign:                                                                 | End of the event timestamp window (RFC3339); defaults to now                       |