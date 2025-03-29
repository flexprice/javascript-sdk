# FlexpriceClient.DtoSubscriptionPauseResponse

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**createdAt** | **String** |  | [optional] 
**createdBy** | **String** |  | [optional] 
**environmentId** | **String** | EnvironmentID is the environment identifier for the pause | [optional] 
**id** | **String** | ID is the unique identifier for the subscription pause | [optional] 
**metadata** | **{String: String}** |  | [optional] 
**originalPeriodEnd** | **String** | OriginalPeriodEnd is the end of the billing period when the pause was created | [optional] 
**originalPeriodStart** | **String** | OriginalPeriodStart is the start of the billing period when the pause was created | [optional] 
**pauseEnd** | **String** | PauseEnd is when the pause will end (null for indefinite) | [optional] 
**pauseMode** | [**TypesPauseMode**](TypesPauseMode.md) |  | [optional] 
**pauseStart** | **String** | PauseStart is when the pause actually started | [optional] 
**pauseStatus** | [**TypesPauseStatus**](TypesPauseStatus.md) |  | [optional] 
**reason** | **String** | Reason is the reason for pausing | [optional] 
**resumeMode** | [**TypesResumeMode**](TypesResumeMode.md) |  | [optional] 
**resumedAt** | **String** | ResumedAt is when the pause was actually ended (if manually resumed) | [optional] 
**status** | [**TypesStatus**](TypesStatus.md) |  | [optional] 
**subscriptionId** | **String** | SubscriptionID is the identifier for the subscription | [optional] 
**tenantId** | **String** |  | [optional] 
**updatedAt** | **String** |  | [optional] 
**updatedBy** | **String** |  | [optional] 


