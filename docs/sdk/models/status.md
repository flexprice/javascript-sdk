# Status

## Example Usage

```typescript
import { Status } from "@flexprice/sdk/sdk/models";

let value: Status = "deleted";
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

```typescript
"published" | "deleted" | "archived" | Unrecognized<string>
```