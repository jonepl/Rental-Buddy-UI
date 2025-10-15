import React from 'react';
import { searchAddresses, type GeocodeSuggestion } from '../api/geocode';

interface Props {
  value: string;
  onChange: (v: string) => void;
  onSubmit: () => void;
  onClear: () => void;
  onSelectSuggestion?: (s: GeocodeSuggestion) => void;
  variant?: 'default' | 'hero';
}

const SearchBar: React.FC<Props> = ({ value, onChange, onSubmit, onClear, onSelectSuggestion, variant = 'default' }) => {
  const [suggestions, setSuggestions] = React.useState<GeocodeSuggestion[]>([]);
  const [open, setOpen] = React.useState(false);
  const abortRef = React.useRef<AbortController | null>(null);

  // Debounced fetch for suggestions
  React.useEffect(() => {
    setOpen(false);
    setSuggestions([]);
    if (!value || value.trim().length < 3) return;
    const handle = setTimeout(async () => {
      try {
        abortRef.current?.abort();
        abortRef.current = new AbortController();
        const results = await searchAddresses(value, 5);
        setSuggestions(results);
        setOpen(true);
      } catch {
        // noop
      }
    }, 250);
    return () => clearTimeout(handle);
  }, [value]);

  const suggestionsList = (
    open && suggestions.length > 0 && (
      <ul className="absolute z-10 mt-1 w-full max-h-60 overflow-auto bg-white border rounded shadow">
        {suggestions.map((s, idx) => (
          <li
            key={`${s.latitude}-${s.longitude}-${idx}`}
            className="px-3 py-2 hover:bg-gray-100 cursor-pointer text-sm"
            onMouseDown={(e) => e.preventDefault()}
            onClick={() => {
              onChange(s.label);
              onSelectSuggestion?.(s);
              setOpen(false);
            }}
          >
            {s.label}
          </li>
        ))}
      </ul>
    )
  );

  if (variant === 'hero') {
    return (
      <div className="w-full relative">
        <form
          className="w-[92vw] max-w-[920px] h-16 bg-white rounded-[9999px] shadow-[0_12px_30px_rgba(0,0,0,0.20)] border border-black/5 flex items-center pl-5 pr-2 gap-3"
          onSubmit={(e) => {
            e.preventDefault();
            onSubmit();
          }}
        >
          {/* Leading icon */}
          <div className="text-gray-400" aria-hidden>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5S10.62 6.5 12 6.5s2.5 1.12 2.5 2.5S13.38 11.5 12 11.5z" fill="currentColor"/>
            </svg>
          </div>
          <input
            id="address"
            className="flex-1 bg-transparent text-base text-gray-900 placeholder:text-gray-400 focus:outline-none"
            placeholder="Enter an address, neighborhood, city, or ZIP code"
            value={value}
            onChange={(e) => onChange(e.target.value)}
            onFocus={() => value.length >= 3 && suggestions.length > 0 && setOpen(true)}
          />
          <button
            type="submit"
            className="grid place-items-center w-12 h-12 rounded-full bg-brand-500 hover:bg-brand-600 focus:ring-4 focus:ring-brand-500/35 text-white"
            aria-label="Search"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M15.5 14h-.79l-.28-.27A6.471 6.471 0 0016 9.5 6.5 6.5 0 109.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zM9.5 14C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z" fill="currentColor"/>
            </svg>
          </button>
        </form>
        {suggestionsList}
      </div>
    );
  }

  // Default variant
  return (
    <div className="w-full relative">
      <label className="block text-sm font-medium mb-1" htmlFor="address">Address</label>
      <form
        className="flex gap-2"
        onSubmit={(e) => {
          e.preventDefault();
          onSubmit();
        }}
      >
        <input
          id="address"
          className="flex-1 border rounded px-3 py-2"
          placeholder="Enter address or click on map"
          value={value}
          onChange={(e) => onChange(e.target.value)}
          onFocus={() => value.length >= 3 && suggestions.length > 0 && setOpen(true)}
        />
        <button type="submit" className="px-4 py-2 bg-blue-600 text-white rounded">Search</button>
        <button type="button" className="px-4 py-2 bg-gray-200 rounded" onClick={onClear}>Clear</button>
      </form>
      {suggestionsList}
      <p className="text-xs text-gray-500 mt-1">Autocomplete and map click will be implemented.</p>
    </div>
  );
}
;

export default SearchBar;
