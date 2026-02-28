# EventProcessingStatusType

## Example Usage

```typescript
import { EventProcessingStatusType } from "@flexprice/sdk/sdk/models";

let value: EventProcessingStatusType = "processing";
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

```typescript
"processed" | "processing" | "failed" | Unrecognized<string>
```