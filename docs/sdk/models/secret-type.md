# SecretType

## Example Usage

```typescript
import { SecretType } from "@flexprice/sdk/sdk/models";

let value: SecretType = "private_key";
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

```typescript
"private_key" | "publishable_key" | "integration" | Unrecognized<string>
```