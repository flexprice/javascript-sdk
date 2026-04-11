# LineItemQuantityChange

## Example Usage

```typescript
import { LineItemQuantityChange } from "@flexprice/sdk/sdk/models";

let value: LineItemQuantityChange = {
  id: "<id>",
  quantity: "<value>",
};
```

## Fields

| Field                                                                                                          | Type                                                                                                           | Required                                                                                                       | Description                                                                                                    |
| -------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- |
| `effectiveDate`                                                                                                | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)                  | :heavy_minus_sign:                                                                                             | EffectiveDate is when the quantity change takes effect.<br/>If omitted, the change is effective immediately (now). |
| `id`                                                                                                           | *string*                                                                                                       | :heavy_check_mark:                                                                                             | N/A                                                                                                            |
| `quantity`                                                                                                     | *string*                                                                                                       | :heavy_check_mark:                                                                                             | N/A                                                                                                            |