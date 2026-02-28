# FileType

## Example Usage

```typescript
import { FileType } from "@flexprice/sdk/sdk/models";

let value: FileType = "JSON";
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

```typescript
"CSV" | "JSON" | Unrecognized<string>
```