# S3EncryptionType

## Example Usage

```typescript
import { S3EncryptionType } from "@flexprice/sdk/sdk/models";

let value: S3EncryptionType = "aws:kms";
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

```typescript
"AES256" | "aws:kms" | "aws:kms:dsse" | Unrecognized<string>
```