# FlexpriceClient.DtoTopUpWalletRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**amount** | **Number** | amount is the number of credits to add to the wallet | 
**description** | **String** | description to add any specific details about the transaction | [optional] 
**expiryDate** | **Number** | expiry_date YYYYMMDD format in UTC timezone (optional to set nil means no expiry) for ex 20250101 means the credits will expire on 2025-01-01 00:00:00 UTC hence they will be available for use until 2024-12-31 23:59:59 UTC | [optional] 
**generateInvoice** | **Boolean** | generate_invoice when true, an invoice will be generated for the transaction | [optional] 
**metadata** | **{String: String}** |  | [optional] 
**purchasedCredits** | **Boolean** | purchased_credits when true, the credits are added as purchased credits | [optional] 
**referenceId** | **String** | reference_id is the ID of the reference ex payment ID, invoice ID, request ID | [optional] 
**referenceType** | **String** | reference_type is the type of the reference ex payment, invoice, request | [optional] 


