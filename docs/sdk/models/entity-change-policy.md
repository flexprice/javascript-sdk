# EntityChangePolicy

## Example Usage

```typescript
import { EntityChangePolicy } from "@flexprice/sdk/sdk/models";

let value: EntityChangePolicy = {};
```

## Fields

| Field                                                                                       | Type                                                                                        | Required                                                                                    | Description                                                                                 |
| ------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------- |
| `defaultBehaviour`                                                                          | [models.EntityChangeBehaviour](../../sdk/models/entity-change-behaviour.md)                 | :heavy_minus_sign:                                                                          | N/A                                                                                         |
| `overrides`                                                                                 | Record<string, [models.EntityChangeBehaviour](../../sdk/models/entity-change-behaviour.md)> | :heavy_minus_sign:                                                                          | Overrides is keyed by addon_associations.id (instance), not catalogue addon_id.             |