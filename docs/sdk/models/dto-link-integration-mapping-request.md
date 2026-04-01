# DtoLinkIntegrationMappingRequest

## Example Usage

```typescript
import { DtoLinkIntegrationMappingRequest } from "@flexprice/sdk/sdk/models";

let value: DtoLinkIntegrationMappingRequest = {
  entityId: "<id>",
  entityType: "plan",
  providerEntityId: "<id>",
  providerType: "<value>",
};
```

## Fields

| Field                                                                       | Type                                                                        | Required                                                                    | Description                                                                 |
| --------------------------------------------------------------------------- | --------------------------------------------------------------------------- | --------------------------------------------------------------------------- | --------------------------------------------------------------------------- |
| `entityId`                                                                  | *string*                                                                    | :heavy_check_mark:                                                          | N/A                                                                         |
| `entityType`                                                                | [models.IntegrationEntityType](../../sdk/models/integration-entity-type.md) | :heavy_check_mark:                                                          | N/A                                                                         |
| `metadata`                                                                  | Record<string, *any*>                                                       | :heavy_minus_sign:                                                          | N/A                                                                         |
| `providerEntityId`                                                          | *string*                                                                    | :heavy_check_mark:                                                          | N/A                                                                         |
| `providerType`                                                              | *string*                                                                    | :heavy_check_mark:                                                          | N/A                                                                         |