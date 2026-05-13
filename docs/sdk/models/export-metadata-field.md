# ExportMetadataField

## Example Usage

```typescript
import { ExportMetadataField } from "@flexprice/sdk/sdk/models";

let value: ExportMetadataField = {
  entityType: "customer",
  fieldKey: "<value>",
};
```

## Fields

| Field                                                                              | Type                                                                               | Required                                                                           | Description                                                                        |
| ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- |
| `columnName`                                                                       | *string*                                                                           | :heavy_minus_sign:                                                                 | CSV column header to be shown in the exported file                                 |
| `entityType`                                                                       | [models.ExportMetadataEntityType](../../sdk/models/export-metadata-entity-type.md) | :heavy_check_mark:                                                                 | N/A                                                                                |
| `fieldKey`                                                                         | *string*                                                                           | :heavy_check_mark:                                                                 | metadata key to look up                                                            |