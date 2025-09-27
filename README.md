# Rental Buddy – Frontend (MVP)

This is the MVP frontend for Rental Buddy, a tool to find rental comps for a given location using an interactive map and sortable data table. It follows the Product Requirements Document at `docs/rental_buddy_ui_prd.md`.

## Tech Stack

- React 18 + TypeScript + Vite
- TailwindCSS for styling
- React-Leaflet + Leaflet for maps
- React Query for data fetching/caching
- React Table (v7) for the results table
- Export libraries: papaparse (CSV), xlsx (Excel), jsPDF (PDF)
- Testing: Jest + React Testing Library (unit/integration), Cypress (E2E)

## Project Structure

```
rental-buddy-frontend/
├── docs/
│   └── rental_buddy_ui_prd.md
├── public/
│   └── robots.txt
├── src/
│   ├── api/
│   │   ├── client.ts           # API client (POST /api/v1/comps)
│   │   └── hooks.ts            # React Query hooks
│   ├── components/
│   │   ├── ExportButtons.tsx
│   │   ├── FilterPanel.tsx
│   │   ├── MapView.tsx
│   │   ├── ResultsTable.tsx
│   │   └── SearchBar.tsx
│   ├── tests/
│   │   ├── integration/
│   │   │   └── HomePage.test.tsx
│   │   └── unit/
│   │       ├── FilterPanel.test.tsx
│   │       ├── ResultsTable.test.tsx
│   │       └── SearchBar.test.tsx
│   ├── types/
│   │   └── index.ts
│   ├── utils/
│   │   └── export.ts           # CSV/Excel/PDF helpers
│   ├── App.tsx
│   ├── index.css               # Tailwind directives
│   ├── main.tsx                # React Query provider
│   └── setupTests.ts           # RTL + jest-dom setup
├── cypress/
│   ├── e2e/
│   │   └── full_flow.cy.ts
│   └── support/
│       └── e2e.ts
├── cypress.config.ts
├── index.html                   # Includes Leaflet CSS
├── jest.config.ts
├── postcss.config.js
├── tailwind.config.js
├── tsconfig.json
├── vite.config.ts
└── package.json
```

## NPM Scripts

- `dev` – Start Vite dev server
- `build` – Type-check and build for production
- `preview` – Preview the production build
- `test` – Run Jest tests (unit + integration)
- `test:watch` – Watch mode for Jest
- `cypress` – Open Cypress E2E runner
- `cypress:run` – Run Cypress headlessly
- `lint` – Run ESLint
- `format` – Run Prettier write

## Environment Variables

- `VITE_API_BASE_URL` – Base URL for the backend (e.g., `http://localhost:3000`).

Create `.env` in the project root:

```
VITE_API_BASE_URL=http://localhost:3000
```

## Development

1. Install dependencies:

```
npm install
```

2. Start the dev server:

```
npm run dev
```

3. Visit the app at:

```
http://localhost:5173
```

## Testing

- Unit and integration tests (Jest + RTL):

```
npm test
# or
npm run test:watch
```

- E2E tests (Cypress):

```
npm run cypress      # opens the Cypress UI
npm run cypress:run  # headless
```

## Implementation Notes

- `src/App.tsx` lays out the page per the PRD wireframe: header, `SearchBar`, `FilterPanel`, `MapView`, `ResultsTable`, and `ExportButtons`.
- `src/api/client.ts` implements a typed `postComps()` call to `POST /api/v1/comps` using `fetch`.
- `src/api/hooks.ts` provides `useCompsQuery(payload)` using React Query.
- `src/components/MapView.tsx` uses React-Leaflet with OSM tiles and a placeholder marker.
- `src/components/ResultsTable.tsx` uses React Table v7 with sortable columns and dummy data.
- `src/utils/export.ts` provides simple CSV/Excel/PDF export utilities.
- `index.html` includes Leaflet CSS from the CDN. You can switch to local assets later if needed.

## Next Steps (per PRD)

- Wire `SearchBar` and `FilterPanel` state to build a request payload and trigger `useCompsQuery`.
- Display loading/empty/error states aligned with the PRD.
- Render real results on `MapView` and in `ResultsTable` (and sync row selection ↔ map pin focus).
- Feed the results into `ExportButtons` to export actual data.
- Add basic accessibility passes (labels, roles, keyboard focus) and responsive refinements.

## License

Proprietary – for internal development/testing.
