# CancellationType

## Example Usage

```typescript
import { CancellationType } from "@flexprice/sdk/sdk/models";

let value: CancellationType = "immediate";
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

```typescript
"immediate" | "end_of_period" | Unrecognized<string>
```