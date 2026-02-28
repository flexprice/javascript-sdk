# CouponCadence

## Example Usage

```typescript
import { CouponCadence } from "@flexprice/sdk/sdk/models";

let value: CouponCadence = "once";
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

```typescript
"once" | "repeated" | "forever" | Unrecognized<string>
```