# ErrorCode

## Example Usage

```typescript
import { ErrorCode } from "@flexprice/sdk/sdk/models";

let value: ErrorCode = "invalid_operation";

// Open enum: unrecognized values are captured as Unrecognized<string>
```

## Values

```typescript
"http_client_error" | "system_error" | "internal_error" | "not_found" | "already_exists" | "version_conflict" | "validation_error" | "invalid_operation" | "permission_denied" | "database_error" | "service_unavailable" | "too_many_requests" | Unrecognized<string>
```