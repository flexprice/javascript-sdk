# SecretProvider

## Example Usage

```typescript
import { SecretProvider } from "@flexprice/sdk/sdk/models";

let value: SecretProvider = "chargebee";

// Open enum: unrecognized values are captured as Unrecognized<string>
```

## Values

```typescript
"flexprice" | "stripe" | "s3" | "hubspot" | "razorpay" | "chargebee" | "quickbooks" | "nomod" | "moyasar" | "paddle" | Unrecognized<string>
```