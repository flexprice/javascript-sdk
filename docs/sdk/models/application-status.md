# ApplicationStatus

## Example Usage

```typescript
import { ApplicationStatus } from "@flexprice/sdk/sdk/models";

let value: ApplicationStatus = "cancelled";
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

```typescript
"applied" | "failed" | "pending" | "skipped" | "cancelled" | Unrecognized<string>
```