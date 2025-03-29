# FlexpriceClient.DtoSubscriptionResponse

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**activePauseId** | **String** | ActivePauseID references the current active pause configuration This will be null if no pause is active or scheduled | [optional] 
**billingAnchor** | **String** | BillingAnchor is the reference point that aligns future billing cycle dates. It sets the day of week for week intervals, the day of month for month and year intervals, and the month of year for year intervals. The timestamp is in UTC format. | [optional] 
**billingCadence** | [**TypesBillingCadence**](TypesBillingCadence.md) |  | [optional] 
**billingPeriod** | [**TypesBillingPeriod**](TypesBillingPeriod.md) |  | [optional] 
**billingPeriodCount** | **Number** | BillingPeriodCount is the total number units of the billing period. | [optional] 
**cancelAt** | **String** | CancelAt is the date the subscription will be canceled | [optional] 
**cancelAtPeriodEnd** | **Boolean** | CancelAtPeriodEnd is whether the subscription was canceled at the end of the current period | [optional] 
**cancelledAt** | **String** | CanceledAt is the date the subscription was canceled | [optional] 
**createdAt** | **String** |  | [optional] 
**createdBy** | **String** |  | [optional] 
**currency** | **String** | Currency is the currency of the subscription in lowercase 3 digit ISO codes | [optional] 
**currentPeriodEnd** | **String** | CurrentPeriodEnd is the end of the current period that the subscription has been invoiced for. At the end of this period, a new invoice will be created. | [optional] 
**currentPeriodStart** | **String** | CurrentPeriodStart is the end of the current period that the subscription has been invoiced for. At the end of this period, a new invoice will be created. | [optional] 
**customer** | [**DtoCustomerResponse**](DtoCustomerResponse.md) |  | [optional] 
**customerId** | **String** | CustomerID is the identifier for the customer in our system | [optional] 
**endDate** | **String** | EndDate is the end date of the subscription | [optional] 
**environmentId** | **String** | EnvironmentID is the environment identifier for the subscription | [optional] 
**id** | **String** | ID is the unique identifier for the subscription | [optional] 
**lineItems** | [**[SubscriptionSubscriptionLineItem]**](SubscriptionSubscriptionLineItem.md) |  | [optional] 
**lookupKey** | **String** | LookupKey is the key used to lookup the subscription in our system | [optional] 
**metadata** | **{String: String}** |  | [optional] 
**pauseStatus** | [**TypesPauseStatus**](TypesPauseStatus.md) |  | [optional] 
**pauses** | [**[SubscriptionSubscriptionPause]**](SubscriptionSubscriptionPause.md) |  | [optional] 
**plan** | [**DtoPlanResponse**](DtoPlanResponse.md) |  | [optional] 
**planId** | **String** | PlanID is the identifier for the plan in our system | [optional] 
**startDate** | **String** | StartDate is the start date of the subscription | [optional] 
**status** | [**TypesStatus**](TypesStatus.md) |  | [optional] 
**subscriptionStatus** | [**TypesSubscriptionStatus**](TypesSubscriptionStatus.md) |  | [optional] 
**tenantId** | **String** |  | [optional] 
**trialEnd** | **String** | TrialEnd is the end date of the trial period | [optional] 
**trialStart** | **String** | TrialStart is the start date of the trial period | [optional] 
**updatedAt** | **String** |  | [optional] 
**updatedBy** | **String** |  | [optional] 
**version** | **Number** | Version is used for optimistic locking | [optional] 


