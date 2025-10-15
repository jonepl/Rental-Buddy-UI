# Rental Buddy – Frontend PRD (MVP)

## 1. Objective & Scope
Rental Buddy enables **real estate investors, homebuyers, and renters** to quickly determine rental comps for a given address.  
This MVP version supports:  
- Address input with autocomplete or map click  
- Parameter filters (price, bedrooms, bathrooms, sqft, radius)  
- API request to backend (`/api/v1/comps`)  
- Displaying results in an **interactive map** and **sortable data table**  
- Exporting results to **CSV, PDF, and Excel**

---

## 2. User Workflow
1. User enters an address in the search bar (autocomplete enabled).  
2. User can alternatively click a map to drop a pin.  
3. User sets optional filters (price, beds, baths, sqft, days old) and required radius.  
4. User clicks **Search** → request sent to backend.  
5. Results shown on:
   - Map (pins for comps)  
   - Sortable data table  
6. User can export results.  

---

## 3. Wireframes

### 3.1 Home/Search Screen
```
------------------------------------------------------
| Rental Buddy (logo / header)                       |
------------------------------------------------------
| [ Address Search Bar ........................... ] |
|                                                    |
| Filters:  Price [____]  Beds [__]  Baths [__]      |
|          SqFt [____]  Radius [__ mi]  Days Old [__]|
|                                                    |
| [ Search Button ]   [ Clear ]                      |
------------------------------------------------------
|                     MapView                        |
|   +--------------------------------------------+   |
|   |                                            |   |
|   |          [ Interactive Map Here ]          |   |
|   |     - Pin for search location              |   |
|   |     - Pins for comps                       |   |
|   |                                            |   |
|   +--------------------------------------------+   |
------------------------------------------------------
```

### 3.2 Results Section
```
------------------------------------------------------
| Results (sortable table)                          |
------------------------------------------------------
| Address            | Price  | Beds | Baths | SqFt |
|----------------------------------------------------|
| 123 Main St...     | $2600  | 2    | 2.5   | 1182 |
| 456 Oak Ave...     | $2450  | 2    | 2.0   | 1025 |
| ...                | ...    | ...  | ...   | ...  |
------------------------------------------------------
| [Export CSV] [Export PDF] [Export Excel]          |
------------------------------------------------------
```

- Clicking a row highlights the corresponding pin on the map.  
- Sorting available for `Price`, `Beds`, `Baths`, `SqFt`, `Days on Market`.  

### 3.3 Error/Empty States
```
------------------------------------------------------
| ❌ No results found for your search.              |
| Try adjusting filters or expanding radius.        |
------------------------------------------------------

------------------------------------------------------
| ⚠️  Error connecting to the server.               |
| Please try again later.                           |
------------------------------------------------------
```

---

## 4. Features

### Search & Filters
- Address autocomplete (US addresses, 3–5 suggestions).  
- Map click-to-set location (updates pin & lat/lon).  
- Filters: price, bedrooms, bathrooms, square footage, radius, days old.  

### Results Display
- Interactive **Leaflet map** with pins.  
- Sortable **data table** for comps.  
- Row selection highlights pin.  

### Export
- Download results as **CSV, PDF, Excel**.  

---

## 5. API Integration
- Endpoint: `POST /api/v1/comps`  

### Request Rules
- You must provide either `address` OR both `latitude` and `longitude`.
- Do not include both `address` and coordinates in the same request.
- `radius_miles` is required.

### Request Example (address)
```json
{
  "address": "123 Main St, Austin, TX",
  "radius_miles": 5
}
```

### Alternate Request Example (coordinates)
```json
{
  "latitude": 30.2672,
  "longitude": -97.7431,
  "radius_miles": 5
}
```

### Response Example
```json
{
  "input": {
    "resolved_address": "123 Main St, Austin, TX",
    "latitude": 30.2672,
    "longitude": -97.7431,
    "bedrooms": 2,
    "bathrooms": 1.5,
    "radius_miles": 5.0,
    "days_old": "*:270"
  },
  "comps": [
    {
      "address": "789 Pine St, Austin, TX 78703",
      "city": "Austin",
      "state": "TX",
      "zip_code": "78703",
      "county": "Travis",
      "longitude": -97.750000,
      "latitude": 30.270000,
      "price": 2300,
      "bedrooms": 2,
      "bathrooms": 1.5,
      "square_footage": 900,
      "distance_miles": 1.0
    }
  ]
}
```

---

## 6. Technical Requirements

### Stack
- **React + TypeScript**  
- **UI**: TailwindCSS  
- **Maps**: Leaflet.js  
- **Tables**: React Table  
- **State Management**: React Query  

### Export
- CSV → `papaparse`  
- Excel → `xlsx`  
- PDF → `jspdf`  

---

## 7. Testing Requirements

### Unit Tests
- SearchBar: validates input, shows suggestions.  
- FilterPanel: validates numeric input, defaults radius=5.  
- ResultsTable: renders rows, sorts by price, sqft, DOM.  

### Integration Tests
- HomePage: search submit triggers API call.  
- Displays results in both map + table.  
- Handles empty/error states gracefully.  

### E2E Tests (Cypress/Playwright)
- Full user flow: enter address, set filters, submit → results render.  
- Map pin highlights when table row clicked.  
- Export produces valid CSV/PDF/Excel.  
- Edge cases: invalid input, no comps.  

---

## 8. Non-Functional Requirements
- **Responsive design** (mobile/tablet/desktop)  
- **Accessibility** (WCAG 2.1 AA)  
- **Performance**: handle 100–200 results without lag  

---

## 9. Out of Scope for MVP (Future Features)

### Property & Neighborhood Insights
- Car dependency score  
- Transit access indicators  
- Local school quality ratings  
- Crime ratings/heatmaps  

### Advanced Search & Automation
- Scheduled queries for recurring comp reports  
- Map boundary (polygon) search  

### User Accounts & Personalization
- User login / authentication  
- Profile page (saved searches, preferences, schedules)  
- Email delivery of scheduled reports  

---

## 10. Technical Architecture

### 10.1 Framework & Core Setup
- **Framework**: React 18 + TypeScript  
- **Bundler**: Vite  
- **Styling**: TailwindCSS  
- **Routing**: React Router v6 (optional for MVP)  
- **State/Data Management**: React Query + local state  

### 10.2 Libraries & Dependencies
- UI: `tailwindcss`, `@headlessui/react`, `react-icons`  
- Maps: `react-leaflet`, `leaflet`  
- Data: `@tanstack/react-query`, `react-table`, `papaparse`, `xlsx`, `jspdf`  
- Testing: `jest`, `@testing-library/react`, `@testing-library/jest-dom`, `cypress`  
- Dev: `eslint`, `prettier`, `husky`, `lint-staged`  

### 10.3 Suggested File Structure
```
rental-buddy-frontend/
├── public/
├── src/
│   ├── api/                # API client & query hooks
│   ├── components/         # Reusable UI components
│   ├── hooks/              # Custom React hooks
│   ├── pages/              # Page-level components
│   ├── types/              # TypeScript interfaces
│   ├── utils/              # Helpers
│   ├── tests/              # Unit/integration tests
│   ├── App.tsx
│   ├── main.tsx
│   └── index.css
├── cypress/                # E2E tests
├── package.json
├── tsconfig.json
├── tailwind.config.js
└── vite.config.ts
```

### 10.4 State & Data Flow
1. Filters in `SearchBar` + `FilterPanel`.  
2. Submit triggers API call via React Query.  
3. Results cached and shown in `MapView` + `ResultsTable`.  
4. Export pulls from cache.  

### 10.5 Testing Strategy
- **Unit Tests**: inputs, table sorting.  
- **Integration Tests**: search → results → error states.  
- **E2E Tests**: full flow, map + table sync, export files.  

### 10.6 Deployment
- Target: Vercel/Netlify or Docker + Nginx.  
- Config: `.env` with `VITE_API_BASE_URL`.  
