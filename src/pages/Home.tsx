import React from 'react';
import SearchBar from '../components/SearchBar';
import type { GeocodeSuggestion } from '../api/geocode';

interface HomeProps {
  searchValue?: string;
  onSearchChange?: (v: string) => void;
  onSearchSubmit?: () => void;
  onSearchClear?: () => void;
  onSelectSuggestion?: (s: GeocodeSuggestion) => void;
}

function Home({
  searchValue,
  onSearchChange,
  onSearchSubmit,
  onSearchClear,
  onSelectSuggestion,
}: HomeProps) {
  // Local fallback state so Home can render standalone without props
  const [localValue, setLocalValue] = React.useState('');
  const value = searchValue ?? localValue;
  const handleChange = onSearchChange ?? setLocalValue;
  const handleSubmit = onSearchSubmit ?? (() => {
    if (value && value.trim().length > 0) {
      window.location.href = `/search?address=${encodeURIComponent(value.trim())}`;
    }
  });
  const handleClear = onSearchClear ?? (() => setLocalValue(''));

  return (
    <div className="min-h-screen text-white" style={{ backgroundColor: '#0F1620' }}>
      {/* Navbar */}
      <header className="absolute top-0 left-0 right-0 z-20">
        <div className="max-w-[1200px] mx-auto px-6 h-16 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-7 h-7 rounded-full flex items-center justify-center" style={{ backgroundColor: '#EB6753' }}>
              <span className="text-white text-xs font-bold">RB</span>
            </div>
            <span className="font-semibold">Rental Buddy</span>
          </div>
          <button
            className="px-4 py-2 rounded-full text-white hover:bg-white/10 transition focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-brand-500/35"
            type="button"
            onClick={() => window.location.href = '/signin'}
          >
            Sign up or Log in
          </button>
        </div>
      </header>

      {/* Hero */}
      <section
        className="relative w-screen min-h-screen bg-center bg-cover bg-no-repeat text-white flex items-center justify-center"
        style={{ backgroundImage: "url('/rb_hero.jpg')" }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/55 via-black/45 to-black/35" />
        <div className="relative z-10 max-w-[900px] mx-auto px-6 flex flex-col items-center gap-7 text-center">
          <div className="uppercase tracking-[0.12em] opacity-85 text-sm">THE BEST WAY TO</div>
          <h1 className="font-extrabold text-4xl sm:text-6xl leading-tight">Find Your Next Rental Property</h1>
          <p className="text-lg sm:text-xl opacity-85">We’ve more than 745,000 apartments, places & plots.</p>

          {/* Search control: reuse existing SearchBar component */}
          <div className="w-[92vw] max-w-[920px]">
            <SearchBar
              value={value}
              onChange={handleChange}
              onSubmit={handleSubmit}
              onClear={handleClear}
              onSelectSuggestion={onSelectSuggestion}
              variant="hero"
            />
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;
