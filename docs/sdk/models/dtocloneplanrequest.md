# DtoClonePlanRequest

## Example Usage

```typescript
import { DtoClonePlanRequest } from "@flexprice/sdk/sdk/models";

let value: DtoClonePlanRequest = {};
```

## Fields

| Field                                                                | Type                                                                 | Required                                                             | Description                                                          |
| -------------------------------------------------------------------- | -------------------------------------------------------------------- | -------------------------------------------------------------------- | -------------------------------------------------------------------- |
| `description`                                                        | *string*                                                             | :heavy_minus_sign:                                                   | Description overrides the source plan's description when provided    |
| `displayOrder`                                                       | *number*                                                             | :heavy_minus_sign:                                                   | DisplayOrder overrides the source plan's display order when provided |
| `lookupKey`                                                          | *string*                                                             | :heavy_minus_sign:                                                   | LookupKey is required and must be unique across published plans      |
| `metadata`                                                           | Record<string, *string*>                                             | :heavy_minus_sign:                                                   | N/A                                                                  |
| `name`                                                               | *string*                                                             | :heavy_minus_sign:                                                   | Name is required and must be different from the source plan's name   |