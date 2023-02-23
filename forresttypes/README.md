# Forrest Types

This is the source code for Forrest Types. A collection of thoughts, stories and ideas.

## Getting Started

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

### Pages
- `/index` - A homepage of the application.
- `/entries` - Displays a list of current entries.
- `/entries/[entry]` - Displays the content for a specific entry.

### APIs
- `/health` - provides thes status of the application.
- `/entries` - Provides a list of all relevant entries.
- `/entries/[entry]` - Provides the content for a specified entry id. 

### Services
- `data` - provides data services for the api and SSR pages.
- `entries` - service layer to provide entry data.