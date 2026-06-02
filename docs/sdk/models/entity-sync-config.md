# EntitySyncConfig

## Example Usage

```typescript
import { EntitySyncConfig } from "@flexprice/sdk/sdk/models";

let value: EntitySyncConfig = {};
```

## Fields

| Field                                        | Type                                         | Required                                     | Description                                  |
| -------------------------------------------- | -------------------------------------------- | -------------------------------------------- | -------------------------------------------- |
| `inbound`                                    | *boolean*                                    | :heavy_minus_sign:                           | Inbound from external provider to FlexPrice  |
| `outbound`                                   | *boolean*                                    | :heavy_minus_sign:                           | Outbound from FlexPrice to external provider |