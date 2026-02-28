# SecretProvider

## Example Usage

```typescript
import { SecretProvider } from "@flexprice/sdk/sdk/models";

let value: SecretProvider = "chargebee";
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

```typescript
"flexprice" | "stripe" | "s3" | "hubspot" | "razorpay" | "chargebee" | "quickbooks" | "nomod" | "moyasar" | Unrecognized<string>
```