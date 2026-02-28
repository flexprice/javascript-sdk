# MeterFilter

## Example Usage

```typescript
import { MeterFilter } from "@flexprice/sdk/sdk/models";

let value: MeterFilter = {};
```

## Fields

| Field                                                                                                                                      | Type                                                                                                                                       | Required                                                                                                                                   | Description                                                                                                                                |
| ------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------ |
| `key`                                                                                                                                      | *string*                                                                                                                                   | :heavy_minus_sign:                                                                                                                         | Key is the key for the filter from $event.properties<br/>Currently we support only first level keys in the properties and not nested keys  |
| `values`                                                                                                                                   | *string*[]                                                                                                                                 | :heavy_minus_sign:                                                                                                                         | Values are the possible values for the filter to be considered for the meter<br/>For ex "model_name" could have values "o1-mini", "gpt-4o" etc |