# FlexpriceSdk.DtoCreateInvoiceRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**amountDue** | **Number** |  | 
**amountPaid** | **Number** |  | [optional] 
**billingPeriod** | **String** |  | [optional] 
**billingReason** | [**TypesInvoiceBillingReason**](TypesInvoiceBillingReason.md) |  | [optional] 
**currency** | **String** |  | 
**customerId** | **String** |  | 
**description** | **String** |  | [optional] 
**dueDate** | **String** |  | [optional] 
**environmentId** | **String** |  | [optional] 
**idempotencyKey** | **String** |  | [optional] 
**invoiceStatus** | [**TypesInvoiceStatus**](TypesInvoiceStatus.md) |  | [optional] 
**invoiceType** | [**TypesInvoiceType**](TypesInvoiceType.md) |  | [optional] 
**lineItems** | [**[DtoCreateInvoiceLineItemRequest]**](DtoCreateInvoiceLineItemRequest.md) |  | [optional] 
**metadata** | **{String: String}** |  | [optional] 
**paymentStatus** | [**TypesPaymentStatus**](TypesPaymentStatus.md) |  | [optional] 
**periodEnd** | **String** |  | [optional] 
**periodStart** | **String** |  | [optional] 
**subscriptionId** | **String** |  | [optional] 


