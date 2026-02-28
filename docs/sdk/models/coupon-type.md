# CouponType

## Example Usage

```typescript
import { CouponType } from "@flexprice/sdk/sdk/models";

let value: CouponType = "percentage";
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

```typescript
"fixed" | "percentage" | Unrecognized<string>
```