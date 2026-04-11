# SecretProvider

## Example Usage

```typescript
import { SecretProvider } from "@flexprice/sdk/sdk/models";

let value: SecretProvider = "quickbooks";

// Open enum: unrecognized values are captured as Unrecognized<string>
```

## Values

```typescript
"flexprice" | "stripe" | "s3" | "hubspot" | "razorpay" | "chargebee" | "quickbooks" | "zoho_books" | "nomod" | "moyasar" | "paddle" | Unrecognized<string>
```