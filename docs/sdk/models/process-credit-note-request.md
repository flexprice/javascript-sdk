# ProcessCreditNoteRequest

## Example Usage

```typescript
import { ProcessCreditNoteRequest } from "@flexprice/sdk/sdk/models";

let value: ProcessCreditNoteRequest = {
  id: "<id>",
};
```

## Fields

| Field                                                                                | Type                                                                                 | Required                                                                             | Description                                                                          |
| ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ |
| `id`                                                                                 | *string*                                                                             | :heavy_check_mark:                                                                   | Credit note ID                                                                       |
| `body`                                                                               | [models.FinalizeCreditNoteRequest](../../sdk/models/finalize-credit-note-request.md) | :heavy_minus_sign:                                                                   | Finalize options                                                                     |