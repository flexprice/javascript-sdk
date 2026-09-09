# StorageExportConfig

## Example Usage

```typescript
import { StorageExportConfig } from "@flexprice/sdk/sdk/models";

let value: StorageExportConfig = {};
```

## Fields

| Field                                                                       | Type                                                                        | Required                                                                    | Description                                                                 |
| --------------------------------------------------------------------------- | --------------------------------------------------------------------------- | --------------------------------------------------------------------------- | --------------------------------------------------------------------------- |
| `bucket`                                                                    | *string*                                                                    | :heavy_minus_sign:                                                          | Storage bucket name                                                         |
| `compression`                                                               | [models.S3CompressionType](../../sdk/models/s3-compression-type.md)         | :heavy_minus_sign:                                                          | N/A                                                                         |
| `encryption`                                                                | [models.S3EncryptionType](../../sdk/models/s3-encryption-type.md)           | :heavy_minus_sign:                                                          | N/A                                                                         |
| `isFlexpriceManaged`                                                        | *boolean*                                                                   | :heavy_minus_sign:                                                          | If true, use Flexprice-managed storage credentials instead of user-provided |
| `keyPrefix`                                                                 | *string*                                                                    | :heavy_minus_sign:                                                          | Optional prefix for object keys (e.g., "flexprice-exports/")                |
| `region`                                                                    | *string*                                                                    | :heavy_minus_sign:                                                          | Cloud region (e.g., "us-west-2"); unused for GCS                            |