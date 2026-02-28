# DtoSubscriptionPhaseResponse

## Example Usage

```typescript
import { DtoSubscriptionPhaseResponse } from "@flexprice/sdk/sdk/models";

let value: DtoSubscriptionPhaseResponse = {};
```

## Fields

| Field                                                                       | Type                                                                        | Required                                                                    | Description                                                                 |
| --------------------------------------------------------------------------- | --------------------------------------------------------------------------- | --------------------------------------------------------------------------- | --------------------------------------------------------------------------- |
| `createdAt`                                                                 | *string*                                                                    | :heavy_minus_sign:                                                          | N/A                                                                         |
| `createdBy`                                                                 | *string*                                                                    | :heavy_minus_sign:                                                          | N/A                                                                         |
| `endDate`                                                                   | *string*                                                                    | :heavy_minus_sign:                                                          | EndDate is when the phase ends (nil if phase is still active or indefinite) |
| `environmentId`                                                             | *string*                                                                    | :heavy_minus_sign:                                                          | EnvironmentID is the environment identifier for the phase                   |
| `id`                                                                        | *string*                                                                    | :heavy_minus_sign:                                                          | ID is the unique identifier for the subscription phase                      |
| `metadata`                                                                  | Record<string, *string*>                                                    | :heavy_minus_sign:                                                          | N/A                                                                         |
| `startDate`                                                                 | *string*                                                                    | :heavy_minus_sign:                                                          | StartDate is when the phase starts                                          |
| `status`                                                                    | [models.Status](../../sdk/models/status.md)                                 | :heavy_minus_sign:                                                          | N/A                                                                         |
| `subscriptionId`                                                            | *string*                                                                    | :heavy_minus_sign:                                                          | SubscriptionID is the identifier for the subscription                       |
| `tenantId`                                                                  | *string*                                                                    | :heavy_minus_sign:                                                          | N/A                                                                         |
| `updatedAt`                                                                 | *string*                                                                    | :heavy_minus_sign:                                                          | N/A                                                                         |
| `updatedBy`                                                                 | *string*                                                                    | :heavy_minus_sign:                                                          | N/A                                                                         |