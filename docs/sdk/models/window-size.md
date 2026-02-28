# WindowSize

## Example Usage

```typescript
import { WindowSize } from "@flexprice/sdk/sdk/models";

let value: WindowSize = "6HOUR";
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

```typescript
"MONTH" | "MINUTE" | "15MIN" | "30MIN" | "HOUR" | "3HOUR" | "6HOUR" | "12HOUR" | "DAY" | "WEEK" | Unrecognized<string>
```