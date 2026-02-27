# DtoIngestEventRequest

## Example Usage

```typescript
import { DtoIngestEventRequest } from "@flexprice/sdk/sdk/models";

let value: DtoIngestEventRequest = {
  customerId: "customer456",
  eventId: "event123",
  eventName: "api_request",
  externalCustomerId: "customer456",
  properties: {
    ""response_status"": "200}",
    "{"request_size"": "100",
  },
  source: "api",
  timestamp: "2024-03-20T15:04:05Z",
};
```

## Fields

| Field                                                         | Type                                                          | Required                                                      | Description                                                   | Example                                                       |
| ------------------------------------------------------------- | ------------------------------------------------------------- | ------------------------------------------------------------- | ------------------------------------------------------------- | ------------------------------------------------------------- |
| `customerId`                                                  | *string*                                                      | :heavy_minus_sign:                                            | N/A                                                           | customer456                                                   |
| `eventId`                                                     | *string*                                                      | :heavy_minus_sign:                                            | N/A                                                           | event123                                                      |
| `eventName`                                                   | *string*                                                      | :heavy_check_mark:                                            | N/A                                                           | api_request                                                   |
| `externalCustomerId`                                          | *string*                                                      | :heavy_check_mark:                                            | N/A                                                           | customer456                                                   |
| `properties`                                                  | Record<string, *string*>                                      | :heavy_minus_sign:                                            | Handled separately for dynamic columns                        | {<br/>"\"response_status\"": "200}",<br/>"{\"request_size\"": "100"<br/>} |
| `source`                                                      | *string*                                                      | :heavy_minus_sign:                                            | N/A                                                           | api                                                           |
| `timestamp`                                                   | *string*                                                      | :heavy_minus_sign:                                            | Handled separately due to parsing                             | 2024-03-20T15:04:05Z                                          |