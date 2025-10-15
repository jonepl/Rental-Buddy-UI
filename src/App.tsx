import React from 'react';
import SearchBar from './components/SearchBar';
import FilterPanel from './components/FilterPanel';
import MapView from './components/MapView';
import ResultsTable from './components/ResultsTable';
import ExportButtons from './components/ExportButtons';
import { useCompsQuery } from './api/hooks';
import type { SearchFilters, SearchFormState, Comp } from './types';
import { MapSkeleton, TableSkeleton } from './components/Skeletons';

function App() {
  const [address, setAddress] = React.useState(() => {
    try {
      const url = new URL(window.location.href);
      return url.searchParams.get('address') ?? '';
    } catch {
      return '';
    }
  });
  const [filters, setFilters] = React.useState<SearchFilters>({ radius_miles: 5 });
  const [submitted, setSubmitted] = React.useState<SearchFormState | undefined>(undefined);
  const [selectedId, setSelectedId] = React.useState<string | undefined>(undefined);
  const [coords, setCoords] = React.useState<{ latitude?: number; longitude?: number }>({});
  const [hoveredId, setHoveredId] = React.useState<string | undefined>(undefined);

  const { data, isLoading, isError, error, refetch, isFetching } = useCompsQuery(
    submitted
      ? (() => {
          const hasCoords = submitted.latitude != null && submitted.longitude != null;
          const base = {
            radius_miles: submitted.radius_miles,
            bedrooms: submitted.bedrooms,
            bathrooms: submitted.bathrooms,
            days_old: submitted.days_old,
          } as const;
          if (hasCoords) {
            return {
              ...base,
              latitude: submitted.latitude!,
              longitude: submitted.longitude!,
            };
          }
          return {
            ...base,
            address: submitted.address || '',
          };
        })()
      : undefined
  );

  const comps: Comp[] = data?.comps ?? [];

  const onSubmit = () => {
    if ((filters.radius_miles ?? 0) <= 0) return;
    const hasCoords = coords.latitude != null && coords.longitude != null;
    // Build submitted state: address XOR coords
    const nextSubmitted = hasCoords
      ? ({ ...filters, latitude: coords.latitude!, longitude: coords.longitude! } as SearchFormState)
      : ({ ...filters, address } as SearchFormState);
    setSubmitted(nextSubmitted);
    setSelectedId(undefined);
    if (submitted) refetch();
  };

  const onClear = () => {
    setAddress('');
    setFilters({ radius_miles: 5 });
    setSubmitted(undefined);
    setSelectedId(undefined);
    setCoords({});
  };

  const hasResults = comps.length > 0;

  return (
    <div className="min-h-screen flex flex-col">
      <header className="w-full border-b bg-white">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <h1 className="text-2xl font-bold">Rental Buddy</h1>
        </div>
      </header>

      <main className="flex-1 max-w-7xl mx-auto w-full px-4 py-6 space-y-4">
        <SearchBar
          value={address}
          onChange={(v) => {
            setAddress(v);
            // If user edits text after choosing a suggestion, clear coords so we default back to address-only
            if (v.length < 3) setCoords({});
          }}
          onSubmit={onSubmit}
          onClear={onClear}
          onSelectSuggestion={(s) => setCoords({ latitude: s.latitude, longitude: s.longitude })}
        />
        <FilterPanel filters={filters} onChange={setFilters} />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
          <div className="h-[400px]">
            {isLoading || isFetching ? (
              <MapSkeleton />
            ) : (
              <MapView
                comps={comps}
                selectedId={selectedId}
                onSelect={setSelectedId}
                onMapClick={(lat, lng) => setCoords({ latitude: lat, longitude: lng })}
                searchLocation={coords.latitude && coords.longitude ? { latitude: coords.latitude, longitude: coords.longitude } : undefined}
                hoveredId={hoveredId}
                onHover={setHoveredId}
              />
            )}
          </div>
          <div>
            {isLoading || isFetching ? (
              <TableSkeleton />
            ) : isError ? (
              <div className="p-4 border rounded bg-white text-red-700">Error: {error instanceof Error ? error.message : 'Unknown error'}</div>
            ) : hasResults ? (
              <ResultsTable
                data={comps}
                selectedId={selectedId}
                onSelect={setSelectedId}
                hoveredId={hoveredId}
                onHover={setHoveredId}
              />
            ) : submitted ? (
              <div className="p-4 border rounded bg-white">No results found for your search. Try adjusting filters or expanding radius.</div>
            ) : (
              <div className="p-4 border rounded bg-white">Enter an address and set a radius to search for comps.</div>
            )}

            <div className="mt-4">
              <ExportButtons data={comps} />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;
