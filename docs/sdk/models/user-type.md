# UserType

## Example Usage

```typescript
import { UserType } from "@flexprice/sdk/sdk/models";

let value: UserType = "service_account";
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

```typescript
"user" | "service_account" | Unrecognized<string>
```