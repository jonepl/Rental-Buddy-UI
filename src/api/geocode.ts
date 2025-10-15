export type GeocodeSuggestion = {
  label: string;
  latitude: number;
  longitude: number;
};

// Simple Nominatim search for development
// Note: For production, use a provider with an API key and adherence to terms of service.
export async function searchAddresses(query: string, limit = 5): Promise<GeocodeSuggestion[]> {
  if (!query || query.trim().length < 3) return [];
  const url = new URL('https://nominatim.openstreetmap.org/search');
  url.searchParams.set('q', query);
  url.searchParams.set('format', 'json');
  url.searchParams.set('addressdetails', '1');
  url.searchParams.set('limit', String(limit));
  url.searchParams.set('countrycodes', 'us');

  const res = await fetch(url.toString(), {
    headers: {
      'Accept': 'application/json',
    },
  });
  if (!res.ok) return [];
  const data: any[] = await res.json();
  return data.map((item) => ({
    label: item.display_name as string,
    latitude: parseFloat(item.lat),
    longitude: parseFloat(item.lon),
  }));
}
