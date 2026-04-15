# CloneFeatureRequest

## Example Usage

```typescript
import { CloneFeatureRequest } from "@flexprice/sdk/sdk/models";

let value: CloneFeatureRequest = {};
```

## Fields

| Field                                                                 | Type                                                                  | Required                                                              | Description                                                           |
| --------------------------------------------------------------------- | --------------------------------------------------------------------- | --------------------------------------------------------------------- | --------------------------------------------------------------------- |
| `description`                                                         | *string*                                                              | :heavy_minus_sign:                                                    | Description overrides the source feature's description when provided  |
| `lookupKey`                                                           | *string*                                                              | :heavy_minus_sign:                                                    | LookupKey is required and must be unique across published features    |
| `metadata`                                                            | Record<string, *string*>                                              | :heavy_minus_sign:                                                    | N/A                                                                   |
| `name`                                                                | *string*                                                              | :heavy_minus_sign:                                                    | Name is required and must be different from the source feature's name |