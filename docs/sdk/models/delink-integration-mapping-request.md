# DelinkIntegrationMappingRequest

## Example Usage

```typescript
import { DelinkIntegrationMappingRequest } from "@flexprice/sdk/sdk/models";

let value: DelinkIntegrationMappingRequest = {
  entityId: "<id>",
  entityType: "invoice",
  providerType: "<value>",
};
```

## Fields

| Field                                                                       | Type                                                                        | Required                                                                    | Description                                                                 |
| --------------------------------------------------------------------------- | --------------------------------------------------------------------------- | --------------------------------------------------------------------------- | --------------------------------------------------------------------------- |
| `entityId`                                                                  | *string*                                                                    | :heavy_check_mark:                                                          | N/A                                                                         |
| `entityType`                                                                | [models.IntegrationEntityType](../../sdk/models/integration-entity-type.md) | :heavy_check_mark:                                                          | N/A                                                                         |
| `providerType`                                                              | *string*                                                                    | :heavy_check_mark:                                                          | N/A                                                                         |