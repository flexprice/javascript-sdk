# BulkIngestEventRequest

## Example Usage

```typescript
import { BulkIngestEventRequest } from "@flexprice/sdk/sdk/models";

let value: BulkIngestEventRequest = {
  events: [
    {
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
    },
  ],
};
```

## Fields

| Field                                                                   | Type                                                                    | Required                                                                | Description                                                             |
| ----------------------------------------------------------------------- | ----------------------------------------------------------------------- | ----------------------------------------------------------------------- | ----------------------------------------------------------------------- |
| `events`                                                                | [models.IngestEventRequest](../../sdk/models/ingest-event-request.md)[] | :heavy_check_mark:                                                      | N/A                                                                     |