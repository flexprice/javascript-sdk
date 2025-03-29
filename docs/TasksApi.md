# FlexpriceSdk.TasksApi

All URIs are relative to */v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**tasksGet**](TasksApi.md#tasksGet) | **GET** /tasks | List tasks
[**tasksIdGet**](TasksApi.md#tasksIdGet) | **GET** /tasks/{id} | Get a task by ID
[**tasksIdProcessPost**](TasksApi.md#tasksIdProcessPost) | **POST** /tasks/{id}/process | Process a task
[**tasksIdStatusPut**](TasksApi.md#tasksIdStatusPut) | **PUT** /tasks/{id}/status | Update task status
[**tasksPost**](TasksApi.md#tasksPost) | **POST** /tasks | Create a new task



## tasksGet

> DtoListTasksResponse tasksGet(opts)

List tasks

List tasks with optional filtering

### Example

```javascript
import FlexpriceSdk from '@flexprice/sdk';

let apiInstance = new FlexpriceSdk.TasksApi();
let opts = {
  'createdBy': "createdBy_example", // String | 
  'endTime': "endTime_example", // String | 
  'entityType': "entityType_example", // String | 
  'expand': "expand_example", // String | 
  'limit': 56, // Number | 
  'offset': 56, // Number | 
  'order': "order_example", // String | 
  'sort': "sort_example", // String | 
  'startTime': "startTime_example", // String | 
  'status': "status_example", // String | 
  'taskStatus': "taskStatus_example", // String | 
  'taskType': "taskType_example" // String | 
};
apiInstance.tasksGet(opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **createdBy** | **String**|  | [optional] 
 **endTime** | **String**|  | [optional] 
 **entityType** | **String**|  | [optional] 
 **expand** | **String**|  | [optional] 
 **limit** | **Number**|  | [optional] 
 **offset** | **Number**|  | [optional] 
 **order** | **String**|  | [optional] 
 **sort** | **String**|  | [optional] 
 **startTime** | **String**|  | [optional] 
 **status** | **String**|  | [optional] 
 **taskStatus** | **String**|  | [optional] 
 **taskType** | **String**|  | [optional] 

### Return type

[**DtoListTasksResponse**](DtoListTasksResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## tasksIdGet

> DtoTaskResponse tasksIdGet(id)

Get a task by ID

Get detailed information about a task

### Example

```javascript
import FlexpriceSdk from '@flexprice/sdk';

let apiInstance = new FlexpriceSdk.TasksApi();
let id = "id_example"; // String | Task ID
apiInstance.tasksIdGet(id, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| Task ID | 

### Return type

[**DtoTaskResponse**](DtoTaskResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## tasksIdProcessPost

> {String: Object} tasksIdProcessPost(id)

Process a task

Start processing a task

### Example

```javascript
import FlexpriceSdk from '@flexprice/sdk';

let apiInstance = new FlexpriceSdk.TasksApi();
let id = "id_example"; // String | Task ID
apiInstance.tasksIdProcessPost(id, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| Task ID | 

### Return type

**{String: Object}**

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## tasksIdStatusPut

> DtoTaskResponse tasksIdStatusPut(id, status)

Update task status

Update the status of a task

### Example

```javascript
import FlexpriceSdk from '@flexprice/sdk';

let apiInstance = new FlexpriceSdk.TasksApi();
let id = "id_example"; // String | Task ID
let status = new FlexpriceSdk.DtoUpdateTaskStatusRequest(); // DtoUpdateTaskStatusRequest | New status
apiInstance.tasksIdStatusPut(id, status, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| Task ID | 
 **status** | [**DtoUpdateTaskStatusRequest**](DtoUpdateTaskStatusRequest.md)| New status | 

### Return type

[**DtoTaskResponse**](DtoTaskResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## tasksPost

> DtoTaskResponse tasksPost(task)

Create a new task

Create a new import/export task

### Example

```javascript
import FlexpriceSdk from '@flexprice/sdk';

let apiInstance = new FlexpriceSdk.TasksApi();
let task = new FlexpriceSdk.DtoCreateTaskRequest(); // DtoCreateTaskRequest | Task details
apiInstance.tasksPost(task, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **task** | [**DtoCreateTaskRequest**](DtoCreateTaskRequest.md)| Task details | 

### Return type

[**DtoTaskResponse**](DtoTaskResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

