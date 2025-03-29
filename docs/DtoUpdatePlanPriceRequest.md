# FlexpriceSdk.DtoUpdatePlanPriceRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**amount** | **String** |  | [optional] 
**billingCadence** | [**TypesBillingCadence**](TypesBillingCadence.md) |  | 
**billingModel** | [**TypesBillingModel**](TypesBillingModel.md) |  | 
**billingPeriod** | [**TypesBillingPeriod**](TypesBillingPeriod.md) |  | 
**billingPeriodCount** | **Number** |  | 
**currency** | **String** |  | 
**description** | **String** |  | [optional] 
**filterValues** | **{String: [String]}** |  | [optional] 
**id** | **String** | The ID of the price to update (present if the price is being updated) | [optional] 
**invoiceCadence** | [**TypesInvoiceCadence**](TypesInvoiceCadence.md) |  | 
**lookupKey** | **String** |  | [optional] 
**metadata** | **{String: String}** |  | [optional] 
**meterId** | **String** |  | [optional] 
**planId** | **String** |  | [optional] 
**tierMode** | [**TypesBillingTier**](TypesBillingTier.md) |  | [optional] 
**tiers** | [**[DtoCreatePriceTier]**](DtoCreatePriceTier.md) |  | [optional] 
**transformQuantity** | [**PriceTransformQuantity**](PriceTransformQuantity.md) |  | [optional] 
**trialPeriod** | **Number** |  | [optional] 
**type** | [**TypesPriceType**](TypesPriceType.md) |  | 


