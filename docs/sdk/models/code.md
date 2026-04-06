# Code

## Example Usage

```typescript
import { Code } from "@flexprice/sdk/sdk/models";

let value: Code = "not_found";

// Open enum: unrecognized values are captured as Unrecognized<string>
```

## Values

```typescript
"not_found" | "already_exists" | "version_conflict" | "validation_error" | "invalid_operation" | "permission_denied" | "http_client_error" | "database_error" | "system_error" | "internal_error" | "service_unavailable" | Unrecognized<string>
```