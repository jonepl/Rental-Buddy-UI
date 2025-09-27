import React from 'react';
import SearchBar from './components/SearchBar';
import FilterPanel from './components/FilterPanel';
import MapView from './components/MapView';
import ResultsTable from './components/ResultsTable';
import ExportButtons from './components/ExportButtons';

function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <header className="w-full border-b bg-white">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <h1 className="text-2xl font-bold">Rental Buddy</h1>
        </div>
      </header>

      <main className="flex-1 max-w-7xl mx-auto w-full px-4 py-6 space-y-4">
        <SearchBar />
        <FilterPanel />
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
          <div className="h-[400px]">
            <MapView />
          </div>
          <div>
            <ResultsTable />
            <div className="mt-4">
              <ExportButtons />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;
