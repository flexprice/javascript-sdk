<!-- Start SDK Example Usage [usage] -->
```typescript
import { Flexprice } from "@flexprice/sdk";

const flexprice = new Flexprice({
  serverURL: "https://api.example.com",
  apiKeyAuth: "<YOUR_API_KEY_HERE>",
});

async function run() {
  const result = await flexprice.addons.createAddon({
    lookupKey: "<value>",
    name: "<value>",
    type: "multiple_instance",
  });

  console.log(result);
}

run();

```
<!-- End SDK Example Usage [usage] -->