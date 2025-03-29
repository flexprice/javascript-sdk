# FlexpriceSdk.DtoPriceResponse

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**amount** | **Number** | Amount stored in main currency units (e.g., dollars, not cents) For USD: 12.50 means $12.50 | [optional] 
**billingCadence** | [**TypesBillingCadence**](TypesBillingCadence.md) |  | [optional] 
**billingModel** | [**TypesBillingModel**](TypesBillingModel.md) |  | [optional] 
**billingPeriod** | [**TypesBillingPeriod**](TypesBillingPeriod.md) |  | [optional] 
**billingPeriodCount** | **Number** | BillingPeriodCount is the count of the billing period ex 1, 3, 6, 12 | [optional] 
**createdAt** | **String** |  | [optional] 
**createdBy** | **String** |  | [optional] 
**currency** | **String** | Currency 3 digit ISO currency code in lowercase ex usd, eur, gbp | [optional] 
**description** | **String** | Description of the price | [optional] 
**displayAmount** | **String** | DisplayAmount is the formatted amount with currency symbol For USD: $12.50 | [optional] 
**environmentId** | **String** | EnvironmentID is the environment identifier for the price | [optional] 
**filterValues** | **{String: [String]}** |  | [optional] 
**id** | **String** | ID uuid identifier for the price | [optional] 
**invoiceCadence** | [**TypesInvoiceCadence**](TypesInvoiceCadence.md) |  | [optional] 
**lookupKey** | **String** | LookupKey used for looking up the price in the database | [optional] 
**metadata** | **{String: String}** |  | [optional] 
**meter** | [**DtoMeterResponse**](DtoMeterResponse.md) |  | [optional] 
**meterId** | **String** | MeterID is the id of the meter for usage based pricing | [optional] 
**planId** | **String** | PlanID is the id of the plan for plan based pricing | [optional] 
**status** | [**TypesStatus**](TypesStatus.md) |  | [optional] 
**tenantId** | **String** |  | [optional] 
**tierMode** | [**TypesBillingTier**](TypesBillingTier.md) |  | [optional] 
**tiers** | [**[PricePriceTier]**](PricePriceTier.md) |  | [optional] 
**transformQuantity** | [**PriceJSONBTransformQuantity**](PriceJSONBTransformQuantity.md) |  | [optional] 
**trialPeriod** | **Number** | TrialPeriod is the number of days for the trial period Note: This is only applicable for recurring prices (BILLING_CADENCE_RECURRING) | [optional] 
**type** | [**TypesPriceType**](TypesPriceType.md) |  | [optional] 
**updatedAt** | **String** |  | [optional] 
**updatedBy** | **String** |  | [optional] 


