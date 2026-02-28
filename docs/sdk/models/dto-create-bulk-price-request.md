# DtoCreateBulkPriceRequest

## Example Usage

```typescript
import { DtoCreateBulkPriceRequest } from "@flexprice/sdk/sdk/models";

let value: DtoCreateBulkPriceRequest = {
  items: [
    {
      billingCadence: "RECURRING",
      billingModel: "TIERED",
      billingPeriod: "DAILY",
      currency: "Gourde",
      entityId: "<id>",
      entityType: "ADDON",
      invoiceCadence: "ARREAR",
      priceUnitType: "FIAT",
      type: "FIXED",
    },
  ],
};
```

## Fields

| Field                                                                          | Type                                                                           | Required                                                                       | Description                                                                    |
| ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ |
| `items`                                                                        | [models.DtoCreatePriceRequest](../../sdk/models/dto-create-price-request.md)[] | :heavy_check_mark:                                                             | N/A                                                                            |