# FlexpriceSdk.DtoCreateWalletRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**autoTopupAmount** | **Number** |  | [optional] 
**autoTopupMinBalance** | **Number** |  | [optional] 
**autoTopupTrigger** | [**TypesAutoTopupTrigger**](TypesAutoTopupTrigger.md) |  | [optional] 
**config** | [**TypesWalletConfig**](TypesWalletConfig.md) |  | [optional] 
**conversionRate** | **Number** | amount in the currency &#x3D;  number of credits * conversion_rate ex if conversion_rate is 1, then 1 USD &#x3D; 1 credit ex if conversion_rate is 2, then 1 USD &#x3D; 0.5 credits ex if conversion_rate is 0.5, then 1 USD &#x3D; 2 credits | [optional] 
**currency** | **String** |  | 
**customerId** | **String** |  | 
**description** | **String** |  | [optional] 
**initialCreditsToLoad** | **Number** | initial_credits_to_load is the number of credits to load to the wallet if not provided, the wallet will be created with 0 balance NOTE: this is not the amount in the currency, but the number of credits | [optional] 
**initialCreditsToLoadExpiryDate** | **Number** | initial_credits_to_load_expiry_date YYYYMMDD format in UTC timezone (optional to set nil means no expiry) for ex 20250101 means the credits will expire on 2025-01-01 00:00:00 UTC hence they will be available for use until 2024-12-31 23:59:59 UTC | [optional] 
**metadata** | **{String: String}** |  | [optional] 
**name** | **String** |  | [optional] 
**walletType** | [**TypesWalletType**](TypesWalletType.md) |  | [optional] 


