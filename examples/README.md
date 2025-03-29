# FlexPrice JavaScript SDK

This is the JavaScript client library for the FlexPrice API.

## Installation

### Node.js

```bash
npm install @flexprice/sdk --save
```

### Browser via CDN

```html
<script src="https://cdn.jsdelivr.net/npm/@flexprice/sdk/dist/flexprice-sdk.min.js"></script>
```

## Usage

```javascript
// Import the FlexPrice SDK
const FlexPrice = require('@flexprice/sdk');
// Or using ES modules:
// import * as FlexPrice from '@flexprice/sdk';

// Load environment variables (using dotenv package)
require('dotenv').config();

function main() {
  try {
    // Configure the API client with your API key
    // API keys should start with 'sk_' followed by a unique identifier
    const apiKey = process.env.FLEXPRICE_API_KEY;
    const apiHost = process.env.FLEXPRICE_API_HOST || 'api.cloud.flexprice.io';
    
    if (!apiKey) {
      console.error('ERROR: You must provide a valid FlexPrice API key');
      process.exit(1);
    }

    // Initialize the API client with your API key
    const defaultClient = FlexPrice.ApiClient.instance;
    
    // Set the base path directly to the API endpoint including /v1
    defaultClient.basePath = `https://${apiHost}/v1`;
    
    // Configure API key authorization
    const apiKeyAuth = defaultClient.authentications['ApiKeyAuth'];
    apiKeyAuth.apiKey = apiKey;
    apiKeyAuth.in = 'header';
    apiKeyAuth.name = 'x-api-key';

    // Generate a unique customer ID for this example
    const customerId = `sample-customer-${Date.now()}`;

    // Create API instances for different endpoints
    const eventsApi = new FlexPrice.EventsApi();
    const customersApi = new FlexPrice.CustomersApi();

    // Step 1: Create a customer
    console.log(`Creating customer with ID: ${customerId}...`);
    
    const customerRequest = {
      externalId: customerId,
      email: `example-${customerId}@example.com`,
      name: 'Example Customer',
      metadata: {
        source: 'javascript-sdk-example',
        createdAt: new Date().toISOString()
      }
    };

    customersApi.customersPost({ 
      dtoCreateCustomerRequest: customerRequest 
    }, function(error, data, response) {
      if (error) {
        console.error('Error creating customer:', error);
        return;
      }
      
      console.log('Customer created successfully!');

      // Step 2: Create an event
      console.log('Creating event...');
      
      // Important: Use snake_case for all property names to match the API
      const eventRequest = {
        event_name: 'Sample Event',
        external_customer_id: customerId,
        properties: {
          source: 'javascript_sample_app',
          environment: 'test',
          timestamp: new Date().toISOString()
        },
        source: 'javascript_sample_app',
        timestamp: new Date().toISOString()
      };

      // Important: Pass the event directly without wrapping it
      eventsApi.eventsPost(eventRequest, function(error, eventResult, response) {
        if (error) {
          console.error('Error creating event:', error);
          return;
        }
        
        console.log(`Event created successfully! ID: ${eventResult.event_id}`);

        // Step 3: Retrieve events for this customer
        console.log(`Retrieving events for customer ${customerId}...`);
        
        // Important: Use snake_case for parameter names
        eventsApi.eventsGet({
          external_customer_id: customerId
        }, function(error, events, response) {
          if (error) {
            console.error('Error retrieving events:', error);
            return;
          }
          
          console.log(`Found ${events.events.length} events:`);
          
          events.events.forEach((event, index) => {
            console.log(`Event ${index + 1}: ${event.id} - ${event.event_name}`);
            console.log(`Properties: ${JSON.stringify(event.properties)}`);
          });

          console.log('Example completed successfully!');
        });
      });
    });
  } catch (error) {
    console.error('Error:', error);
  }
}

main();
```

## Running the Example

To run the provided example:

1. Clone the repository:
   ```bash
   git clone https://github.com/flexprice/javascript-sdk.git
   cd javascript-sdk/examples
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Create a `.env` file with your API credentials:
   ```bash
   cp .env.sample .env
   # Edit .env with your API key
   ```

4. Run the example:
   ```bash
   npm start
   ```

## Features

- Complete API coverage
- CommonJS and ES Module support
- Browser compatibility
- Detailed documentation
- Error handling
- TypeScript definitions

## Documentation

For detailed API documentation, refer to the code comments and the official FlexPrice API documentation.

## Troubleshooting

### Authentication Issues

If you see errors related to authentication:

- Make sure your API key starts with `sk_` (for server-side usage)
- Check that the key is active and has the necessary permissions
- Use the `x-api-key` header for authentication (the SDK handles this for you)

### Property Names

Always use snake_case for property names in requests:
- ✅ `event_name`, `external_customer_id`, `page_size`
- ❌ `eventName`, `externalCustomerId`, `pageSize`

### Parameter Passing

Pass parameters directly to methods like eventsPost:
- ✅ `eventsApi.eventsPost(eventRequest, callback)`
- ❌ `eventsApi.eventsPost({ dtoIngestEventRequest: eventRequest }, callback)`

### Callback vs Promise Error

The SDK uses callback-style API calls instead of Promises. If you see an error like:

```
Warning: superagent request was sent twice, because both .end() and .then() were called.
```

Make sure you're using the callback pattern shown in the examples, not trying to `await` the API calls.

### Network or Connectivity Issues

If you encounter network-related errors:

- Check your internet connection
- Verify that the API host is accessible from your environment
- Look for firewall or proxy settings that might block API requests

### Using the SDK in a Browser

When using the SDK in a browser, remember:

- CORS restrictions might apply - ensure your domain is whitelisted
- Never expose API keys in client-side code - use a proxy or backend service
- Some features might be limited in browser environments

## TypeScript Usage

The package includes TypeScript definitions:

```typescript
import * as FlexPrice from '@flexprice/sdk';

// Configure the client
const client = FlexPrice.ApiClient.instance;
// ... rest of the configuration

// Type-safe API calls with correct property names
const api = new FlexPrice.EventsApi();

const eventRequest = {
  event_name: 'Sample Event',
  external_customer_id: 'customer-123',
  properties: { key: 'value' },
  source: 'typescript_example',
  timestamp: new Date().toISOString()
};

api.eventsPost(eventRequest, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log(data);
  }
});
``` 