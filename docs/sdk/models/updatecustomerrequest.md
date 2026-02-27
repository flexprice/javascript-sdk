# UpdateCustomerRequest

## Example Usage

```typescript
import { UpdateCustomerRequest } from "@flexprice/sdk/sdk/models";

let value: UpdateCustomerRequest = {
  dtoUpdateCustomerRequest: {},
};
```

## Fields

| Field                                                                           | Type                                                                            | Required                                                                        | Description                                                                     |
| ------------------------------------------------------------------------------- | ------------------------------------------------------------------------------- | ------------------------------------------------------------------------------- | ------------------------------------------------------------------------------- |
| `id`                                                                            | *string*                                                                        | :heavy_minus_sign:                                                              | Customer ID                                                                     |
| `externalCustomerId`                                                            | *string*                                                                        | :heavy_minus_sign:                                                              | Customer External ID                                                            |
| `dtoUpdateCustomerRequest`                                                      | [models.DtoUpdateCustomerRequest](../../sdk/models/dtoupdatecustomerrequest.md) | :heavy_check_mark:                                                              | Customer                                                                        |