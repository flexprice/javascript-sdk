# FlexpriceSdk.DtoGetEventsRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**endTime** | **String** | End time of the events to be fetched in ISO 8601 format Defaults to now if not provided | [optional] 
**eventId** | **String** | Event ID is the idempotency key for the event | [optional] 
**eventName** | **String** | Event name / Unique identifier for the event in your system | [optional] 
**externalCustomerId** | **String** | Customer ID in your system that was sent with the event | [optional] 
**iterFirstKey** | **String** | First key to iterate over the events | [optional] 
**iterLastKey** | **String** | Last key to iterate over the events | [optional] 
**offset** | **Number** | Offset to fetch the events and is set to 0 by default | [optional] 
**pageSize** | **Number** | Page size to fetch the events and is set to 50 by default | [optional] 
**propertyFilters** | **{String: [String]}** | Property filters to filter the events by the keys in &#x60;properties&#x60; field of the event | [optional] 
**source** | **String** | Source to filter the events by the source | [optional] 
**startTime** | **String** | Start time of the events to be fetched in ISO 8601 format Defaults to last 7 days from now if not provided | [optional] 


