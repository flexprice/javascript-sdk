# FlexpriceSdk.DtoTopUpWalletRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**amount** | **Number** | amount is the amount in the currency of the wallet to be added NOTE: this is not the number of credits to add, but the amount in the currency amount &#x3D; credits_to_add * conversion_rate if both amount and credits_to_add are provided, amount will be ignored ex if the wallet has a conversion_rate of 2 then adding an amount of 10 USD in the wallet wil add 5 credits in the wallet | [optional] 
**creditsToAdd** | **Number** | credits_to_add is the number of credits to add to the wallet | [optional] 
**description** | **String** | description to add any specific details about the transaction | [optional] 
**expiryDateUtc** | **String** | expiry_date_utc is the expiry date in UTC timezone ex 2025-01-01 00:00:00 UTC | [optional] 
**idempotencyKey** | **String** | idempotency_key is a unique key for the transaction | 
**metadata** | **{String: String}** |  | [optional] 
**transactionReason** | [**TypesTransactionReason**](TypesTransactionReason.md) |  | 


