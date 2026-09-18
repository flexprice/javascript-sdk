<!-- Start SDK Example Usage [usage] -->
```typescript
import { Flexprice } from "@flexprice/sdk";

const flexprice = new Flexprice();

async function run() {
  const result = await flexprice.addons.createAddon({
    option1: {
      apiKeyAuth: "<YOUR_API_KEY_HERE>",
    },
  }, {
    lookupKey: "<value>",
    name: "<value>",
  });

  console.log(result);
}

run();

```
<!-- End SDK Example Usage [usage] -->